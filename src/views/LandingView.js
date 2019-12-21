import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar/Navbar';
import ParticleBlock from '../components/Blocks/ParticleBlock';
import CenterGrid from '../components/Shared/Partials/CenterGrid';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import InfoBlock from '../components/Blocks/InfoBlock';

const styles = theme => ({
  root: {
    background: theme.colors.plum,
  },
});

class LandingView extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Navbar />
        <ParticleBlock />
        <CenterGrid width='6'>
          <ProfileCard />
        </CenterGrid>
        <InfoBlock />
      </div>
    )
  }
}

export default withStyles(styles)(LandingView)