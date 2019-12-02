import React from 'react';
import styles from './styles.module.scss';
import icon from './album-icon.svg';

const UserAlbum = ({ number, albumId, openModal }) => {
	return (
		<li className={styles.albumWrap} onClick={()=>openModal()}>
			<div className={styles.album}>
				<img src={icon} alt="" className={styles.albumIcon} />
				<span className={styles.albumName}>{`Album ${number+1}`}</span>
			</div>
		</li>
	)
}

export default UserAlbum;