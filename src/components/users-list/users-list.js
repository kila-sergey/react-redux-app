import React, { Component } from 'react';
import styles from './styles.module.scss';

import withService from '../hoc/';
import { connect } from 'react-redux';
import { fetchUsersSuccess } from '../../actions/'

import UsersListItem from './users-list-item';

class UsersList extends Component {

	componentDidMount() {
		const { testService, usersLoaded } = this.props;

		testService.getAllUsers()
			.then(users => {
				usersLoaded(users);
			})

	}

	render() {
		const { users } = this.props;

		const userList = users.map(user => {
			return (
				<UsersListItem user={user} key={user.id}/>
			)
		})
		return (
			<ul className={styles.userList}>
				{userList}
			</ul>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		users: state.usersList.users
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		usersLoaded: (users) => {
			dispatch(fetchUsersSuccess(users))
		}
	}
}
export default withService()(connect(mapStateToProps, mapDispatchToProps)(UsersList));