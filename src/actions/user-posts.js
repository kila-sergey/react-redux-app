const userPostsLoaded = (posts) => {
	return {
		type: 'FETCH_USER_POSTS_SUCCESS',
		payload: posts
	}
}

export {
	userPostsLoaded,
}