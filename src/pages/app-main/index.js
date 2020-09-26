import React, { Component, Suspense } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import LazyRouter from '../../router'

class AppMain extends Component {
  render () {
    return (
      <Switch>
        <Redirect exact to="/homePage" from='/' />
        {LazyRouter.map((route, index) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
          >
            <Suspense fallback={<div>Loading</div>}><route.component /></Suspense>
          </Route>
        ))}
      </Switch>
    )
  }
}
export default AppMain