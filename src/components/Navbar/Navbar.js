import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import theme from '../../styles/theme';

class NavBar extends Component {
  render() {
    // const color = theme.colors.plum
    return (
      <div>
        <AppBar position="static" style={{backgroundColor: theme.colors.midnight}}>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Kaveh Afroukhteh
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default NavBar;