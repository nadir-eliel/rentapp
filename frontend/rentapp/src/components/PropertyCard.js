import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GradeIcon from '@material-ui/icons/Grade';
import CommentIcon from '@material-ui/icons/Comment';
import IconButton from '@material-ui/core/IconButton';
import HotelIcon from '@material-ui/icons/Hotel';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Rating from './SimpleRating';
import Divider from '@material-ui/core/Divider';
import { Link, withRouter } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';

class PropertyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProperty: undefined,
    };
  }

  handleSelectProperty(e) {
    this.props.selectProperty(this.props.id);
  }

  render() {
    return (
      <Card
        style={{
          maxWidth: 400,
          padding: 5,
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,
          maxHeight: 380,
        }}
      >
        <CardMedia image={this.props.photo} style={{ height: 160 }} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.other_property_details}
          </Typography>
          <div fontSize="small">
            <IconButton fontSize="small" aria-label="Comentarios">
              <CommentIcon fontSize="small" />
              {this.props.commentary_count}
            </IconButton>
            <IconButton aria-label="Valoracion">
              <GradeIcon fontSize="small" />
              {this.props.valoration}
            </IconButton>
            <IconButton aria-label=" Comentarios">
              <HotelIcon fontSize="small" />
              {this.props.bedroom_count}
            </IconButton>
            <IconButton aria-label=" Comentarios">
              <AttachMoneyIcon fontSize="small" />
              {this.props.price}
            </IconButton>
          </div>
          <Divider variant="middle" />
          {/*<Rating />*/}
        </CardContent>
        <CardActionArea>
          <IconButton onClick={this.handleSelectProperty.bind(this)}>
            <VisibilityIcon fontSize="small" />
          </IconButton>
        </CardActionArea>
      </Card>
    );
  }
}

export default withRouter(PropertyCard);
