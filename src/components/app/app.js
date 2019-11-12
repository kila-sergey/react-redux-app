import React from 'react';

import { Route, Switch } from 'react-router-dom';
import './app.scss';

import withService from '../hoc/';
import HomePage from '../pages/home-page';
import UsersPage from '../pages/users-page';
import UserPage from '../pages/user-page';
import AppHeader from '../app-header/';


const App = ({ testService }) => {
	return (
		<main className="app">
			<AppHeader />
			<Switch>
				<Route path="/" component={HomePage} exact />
				<Route path='/users' exact component={UsersPage} />
				<Route path='/users/:id' render={({ match }) => {
					const { id } = match.params;
					return <UserPage userId={id}/>
				}} />
			</Switch>
		</main>
	)
}


export default withService()(App);