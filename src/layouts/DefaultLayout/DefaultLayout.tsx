import * as React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Paper
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDefaultLayoutStyles } from './styles';

interface IDefaultLayoutProps {
  title: string;
}

export const DefaultLayout: React.FC<IDefaultLayoutProps> = ({
  title,
  children
}) => {
  const { contentPaper } = useDefaultLayoutStyles();

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
      <Paper className={contentPaper}>{children}</Paper>
    </React.Fragment>
  );
};
