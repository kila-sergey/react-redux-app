import React from 'react';
import styles from './styles.module.scss';

const PostComments = ({comments}) => {

	const commentsToRender = comments.map(comment=>{
		return(
			<li className={styles.comment}>
				<div className={styles.commentEmail}>{comment.email}</div>
				<p className={styles.commentText}>{comment.body}</p>
			</li>
		)
	})

	console.log(comments)
	return (
		<ul className={styles.comments}>
			{commentsToRender}
		</ul>
	)
}

export default PostComments;