import React, { Component } from 'react';
import withService from '../hoc';
import { connect } from 'react-redux';

import {
	userAlbumsLoaded
} from '../../actions'

import UserAlbum from './user-album';
import Spinner from '../spinner';
import styles from './styles.module.scss';


class UserAlbums extends Component {

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
		albums: state.activeUser.albums,
		loading:state.activeUser.loading
	}
}

export default withService()(connect(mapStatetoProps, null)(UserAlbums))