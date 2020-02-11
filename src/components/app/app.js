import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
	HOME_PAGE_PATH,
	USERS_PAGE_PATH,
	POSTS_PAGE_PATH
} from '../../constants/router-constants';

import HomePage from '../pages/home-page';
import AppHeader from '../app-header';
import './app.scss';


const UsersPage = lazy(() => import('../pages/users-page'));
const PostsPage = lazy(() => import('../pages/posts-page'));
const UserPage = lazy (() => import('../pages/user-page'));

const App = () => {
	return (
		<main className='app'>
			<AppHeader />
			<Suspense fallback={<></>}>
				<Switch>
					<Route path={HOME_PAGE_PATH} component={HomePage} exact />
					<Route path={USERS_PAGE_PATH} component={UsersPage} exact />
					<Route path={`${USERS_PAGE_PATH}/:id`} render={({ match }) => {
						const { id } = match.params;
						return <UserPage userId={id} />
					}} />
					<Route path={POSTS_PAGE_PATH} render={() => {
						return <PostsPage />
					}} />
				</Switch>
			</Suspense>
		</main>
	)
}


export default App;
