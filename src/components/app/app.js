import React from 'react';

import { Route, Switch } from 'react-router-dom';
import {
	HOME_PAGE_PATH,
	USERS_PAGE_PATH,
	USER_PAGE_PATH,
	POSTS_PAGE_PATH
} from '../../constants/router-constants';

import HomePage from '../pages/home-page';
import UsersPage from '../pages/users-page';
import UserPage from '../pages/user-page';
import PostsPage from '../pages/posts-page';
import AppHeader from '../app-header';
import  './app.scss';
import PostPage from '../pages/posts-page';


const App = () => {
	return (
		<main className='app'>
			<AppHeader />
			<Switch>
				<Route path={HOME_PAGE_PATH} component={HomePage} exact />
				<Route path={USERS_PAGE_PATH} component={UsersPage} exact />
				<Route path={`${USERS_PAGE_PATH}/:id`} render={({ match }) => {
					const { id } = match.params;
					return <UserPage userId={id}/>
				}} />
				<Route path={POSTS_PAGE_PATH} render={()=>{
					return <PostPage />
				}}/>
			</Switch>
		</main>
	)
}


export default App;