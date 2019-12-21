import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 40
  },
});


class CenterGrid extends Component {
  
  render() {
    const {classes} = this.props;
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={6}>
        {this.props.children}
      </Grid>
    </Grid>
  )}
}

CenterGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CenterGrid)