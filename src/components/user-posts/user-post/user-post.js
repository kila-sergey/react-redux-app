import React from 'react';

import styles from './styles.module.scss';
import icon from './icon.svg';

const UserPost = ({ post, onShowComments }) => {
	return (
		<li className={styles.post}>
			<div className={styles.postRow}>
				<img className={styles.postIcon} src={icon} />
				<h3 className={styles.postTitle}>{post.title}</h3>
			</div>
			<p className={styles.postText}>{post.body}</p>
			<div className={styles.postComments}>
				<button className="button" onClick={()=>onShowComments(post.id)}>Show Comments</button>
			</div>
		</li>
	)
}

export default UserPost;