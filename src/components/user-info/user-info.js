import React from 'react';
import { connect } from 'react-redux';


import UserItem from './user-item/';
import UserItemDetails from './user-item-details/';
import styles from './styles.module.scss';
import './styles.scss';


const UserInfo = ({user}) => {
	return (
		<div className={styles.userBox}>
			<img src={`../images/avatar-${user.id}.png`} className={styles.userAvatar} alt="avatar"/>
			<div className={styles.userInfo}>
				<div className={styles.name}>{user.name}</div>
				<UserItem parameter='user-name' value={user.username} />
				<UserItem parameter='email' value={user.email} />
				<UserItem parameter='address' value={user.address && user.address.city}>
					<UserItemDetails parameter='street' value={user.address && user.address.street} />
					<UserItemDetails parameter='suite' value={user.address && user.address.suite} />
					<UserItemDetails parameter='zipcode:' value={user.address && user.address.zipcode} />
				</UserItem>
				<UserItem parameter='phone' value={user.phone} />
				<UserItem parameter='website' value={user.website} />
				<UserItem parameter='company' value={user.company && user.company.name}>
					<UserItemDetails parameter='business' value={user.company && user.company.bs} />
					<UserItemDetails parameter='tagline' value={user.company && user.company.catchPhrase} />
				</UserItem>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.activeUser.user,
		loading: state.activeUser.loading,
		error: state.activeUser.error
	}
}

export default connect(mapStateToProps, null)(UserInfo)