import React, { Component } from 'react';
import styles from './styles.module.scss';

import withService from '../hoc/';
import { connect } from 'react-redux';
import { usersLoaded, usersRequested, usersError, fetchUsers } from '../../actions/'

import UsersListItem from './users-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/'

class UsersList extends Component {

	componentDidMount() {
		const { fetchUsers } = this.props;

		fetchUsers()

	}

	render() {
		const { users, loading, error, onUserSelected } = this.props;
		const userList = users.map(user => {
			return (
				<UsersListItem user={user} key={user.id} onUserSelected={onUserSelected}/>
			)
		})

		if (loading) {
			return (
				<Spinner />
			)
		}
		if (error) {
			return (
				<ErrorIndicator />
			)
		}
		return (
			<ul className={styles.userList}>
				{userList}
			</ul>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		users: state.usersList.users,
		loading: state.usersList.loading,
		error: state.usersList.error
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const { testService } = ownProps;
	return {
		fetchUsers: fetchUsers(dispatch, testService)
	}
}

export default withService()(connect(mapStateToProps, mapDispatchToProps)(UsersList));