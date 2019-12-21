import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import InfoCard from '../InfoCard/InfoCard';
import { withStyles } from '@material-ui/core/styles';

// local assets
import educationImg from '../../assets/img/thumbnails/education-card.svg';
import skillImg from '../../assets/img/thumbnails/skill-card.svg';
import expirenceImg from '../../assets/img/thumbnails/expirence-card.svg';
import infoBg from '../../assets/img/backgrounds/midarea-bg.png'


const styles = theme => ({
  root: {
    marginTop: '10%',
    marginBottom: '10%',
    paddingTop: '10%', 
    paddingBottom: '10%',
    backgroundImage: 'url(' + infoBg + ')',
    backgroundSize: 'cover',
  },
});

function InfoBlock(props) {
  const { classes } = props;
  return(
    <Grid 
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <InfoCard
          image={educationImg}
          title='Education'
        >
          <h1>hello</h1>
        </InfoCard>
      </Grid>
      <Grid item>
        <InfoCard
          image={skillImg}
          title='Skills'
        ></InfoCard>
      </Grid>
      <Grid item>
        <InfoCard
          image={expirenceImg}
          title='Work'
        ></InfoCard>
      </Grid>
    </Grid>
  )
}

InfoBlock.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(InfoBlock);