import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Issues } from './components/Issues';

//TODO: have a look at ES6 arrow function
const App: React.FC = () => (
  <div>
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
    <Issues />
  </div>
);

export default App;
