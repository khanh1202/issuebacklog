import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SingleIssuePage } from 'pages/SingleIssuePage';
import { DashboardPage } from 'pages/DashboardPage';

const routes = [
  {
    url: '/',
    component: DashboardPage
  },
  {
    url: '/issues/:id',
    component: SingleIssuePage
  }
];

export const RoutesManager: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(({ url, component }) => (
        <Route key={url} exact path={url} component={component} />
      ))}
    </Switch>
  </BrowserRouter>
);
