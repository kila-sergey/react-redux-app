const usersRequested = () => {
	return {
		type: 'FETCH_USERS_REQUEST'
	}
}

const usersLoaded = (users) => {
	return {
		type: 'FETCH_USERS_SUCCESS',
		payload: users
	}
}

const usersError = () => {
	return {
		type: 'FETCH_USERS_ERROR'
	}
}

const fetchUsers = (dispatch, service) => () => {
	dispatch(usersRequested());
	service.getAllUsers()
		.then(users => {
			setTimeout(() => {
				dispatch(usersLoaded(users))
			}, 500)
		})
		.catch(err => {
			dispatch(usersError())
		})
}

export {
	usersRequested,
	usersLoaded,
	usersError,
	fetchUsers
}