import React from 'react';
import styles from './styles.module.scss';

const PostsSort = ({ children }) => {
	return (
		<div className={styles.sorting}>
			<span className={styles.prefix}>Sort by:</span>
			{children}
		</div>
	)
}

export default PostsSort;