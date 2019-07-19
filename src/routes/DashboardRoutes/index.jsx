import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import {
  Monitor,
  ProductList,
  UserList,
  Typography,
  Account,
  Settings,
  UnderDevelopment,
  Tables,
  Form,
  Blank,
  Map
} from 'views';

import RouteContext, { RouteConsumer } from 'context/RouteContext'

export default class DashboardRoutes extends Component {

  // A static variable for Route Context
  static contextType = RouteContext;

  render() {

    // Get match property from the context
    const { match } = this.context;
    // const { match } = this.props;
    console.log('match', match)
    console.log('this.context', this.context)

    return (
      <Switch>
        <Route
          exact
          path={`${match.url}/dashboard/monitor`}
          component={Monitor}
        />
        <Route
          component={UserList}
          exact
          path={`${match.url}/dashboard/users`}
        />
        <Route
          component={ProductList}
          exact
          path={`${match.url}/dashboard/products`}
        />
        <Route
          component={Typography}
          exact
          path={`${match.url}/dashboard/typography`}
        />
        <Route
          component={Account}
          exact
          path={`${match.url}/dashboard/account`}
        />
        <Route
          component={Settings}
          exact
          path={`${match.url}/dashboard/settings`}
        />
        <Route
          component={UnderDevelopment}
          exact
          path={`${match.url}/dashboard/under-development`}
        />
        <Route
          component={Tables}
          exact
          path={`${match.url}/dashboard/tables`}
        />
        <Route
          component={Form}
          exact
          path={`${match.url}/dashboard/form`}
        />
        <Route
          component={Blank}
          exact
          path={`${match.url}/dashboard/blank`}
        />
        <Route
          component={Map}
          exact
          path={`${match.url}/dashboard/map`}
        />
        <Redirect
          exact
          from={`${match.url}/dashboard`}
          to={`${match.url}/dashboard/monitor`}
        />
      </Switch>
    );
  }
}
