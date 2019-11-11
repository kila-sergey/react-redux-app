import React from 'react';

import styles from './styles.module.scss';

const UsersListItem = ({ user, onUserSelected }) => {
	return (
		<li className={styles.user} key={user.id} onClick={()=>onUserSelected(user.id)}>
			<img src={`images/avatar-${user.id}.png`} alt="" className={styles.userPhoto}/>
			<div className={styles.userInfo}>
				<span className={styles.userNick}>{user.username}</span>
				<span className={styles.userName}>({user.name})</span>
			</div>
		</li>
	)
}

export default UsersListItem;