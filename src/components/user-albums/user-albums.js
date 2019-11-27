import React from 'react';
import { connect } from 'react-redux';



import UserAlbum from './user-album';
import styles from './styles.module.scss';


const UserAlbums = ({ albums }) => {
	return (
		<ul className={styles.albums}>
			{
				albums.map((album, id) => {
					return (
						<UserAlbum number={id} albumId={album.id} key={album.id} />
					)
				})
			}
		</ul>

	)
}

const mapStatetoProps = (state) => {
	return {
		albums: state.activeUser.albums,
		loading: state.activeUser.loading
	}
}

export default connect(mapStatetoProps, null)(UserAlbums)