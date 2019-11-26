import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
	userIdRequested,
	userLoaded,
	userFetchError,
	userAlbumsLoaded,
	userFetchSuccess
} from '../../actions';

import Spinner from '../spinner';
import withService from '../hoc/';
import UserInfo from '../user-info';
import UserAlbums from '../user-albums';

class UserPage extends Component{


	
	componentDidMount(){
		const {userId,updateUserId,testService,onUserFetchSuccess, onUserLoaded, onAlbumsLoaded}=this.props;
		updateUserId(userId);
		
		const getUserData=()=>{
			testService.getUser(userId)
			.then(user => {
				onUserLoaded(user)
			})
		}
		const getUserAlbums = () =>{
			testService.getUserAlbums(userId)
			.then(albums=>{
				onAlbumsLoaded(albums)
			})
		}

		Promise.all([
			getUserData(),
			getUserAlbums()])
			.then(result=>{
				onUserFetchSuccess()
			})


		
	
	}
	render(){
		const {loading} = this.props;
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
		onUserLoaded: (user) => dispatch(userLoaded(user)),
		onAlbumsLoaded:(albums)=>dispatch(userAlbumsLoaded(albums)),
		onUserFetchError: () => dispatch(userFetchError()),
		onUserFetchSuccess:() => dispatch(userFetchSuccess()),
	}
}
export default withService()(connect(mapStateToProps,mapDispatchToProps)(UserPage));