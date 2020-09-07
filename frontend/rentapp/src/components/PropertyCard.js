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

import { Link, withRouter } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    padding: 5,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
  },
  media: { height: 200 },
});

function PropertyCard({
  id,
  photo,
  bathroom_count,
  bedroom_count,
  price,
  other_property_details,
  commentary_count,
  valoration,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link to="/filterdproperty" >
      <CardActionArea>
        <CardMedia className={classes.media} image={photo} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h4">
            {other_property_details}
          </Typography>
        </CardContent>{' '}
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="Comentarios">
          <CommentIcon />
          {commentary_count}
        </IconButton>
        <IconButton aria-label="Valoracion">
          <GradeIcon />
          {valoration}
        </IconButton>
        <IconButton aria-label=" Comentarios">
          <HotelIcon />
          {bedroom_count}
        </IconButton>
        <IconButton aria-label=" Comentarios">
          <AttachMoneyIcon />
          {price}
        </IconButton>
      </CardActions>
      </Link>
    </Card>
  );
}


export default withRouter(PropertyCard);