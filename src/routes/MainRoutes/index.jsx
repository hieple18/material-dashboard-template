import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { DashboardPage, NotFoundPage, HomePage } from 'pages';

export default class MainRoutes extends Component {
  render() {
    return (
      <Switch>
        <Redirect
          exact
          from="/home"
          to="/"
        />
        <Route
          component={HomePage}
          exact
          path="/"
        />
        <Route
          component={DashboardPage}
          exact
          path="/dashboard/:view"
        />
        <Route
          component={NotFoundPage}
          exact
          path="/not-found"
        />
        <Redirect
          exact
          from="/dashboard"
          to="/dashboard/monitor"
        />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}
