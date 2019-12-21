import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Navbar from '../components/Navbar/Navbar';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Typography variant='h4'>hello world </Typography>
      </div>
    )
  }
}

export default NavBar