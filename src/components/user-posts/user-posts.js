import React, { Component } from 'react';

import { connect } from 'react-redux';
import withService from '../hoc';

import UserPost from './user-post';
import PostComments from './post-comments';

import {
  postCommentsRequested,
	postCommentsLoaded,
	postCommentsFailed
} from '../../actions';
import styles from './style.module.scss';

class UserPosts extends Component {

	render() {
		const { name, posts, testService, postsCommentsRequested, postCommentsLoaded, postCommentsFailed } = this.props;
		const nameToView = name.split(' ')[0];

		const fetchComments = (id) => {
			const post = posts.find(post => {
				return post.id === id
			})
			const isHaveComments = Boolean(post.comments);
			if (isHaveComments) {
				return;
			}
			else {
        postsCommentsRequested(id)
				testService.getPostComments(id)
					.then(comments => {
						postCommentsLoaded(comments, id);
					})
					.catch(err => {
						postCommentsFailed();
					});
			}
		}

		const postList = posts.map(post => {
			return (
				<UserPost post={post} key={post.id} onShowComments={fetchComments} loading={post.loading}>
					{
						post.comments &&
						<PostComments comments={post.comments} />
					}	
				</UserPost>
			)
		})

		return (
			<div className={styles.posts}>
				<h2 className={styles.title}>{nameToView}'s posts</h2>
				<ul className={styles.postsList}>
					{postList}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.activeUser.posts,
		name: state.activeUser.user.name
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
    postsCommentsRequested:(postId) => dispatch(postCommentsRequested(postId)),
		postCommentsLoaded: (comments, postId) => dispatch(postCommentsLoaded(comments, postId)),
		postCommentsFailed: () => dispatch(postCommentsFailed())
	}
}
export default withService()(connect(mapStateToProps, mapDispatchToProps)(UserPosts));
