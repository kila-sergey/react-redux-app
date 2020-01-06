import React, { useState} from 'react';
import styles from './styles.module.scss';
import { CSSTransition } from 'react-transition-group';

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
				<button className='button' onClick={() => toggleItemDetails()}>Show More</button>
			)}
			<CSSTransition
				in={isDetailsOpen}
				timeout={{
					enter:500,
					exit:500
				}}
				classNames='user-details-box'
				unmountOnExit={true}
				mountOnEnter={true}
				appear={true}
				>
				<div className={`user-details-box`}>
					{children}
				</div>
			</CSSTransition>
		</div>
	)
}

export default UserItem