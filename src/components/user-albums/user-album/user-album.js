import React from 'react';
import styles from './styles.module.scss';
import icon from './album-icon.svg';

const UserAlbum = ({ number, albumId }) => {
	return (
		<li className={styles.album}>
			<img src={icon} alt="" className={styles.albumIcon} />
			<span className={styles.albumName}>{`Album ${number+1}`}</span>
		</li>
	)
}

export default UserAlbum;