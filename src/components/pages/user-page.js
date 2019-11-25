import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
	userIdRequested,
	userRequested,
	userLoaded,
	userError,
	userAlbumsLoaded
} from '../../actions';

import withService from '../hoc/';
import UserInfo from '../user-info';
import UserAlbums from '../user-albums';

class UserPage extends Component{
	
	componentDidMount(){
		const {userId,updateUserId,testService,  onUserLoaded, onUserRequested, onUserError,onAlbumsLoaded}=this.props;
		updateUserId(userId);
		
		onUserRequested();

		testService.getUser(userId)
		.then(user => {
			onUserLoaded(user)
		})
		.catch(error => {
			onUserError()
		});

		testService.getUserAlbums(userId)
		.then(albums=>{
			onAlbumsLoaded(albums)
		})
	
	}
	render(){
		return(
			<div className="container">
				<UserInfo/>
				<UserAlbums/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.activeUser.loading,
		error: state.activeUser.error
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		updateUserId:(id)=>dispatch(userIdRequested(id)),
		onUserRequested: () => dispatch(userRequested()),
		onUserLoaded: (user) => dispatch(userLoaded(user)),
		onUserError: () => dispatch(userError()),
		onAlbumsLoaded:(albums)=>dispatch(userAlbumsLoaded(albums)),
	}
}
export default withService()(connect(mapStateToProps,mapDispatchToProps)(UserPage));