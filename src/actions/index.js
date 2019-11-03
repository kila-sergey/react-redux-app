const fetchUsersRequest = () => {
	return {
		type: 'FETCH_USERS_REQUEST'
	}
}

const fetchUsersSuccess = (users) => {
	return {
		type: 'FETCH_USERS_SUCCESS',
		payload: users
	}
}

const fetchUsersError = () => {
	return {
		type:'FETCH_USERS_ERROR'
	}
}

export {
	fetchUsersRequest,
	fetchUsersSuccess,
	fetchUsersError
}