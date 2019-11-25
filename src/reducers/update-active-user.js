const initialState = {
	user: {},
	userId: null,
	loading: true,
	error:false,
	albums:[]
}

const updateActiveUser = (state=initialState, action) => {
	switch (action.type) {
		case 'UPDATE_USER_ID':
			return {
				...state,
				userId: action.payload,
			}
		case 'FETCH_USER_REQUEST':
			return {
				...state,
				error:false
			}
		case 'FETCH_USER_SUCCESS':
			return {
				...state,
				user: action.payload,
				loading: false,
				error:false
			}
		case 'FETCH_USER_ERROR':
			return {
				...state,
				loading: false,
				error:true
			}
		case 'FETCH_USER_ALBUMS_SUCCESS':
			return{
				...state,
				albums:action.payload
			}
		default:
			return {
				user: state.user,
				userId: state.userId,
				loading: true,
				error:false,
				albums:state.albums
			}
	}
}

export default updateActiveUser;