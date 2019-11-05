import * as React from 'react';
import { DefaultLayout } from 'layouts/DefaultLayout';
import { WrappedIssues } from 'components/Issues';

export const DashboardPage: React.FC = () => (
  <DefaultLayout title="Dashboard">
    <WrappedIssues />
  </DefaultLayout>
);
