
import './App.css';
import Register from './components/Auth/Register';
import React from 'react';


import { Switch, Route, Redirect, Link } from 'react-router-dom';

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import Container from '@material-ui/core/Container';

// import  { withAuthenticator } from 'aws-amplify-react'

// import aws_exports from './aws-exports'
// import Amplify from 'aws-amplify'

// import useStyles from './components/styles';
// import Home from './components/Home';



const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <Link to="/">Home Page</Link> <Link to="/about">About Page</Link> <Link to="/register">Register </Link>
      </div>
      <h2>  welcome to AutoLog  </h2>
      <Switch>
        <Route exact path="/">
          <h1>Home Page</h1>
        </Route>
        <Route exact path="/about">
          <h1>About Page</h1>
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

// export default withAuthenticator(App, true);
export default App;

