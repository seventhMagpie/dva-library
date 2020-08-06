import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';

import Home from './routes/home';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/book-system/up" />
        <Route path='/book-system' render={() => <Home />} />
      </Switch>
    </Router>
  );
};

export default RouterConfig;
