import React, { useState } from 'react';
import UserItemDetails from '../user-item-details';
import styles from './styles.module.scss';

const UserItem = ({ children, parameter, value }) => {
	const [isDetailsOpen, setOpenDetails] = useState(false);

	const toggleItemDetails = () => {
		setOpenDetails(!isDetailsOpen);
	}

	return (
		<div className={styles.userItem}>
			<span className={styles.userItemParameter}>{parameter}</span>
			<span className={styles.userItemValue}>{value}</span>
			{children && (
				<button className={styles.userItemMore} onClick={() => toggleItemDetails()}>Show More</button>
			)}
			{isDetailsOpen && children}
		</div>
	)
}

export default UserItem