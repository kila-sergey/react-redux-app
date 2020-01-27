import React from 'react';

import styles from './style.module.scss';

const AlbumPhoto = ({ photo }) => {
	return (
		<div className={styles.photo}>
			<img src={photo.url} className={styles.image} alt='' />
		</div>
	)
}

export default AlbumPhoto