import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	userIdRequested,
	userDataRequest,
	userLoaded,
	userAlbumsLoaded,
	userPostsLoaded,
	userFetchSuccess,
	userFetchError,
} from '../../actions';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/';
import withService from '../hoc/';
import UserInfo from '../user-info';
import UserAlbums from '../user-albums';
import UserPosts from '../user-posts';

class UserPage extends Component {

	state = {
		isModalOpen:false,
		albumId:null
	}

	onAlbumModalOpen=(id)=>{
		this.setState({
			isModalOpen:true,
			albumId:id
		})
	}

	onModalClose=()=>{
		this.setState({
			isModalOpen:false
		})
	}

	componentDidMount() {
		const { userId,
				updateUserId,
				testService,
				onUserFetchSuccess,
				onUserFetchError,
				onUserLoaded,
				onAlbumsLoaded,
				onPostsLoaded,
				userDataRequest } = this.props;

		updateUserId(userId);

		userDataRequest();

		const getUserInfo = () => {
			return testService.getUser(userId)
				.then(user => {
					onUserLoaded(user)
				})
		}

		const getUserAlbums = () => {
			return testService.getUserAlbums(userId)
				.then(albums => {
					onAlbumsLoaded(albums)
				})
		}

		const getUserPosts = () =>{
			return testService.getUserPosts(userId)
				.then(posts=>{
					onPostsLoaded(posts)
				})
		}
		let promiseUserLoad = Promise.all([getUserInfo(), getUserAlbums(),getUserPosts()])
		promiseUserLoad
			.then(() => {
				onUserFetchSuccess();
			})
			.catch(() => {
				onUserFetchError();
			})
	}
	render() {
		const { loading, error } = this.props;
		if (loading) {
			return <Spinner />
		}
		if(error){
			return <ErrorIndicator/>
		}
		return (
			<div className="container">
				<UserInfo />
				<UserAlbums openAlbumModal={this.onAlbumModalOpen} closeModal={this.onModalClose} isModalOpen={this.state.isModalOpen} albumId={this.state.albumId}/>
				<UserPosts/>
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

const mapDispatchToProps = (dispatch) => {
	return {
		userDataRequest:()=>dispatch(userDataRequest()),
		updateUserId: (id) => dispatch(userIdRequested(id)),
		onUserLoaded: (user) => dispatch(userLoaded(user)),
		onAlbumsLoaded: (albums) => dispatch(userAlbumsLoaded(albums)),
		onPostsLoaded:(posts) => dispatch(userPostsLoaded(posts)),
		onUserFetchError: () => dispatch(userFetchError()),
		onUserFetchSuccess: () => dispatch(userFetchSuccess()),
	}
}
export default withService()(connect(mapStateToProps, mapDispatchToProps)(UserPage));