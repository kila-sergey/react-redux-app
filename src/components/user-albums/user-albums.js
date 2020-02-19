import React from 'react';
import { connect } from 'react-redux';


import Modal from '../modal';
import AlbumPhotos from '../album-photos';
import UserAlbum from './user-album';
import styles from './styles.module.scss';


const UserAlbums = ({ albums, openAlbumModal, closeModal, isModalOpen, albumId}) => {
	return (
		<ul className={styles.albums}>
			{
				albums.map((album, id) => {
					return (
						<UserAlbum number={id} albumId={album.id} key={album.id} openAlbumModal={openAlbumModal}/>
					)
				})
			}
			<Modal closeModal={closeModal} isModalOpen={isModalOpen}>
				<AlbumPhotos albumId={albumId}/>
			</Modal>
		</ul>
	)
}

const mapStatetoProps = (state) => {
	return {
		albums: state.activeUser.albums,
	}
}

export default connect(mapStatetoProps, null)(UserAlbums)
