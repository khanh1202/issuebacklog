import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

//TODO: have a look at ES6 arrow function
const App: React.FC = () => (
  <div>
    <AppBar>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Issues Log</Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default App;
