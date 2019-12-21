import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import { withStyles } from '@material-ui/core/styles';

import gradBg from '../../assets/img/backgrounds/grad-bg.png';


const styles = theme => ({
  root: {
    height: '50vh', 
    width: '100vw',
    backgroundImage: 'url(' + gradBg + ')',
    backgroundSize: 'cover',
    background: theme.colors.salmon,
    clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 91%)',
    '-webkit-clip-path': 'polygon(0 0, 100% 0, 100% 70%, 0 91%)'
  },
});

function ParticleBlock(props) {
  const { classes } = props;
  return(
    <>
      <Particles
        className={classes.root}
        params={{
          "particles": {
          "number": {
            "value": 150,
            "density": {
              "enable": true,
              "value_area": 400
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 4
            }
          },
          "opacity": {
            "value": 0.8,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 75,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
          "retina_detect": true
      }} />
    </>
  )
}

ParticleBlock.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ParticleBlock);