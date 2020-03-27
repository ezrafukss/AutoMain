import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import Amplify, { Auth } from 'aws-amplify';
import config from './config.json';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
});
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
