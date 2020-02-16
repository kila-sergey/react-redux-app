import React, { useState } from 'react';

import Button from '../../button';
import styles from './styles.module.scss';
import icon from './icon.svg';
import { CSSTransition } from 'react-transition-group';

const UserPost = ({ post, onShowComments, children }) => {
	const [isCommentsShown, setCommentsShow] = useState(false);

	const showCommentsToggle = () => {
		setCommentsShow(!isCommentsShown);
	}
	const isShouldViewComments = Boolean(isCommentsShown&&post.comments);
	return (
		<li className={styles.post}>
			<div className={styles.postRow}>
				<img className={styles.postIcon} src={icon} alt='post'/>
				<h3 className={styles.postTitle}>{post.title}</h3>
			</div>
			<p className={styles.postText}>{post.body}</p>
			<div className={styles.postComments}>
				<Button 
					onClick={()=> {
						onShowComments(post.id);
						showCommentsToggle();
					}}
					name = "Show Comments" />
			</div>
			<CSSTransition
				in={isShouldViewComments}
				timeout={{
					enter: 500,
					exit: 500
				}}
				classNames='comments'
				unmountOnExit={true}
				mountOnEnter={true}
				appear={true}
			>
				<ul className="comments">
					{children}
				</ul>
			</CSSTransition>
		</li>
	)
}

export default UserPost;