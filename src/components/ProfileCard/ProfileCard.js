import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import KavehPicture from '../../assets/img/kaveh-profile.png';
import ReactLogo from '../../assets/img/react-logo.svg';
import WebpackLogo from '../../assets/img/webpack-logo.svg';

const styles = theme => ({
  card: {
    minWidth: 400

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    paddingTop: 0,
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cardIcons: {
    margin: 10,
    width: 60,
    height: 60,
  }
});

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }
 handleExpandClick() {
this.setState(state => ({ expanded: !state.expanded }));

    };
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={KavehPicture}
          title="That's my face"
        />
        <CardContent style={{paddingBottom: 0}}>
          <Typography variant="h5" gutterBottom>
            Kaveh Afroukhteh
          </Typography>
          <Typography variant="overline" gutterBottom>
            Front End Developer
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} >
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <List dense>
              <ListItem>
                <ListItemAvatar>
                    <Avatar src={ReactLogo} className={classes.cardIcons}/>
                  </ListItemAvatar>
                <ListItemText primary="ReactJS is my primary language for development" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                    <Avatar src={WebpackLogo} className={classes.cardIcons}/>
                  </ListItemAvatar>
                <ListItemText primary="I know webpack" />
              </ListItem>
            </List>
        </CardContent>
      </Collapse>
      </Card>
    );
  }
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileCard);