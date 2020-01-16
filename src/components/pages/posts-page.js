import React, {Component} from 'react';
import PostsList from '../posts-list';

export default class PostPage extends Component {
	render(){
		return(
			<div className="container">
				<PostsList />
			</div>
		)
	}
}
