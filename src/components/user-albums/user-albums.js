import React, { Component } from 'react';
import withService from '../hoc';
import { connect } from 'react-redux';

import {
	userAlbumsLoaded
} from '../../actions'

import UserAlbum from './user-album';

import styles from './styles.module.scss';


class UserAlbums extends Component {

	componentDidUpdate(prevProps){
		const {userId,testService,onAlbumsLoaded}=this.props;
		if(prevProps.userId!==userId){
			testService.getUserAlbums(userId)
				.then(albums=>{
					onAlbumsLoaded(albums)
				})
		}
	}
	render() {
		
		const {albums} = this.props;
		return (
			<ul className={styles.albums}>
				{
					albums.map((album,id)=>{
						return(
							<UserAlbum number={id} albumId={album.id} key={album.id}/>
						)
					})
				}
			</ul>

		)
	}
}

const mapStatetoProps = (state) => {
	return {
		userId:state.activeUser.userId,
		albums: state.activeUser.albums,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onAlbumsLoaded:(albums)=>dispatch(userAlbumsLoaded(albums))
	}
}
export default withService()(connect(mapStatetoProps, mapDispatchToProps)(UserAlbums))