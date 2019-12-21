import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles
} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
  card: {
    minWidth: 400,
    margin: 20
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


class InfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick() {
    this.setState(state => ({
      expanded: !state.expanded
    }));
  };

  render() {
    const { 
      classes, 
      image, 
      imageTitle, 
      title, 
      subtitle,
      content
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          title={imageTitle}
        ><img src={image} style={{width: '100%'}}/></CardMedia>
        <CardContent style={{paddingBottom: 0}}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="overline" gutterBottom>
            {subtitle}
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
            {this.props.children}
          </CardContent>
        </Collapse>
      </Card>
    )
  }
}

InfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string,
  imageTitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string
};

InfoCard.defaultProps = {
  image: 'https://via.placeholder.com/720x400',
  imageTitle: 'Image here',
  title: 'Title',
  subtitle: 'Subtitle'
}

export default withStyles(styles)(InfoCard);