import React from 'react';
import styles from './styles.module.scss';
import { CSSTransition } from 'react-transition-group';

const PostComments = ({comments}) => {

	const commentsToRender = comments.map(comment=>{
		return(
			<li className={styles.comment}>
				<div className={styles.commentEmail}>{comment.email}</div>
				<p className={styles.commentText}>{comment.body}</p>
			</li>
		)
	})

	return (
		<React.Fragment>
			{commentsToRender}
		</React.Fragment>
	)
}

export default PostComments;