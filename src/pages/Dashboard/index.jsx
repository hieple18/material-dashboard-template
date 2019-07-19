import React, { Component } from 'react';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

import { DashboardRoutes } from 'routes';

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

export default class Dashboard extends Component {
  render() {
    const { match } = this.props;

    return (
      <DashboardLayout>
        <DashboardRoutes />
      </DashboardLayout>
    );
  }
}