import * as React from 'react';
import { DefaultLayout } from 'layouts/DefaultLayout';
import Issues from 'components/Issues';

export const DashboardPage: React.FC = () => (
  <DefaultLayout title="Dashboard">
    <Issues />
  </DefaultLayout>
);
