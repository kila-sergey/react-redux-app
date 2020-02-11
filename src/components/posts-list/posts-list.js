import React from 'react';
import PostsListItem from './posts-list-item';
import styles from './styles.module.scss'

const PostsList = ({ posts, searchValue }) => {
	const postsList = posts.map(post => {
		return <PostsListItem
			key={post.id}
      title={post.title}
      searchValue={searchValue}
      userId={post.userId}
			body={post.body} />
	})

	return (
		<ul className={styles.postsList}>
			{
				postsList
			}
		</ul>
	)
}

export default PostsList;
