import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Calendar from "react-ultimate-calendar";

import { withRouter } from "react-router-dom";

import Cookies from 'universal-cookie';

const cookies = new Cookies();

const avatar = ['https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg'];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: { height: 280 },
}));

function FilterProperty() {
  const classes = useStyles();

//calendar
const start = new Date();
const end = new Date();
end.setDate(end.getDate() + 10);
 
//const onChangeHandler = (weekNumber, startDate, end Date) => { ... }

    return (

      <div className={classes.root}>
      <Grid container spacing={1}>
      <Grid item xs={12} sm={4}>
      <Paper className={classes.paper}>
      <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
         
      <CardActionArea >
        <CardMedia className={classes.media} image={avatar} />
       </CardActionArea>
        </Box>
      </Paper>
       </Grid>
      <Grid item xs={12} sm={4}>
      <Paper className={classes.paper}>
      <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
         
      <CardActionArea >
           <CardContent>
          <Typography gutterBottom variant="h3" component="h2">
           {<h1>titulo</h1>}
          </Typography>
          <Typography  gutterBottom variant="h1" color="textSecondary" component="h1">
          {<h2>descripcion de la casa</h2>}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Box>
      </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
      <Paper className={classes.paper}>
      <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
       mapa
        </Box>
      </Paper>
      </Grid>
      <Grid item xs={12} sm={8}>
      <Paper className={classes.paper}>
      <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
     comentarios
        </Box>
      </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        
      <Calendar
        locale="de-DE"
        // multi
       // onChange={onChangeHandler}
       showWeekNumbers
        weeksSelector
        value={[start, end]} // Specify default selected range of 10 days from today
           />;
      </Grid>
    
  
    </Grid>
      </div>


    );
  }

export default withRouter(FilterProperty);