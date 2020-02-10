import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.scss';

const AlbumPhoto = ({ photo }) => {
	return (
		<div className={styles.photo}>
			<img src={photo.url} className={styles.image} alt='' />
		</div>
	)
}


AlbumPhoto.propTypes = {
  photo: PropTypes.object
}

export default AlbumPhoto
