import React from 'react';

import {Route,Switch} from 'react-router-dom';
import './app.scss';

import withService from '../hoc/';
import HomePage from '../pages/home-page';
import UserPage from '../pages/user-page';
import AppHeader from '../app-header/';


const App = ({testService}) => {
	return (
		<main className="app">
			<div className="container">
				<AppHeader/>
				<Switch>
					<Route path="/" component={HomePage} exact/>
					<Route path='/users' component={UserPage}/>
				</Switch>
			</div>
		</main>
	)
}


export default withService()(App);