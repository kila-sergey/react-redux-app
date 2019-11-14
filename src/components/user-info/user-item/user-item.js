import React from 'react';

import styles from './styles.module.scss';

const UserItem = ({ parameter, value, hasDetails=false, detailsToggleFunc=null }) => {
	if(hasDetails){
		return(
			<div className={styles.userItem}>
				<span className={styles.userItemParameter}>{parameter}</span>
				<span className={styles.userItemValue}>{value}</span>
				<button className={styles.userItemMore} onClick={() => detailsToggleFunc()}>Show More</button>
			</div>
		)
	}
	else{
		return (
			<div className={styles.userItem}>
				<span className={styles.userItemParameter}>{parameter}</span>
				<span className={styles.userItemValue}>{value}</span>
			</div>
		)
	}
	
}

export default UserItem