import React, { Component } from 'react';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

import { DashboardRoutes } from 'routes';

export default class Dashboard extends Component {
    render() {
      return (
        <DashboardLayout>
          <DashboardRoutes />
        </DashboardLayout>
      );
    }
  }