import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';

import example from './routes/example';
import Home from './routes/home';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path='/' render={() => <Home />} />
        <Route path="/example" component={example} />
      </Switch>
    </Router>
  );
};

export default RouterConfig;
