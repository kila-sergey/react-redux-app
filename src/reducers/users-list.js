const initialState = {
	users: [],
	loading: true,
	error: false
}

const updateUsersList = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_USERS_REQUEST':
			return {
				users: [],
				loading: true,
				error: false
			}
		case 'FETCH_USERS_ERROR':
			return {
				users: state.users,
				loading: false,
				error: true
			}
		case 'FETCH_USERS_SUCCESS':
			return {
				users: action.payload,
				loading: false,
				error: false
			}
		default:
			return {
				users: state.users,
				loading: state.loading,
				error: state.error
			}
	}
}

export default updateUsersList;