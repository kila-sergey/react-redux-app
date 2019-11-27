import React from 'react';

import styles from './style.module.scss';

const UserPosts = () =>{
	return(
		<div className={styles.posts}>
			<h2 className={styles.title}>user posts</h2>
			<ul className={styles.postsList}>
				<li className={styles.post}>
					
				</li>
			</ul>
		</div>
	)
}

export default UserPosts;