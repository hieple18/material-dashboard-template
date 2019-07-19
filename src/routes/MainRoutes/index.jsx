import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { DashboardPage, NotFoundPage, HomePage } from 'pages';

import { RouteProvider } from 'context/RouteContext'

import i18n from "i18n";
const lang = i18n.language;

const changeLanguage = lng => {
  i18n.changeLanguage(lng);
};

const MainRoutes = ({ match, location }) => {

  const contextValue = { match, location };

  if (lang != match.params.locale) {
    changeLanguage(match.params.locale);
  }

  return (
    <RouteProvider value={contextValue}>
      <Switch>
        <Route
          component={HomePage}
          exact
          path={`${match.url}`}
        />
        <Route
          component={DashboardPage}
          exact
          path={`${match.url}/dashboard/:view`}
        />
        <Route
          component={NotFoundPage}
          exact
          path={`${match.url}/not-found`}
        />
        <Redirect
          exact
          from="/"
          to={`${match.url}`}
        />
        <Redirect
          exact
          from={`${match.url}/dashboard`}
          to={`${match.url}/dashboard/monitor`}
        />
      </Switch>
    </RouteProvider>
  );
}

export default MainRoutes;