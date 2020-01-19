import React from 'react';
import styles from './styles.module.scss';

const PostsListItem = ({title, body}) =>{
	return (
		<li className={styles.postsListItem}>
			<span className={styles.title}>{title}</span>
			<span className={styles.body}>{body}</span>
		</li>
	)
}

export default PostsListItem;