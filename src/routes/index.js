import React from 'react';
import Discover from './Discover';
import Redirect from './Redirect'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const  Routes =  () =>  {
  // Here you'd return an array of routes
  return(
    <Router >
      <Switch>
        <Route path="/" exact component={Discover} />
        <Route path="/redirect" exact component={Redirect} />
      </Switch>
    </Router>
  );
}

export default Routes



