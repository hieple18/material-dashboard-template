import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import { 
  Monitor,
  ProductList,
  UserList,
  Typography,
  Icons,
  Account,
  Settings,
  UnderDevelopment,
  Tables
} from 'views';

export default class DashboardRoutes extends Component {
  render() {
    return (
      <Switch>
        <Redirect
          exact
          from="/dashboard"
          to="/dashboard/monitor"
        />
        <Route
          component={Monitor}
          exact
          path="/dashboard/monitor"
        />
        <Route
          component={UserList}
          exact
          path="/dashboard/users"
        />
        <Route
          component={ProductList}
          exact
          path="/dashboard/products"
        />
        <Route
          component={Typography}
          exact
          path="/dashboard/typography"
        />
        <Route
          component={Icons}
          exact
          path="/dashboard/icons"
        />
        <Route
          component={Account}
          exact
          path="/dashboard/account"
        />
        <Route
          component={Settings}
          exact
          path="/dashboard/settings"
        />
        <Route
          component={UnderDevelopment}
          exact
          path="/dashboard/under-development"
        />
        <Route
          component={Tables}
          exact
          path="/dashboard/tables"
        />
      </Switch>
    );
  }
}
