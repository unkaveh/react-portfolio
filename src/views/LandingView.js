import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Navbar from '../components/Navbar/Navbar';
import ParticleBlock from '../components/Blocks/ParticleBlock';
import CenterGrid from '../components/Shared/Partials/CenterGrid';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import InfoBlock from '../components/Blocks/InfoBlock';

class NavBar extends Component {
  render() {
    return (
      <div>
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

export default NavBar