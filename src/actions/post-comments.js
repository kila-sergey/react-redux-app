const postCommentsLoaded = (comments, postId) => {
	return {
		type: 'FETCH_POST_COMMENTS_SUCCESS',
		payload: comments,
		postId: postId
	}
}

const postCommentsFailed = () => {
	return {
		type:'FETCH_POSTS_COMMENTS_ERROR'
	}
}

export {
	postCommentsLoaded,
	postCommentsFailed
}