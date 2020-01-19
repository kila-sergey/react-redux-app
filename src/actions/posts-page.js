const postsRequested = () => {
	return {
		type: 'FETCH_POSTS_REQUEST'
	}
}

const postsLoaded = (posts) => {
	return {
		type: 'FETCH_POSTS_SUCCESS',
		payload: posts
	}
}

const postsErrored = () => {
	return {
		type: 'FETCH_POSTS_ERROR'
	}
}

export {
	postsRequested,
	postsLoaded,
	postsErrored
}