import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostsList from '../posts-list';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/';
import Search from '../search';
import withService from '../hoc/';
import {
	postsRequested,
	postsLoaded,
	postsErrored
} from '../../actions';

class PostPage extends Component {

	state = {
		searchValue: '',
	}

	componentDidMount() {
		const { testService, postsErrored, postsRequested, postsLoaded } = this.props;
		postsRequested();
		testService.getAllPosts()
			.then(posts => {
				postsLoaded(posts)
			})
			.catch(() => {
				postsErrored()
			})
	}

	onSearchChange = (e) => {
		this.setState({
			searchValue: e.target.value
		})
	}
	filterItems = (items, searchValue = '') => {
		if (searchValue.length === 0) {
			return items;
		}
		return items.filter(item => {
			return item.title
					.toLowerCase()
					.indexOf(searchValue.toLowerCase()) > -1;
		})
	}
	render() {
		const { loading, error, posts } = this.props;
		const { searchValue } = this.state;
		const visiblePosts = this.filterItems(posts, searchValue);
		return (
			<div className="container">
				<Search value={this.state.searchValue} onChange={this.onSearchChange} />
				{
					loading &&
					<Spinner />
				}
				{
					error &&
					<ErrorIndicator />
				}
				{
					!loading && !error &&
					<PostsList posts={visiblePosts} />
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.postsPage.posts,
		error: state.postsPage.error,
		loading: state.postsPage.loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		postsRequested: () => dispatch(postsRequested()),
		postsLoaded: (posts) => dispatch(postsLoaded(posts)),
		postsErrored: () => dispatch(postsErrored()),
	}
}
export default withService()(connect(mapStateToProps, mapDispatchToProps)(PostPage));