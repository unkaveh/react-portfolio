import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles
} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  card: {
    minWidth: 400,
    margin: 20
  },
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
          <Typography variant="body2" component="p">
            {this.props.children}
          </Typography>
        </CardContent>
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