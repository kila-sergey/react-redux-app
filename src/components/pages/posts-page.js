import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostsList from '../posts-list';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/';
import Search from '../search';
import Button from '../button';
import PostsSort from '../posts-sort';
import withService from '../hoc/';
import {
	postsRequested,
	postsLoaded,
	postsErrored
} from '../../actions';

class PostPage extends Component {

	state = {
		searchValue: '',
		sortBy: 'user',
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

	sort = (items, sortValue) => {
		switch (sortValue) {
			case 'title':
				return items.sort((a, b) => {
					if (a.title < b.title) {
						return -1
					}
					if (a.title > b.title) {
						return 1
					}
					return 0
				})
			case 'user':
				return items.sort((a, b) => {
					if (a.userId < b.userId) {
						return -1
					}
					if (a.userId > b.userId) {
						return 1
					}
					return 0
				})
			default:
				return items
		}
	}

	onSortToggle = (sortBy) => {
		this.setState({
			sortBy
		})
	}
	render() {
		const { loading, error, posts } = this.props;
		const { searchValue, sortBy } = this.state;
		const visiblePosts = this.sort(this.filterItems(posts, searchValue), sortBy);
		return (
			<div className="container">
				<Search value={this.state.searchValue} onChange={this.onSearchChange} />
				<PostsSort>
					<Button onClick={() => this.onSortToggle('title')} name="name" />
					<Button onClick={() => this.onSortToggle('user')} name="user" />
				</PostsSort>
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
					<PostsList posts={visiblePosts} searchValue={searchValue} />
				}
			</div>
		)
	}
}

PostPage.propTypes = {
	error: PropTypes.bool,
	loading: PropTypes.bool,
	posts: PropTypes.array,
	postsErrored: PropTypes.func,
	postsRequested: PropTypes.func,
	postsLoaded: PropTypes.func,
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
