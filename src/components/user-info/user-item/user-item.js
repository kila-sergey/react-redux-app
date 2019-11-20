import React, { useState } from 'react';
import UserItemDetails from '../user-item-details';
import styles from './styles.module.scss';
import { Transition } from 'react-transition-group';

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
			<Transition
				in={isDetailsOpen}
				timeout={{
					enter: 100,
					exit: 500,
				}}
				unmountOnExit={true}
				mountOnEnter={true}>
				{
					(state) => (
						(
							<div className={`user-details-box user-details-box-${state}`}>
								{children}
							</div>
						)
					)
				}
			</Transition>
		</div>
	)
}

export default UserItem