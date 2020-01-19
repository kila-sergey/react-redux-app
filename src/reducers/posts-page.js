const initialState = {
	posts: [],
	error: false,
	loading: false,
}

const postsPage = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_POSTS_REQUEST':
			return {
				posts: [],
				error: false,
				loading: true
			}
		case 'FETCH_POSTS_SUCCESS':
			return {
				posts: action.payload,
				error: false,
				loading: false,
			}
		case 'FETCH_POSTS_ERROR':
			return {
				posts: action.payload,
				error: true,
				loading: false,
			}
		default:
			return {
				...state
			}
	}
}

export default postsPage;