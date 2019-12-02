import React from 'react';

import {connect} from 'react-redux';

import UserPost from './user-post';

import styles from './style.module.scss';

const UserPosts = ({posts,name}) =>{
	const postList = posts.map(post=>{
		return <UserPost post={post} key={post.id}/>
	})
	const nameToView=name.split(' ')[0];
	
	return(
		<div className={styles.posts}>
			<h2 className={styles.title}>{nameToView}'s posts</h2>
			<ul className={styles.postsList}>
				{postList}
			</ul>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		posts:state.activeUser.posts,
		name:state.activeUser.user.name
	}
}
export default connect(mapStateToProps,null)(UserPosts);