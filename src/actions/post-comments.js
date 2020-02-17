const postCommentsRequested = (postId) => {
  return {
    type:'FETCH_POSTS_COMMENTS_REQUEST',
    postId: postId
  }
}

const postCommentsLoaded = (comments, postId) => {
	return {
		type: 'FETCH_POSTS_COMMENTS_SUCCESS',
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
  postCommentsRequested,
	postCommentsLoaded,
  postCommentsFailed,
}
