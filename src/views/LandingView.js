import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Navbar from '../components/Navbar/Navbar';
import ParticleBlock from '../components/ParticleBlock/ParticleBlock';
import CenterGrid from '../components/Shared/Partials/CenterGrid';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import InfoCard from '../components/InfoCard/InfoCard';
import Grid from '../components/InfoCard/InfoCard';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ParticleBlock />
        <CenterGrid>
          <ProfileCard />
        </CenterGrid>
        <Grid container style={{flexGrow: 1}}>
          <Grid item xs={4}>
            <InfoCard><h1>hello</h1></InfoCard>
          </Grid>
          <Grid item xs={4}>
            <InfoCard></InfoCard>
          </Grid>
          <Grid item xs={4}>
            <InfoCard></InfoCard>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default NavBar