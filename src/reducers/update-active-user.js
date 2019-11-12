const updateActiveUser = (state, action) => {
	if (state === undefined) {
		return {
			user: {},
			activeUserId: null
		}
	}

	switch (action.type) {
		case 'UPDATE_USER_ID':
			return {
				user: state.user,
				activeUserId: action.payload
			}
		default:
			return {
				user: state.user,
				activeUserId: state.activeUserId
			}
	}
}

export default updateActiveUser;