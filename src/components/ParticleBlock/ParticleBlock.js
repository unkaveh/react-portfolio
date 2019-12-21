import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    height: '30vh', 
    width: '100vw',
    backgroundColor: 'black'
  },
});

function ParticleBlock(props) {
  const { classes } = props;
  return(
    <div className={classes.root}>

    </div>
  )
}

ParticleBlock.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ParticleBlock);