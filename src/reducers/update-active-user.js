const initialState = {
	user: {},
	userId: null,
	loading: true
}

const updateActiveUser = (state=initialState, action) => {
	switch (action.type) {
		case 'UPDATE_USER_ID':
			return {
				user: {},
				userId: action.payload,
				loading: true
			}
		case 'FETCH_USER_REQUEST':
			return {
				user: {},
				userId: state.userId,
				loading: true,
			}
		case 'FETCH_USER_SUCCESS':
			return {
				user: action.payload,
				userId: state.userId,
				loading: false,
			}
		case 'FETCH_USER_ERROR':
			return {
				user: {},
				userId: state.userId,
				loading: false,
			}
		default:
			return {
				user: state.user,
				userId: state.userId,
				loading: true
			}
	}
}

export default updateActiveUser;