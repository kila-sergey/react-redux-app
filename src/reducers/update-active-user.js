const initialState = {
	userId: null,
	user: {},
	loading: true,
	error:false,
	albums:[],
	posts:[]
}

const updateActiveUser = (state=initialState, action) => {
	switch (action.type) {
		case 'UPDATE_USER_ID':
			return {
				...state,
				userId: action.payload,
			}
		case 'FETCH_USERDATA_REQUEST':
			return {
				...state,
				loading:true
			}
		case 'FETCH_USER_SUCCESS':
			return {
				...state,
				user: action.payload,
			}
		case 'FETCH_USER_ALBUMS_SUCCESS':
			return{
				...state,
				albums:action.payload
			}
		case 'FETCH_USER_POSTS_SUCCESS':
			return{
				...state,
				posts:action.payload
			}
		case 'USER_PAGE_LOADED':
			return{
				...state,
				loading:false
			}
		case 'USER_PAGE_ERROR':
			return{
				...state,
				loading: false,
				error:true
			}
		case 'FETCH_POST_COMMENTS_SUCCESS':
			const post = state.posts.find(post=>{
				return post.id===action.postId
			})
			console.log(post)
			return {
				...state,
				posts:[...state.posts, action.payload]
			}
		case 'FETCH_POSTS_COMMENTS_ERROR':
			return {
				...state,
				error:true
			}
		default:
			return {
				...state
			}
	}
}

export default updateActiveUser;