import * as React from 'react';
import { DefaultLayout } from 'layouts/DefaultLayout';
import { Typography } from '@material-ui/core';

export const SingleIssuePage: React.FC = () => (
  <DefaultLayout title="Dashboard">
    <Typography>Here is a single issue</Typography>
  </DefaultLayout>
);
