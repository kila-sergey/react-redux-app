import React from 'react';
import styles from './styles.module.scss';

const UserItemDetails = ({ parameter, value }) => {
	return (
		<div className={styles.userDetailsItem}>
			<span className={styles.userDetailsItemParameter}>{parameter}</span>
			<span className={styles.userDetailsItemValue}>{value}</span>
		</div>
	)
}

export default UserItemDetails;