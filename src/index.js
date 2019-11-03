import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {ServiceProvider} from './components/service-context';
import TestService from './services/test-service';

import {store} from './store';
import ErrorBoundry from './components/error-boundry';
import App from './components/app';


const testService = new TestService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<ServiceProvider value={testService}>
				<Router>
					<App/>
				</Router>
			</ServiceProvider>
		</ErrorBoundry>
	</Provider>, document.getElementById('root'))