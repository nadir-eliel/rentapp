import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Calendar from 'react-ultimate-calendar';
import { AutoRotatingCarousel, Slide  } from 'material-auto-rotating-carousel';
import Image from 'material-ui-image';
import '../assets/logo.png';

import { withRouter } from 'react-router-dom';

//const Slide = require('./Slide').default;
const { red, blue, green } = require('@material-ui/core/colors');
const Button = require('@material-ui/core/Button').default;

const avatar = [
  'https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg',
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#757ce8',
    
    color: theme.palette.text.secondary,
  },
  media: { height: 280 },
}));

function FilterProperty() {
  const classes = useStyles();

  const [state, setState] = useState({
    open: false
  });

  //calendar
  const start = new Date();
  const end = new Date();
  end.setDate(end.getDate() + 10);

  //const onChangeHandler = (weekNumber, startDate, end Date) => { ... }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}  >
            
             <div
                  style={{ position: 'relative', width: '100%', height: 200 }}
                    >
                  <Button onClick={() => setState({ open: true })}>
                    Open Image
                  </Button>
                  <AutoRotatingCarousel
                    label="Get started"
                    open={state.open}
                    onClose={() => setState({ open: false })}
                    onStart={() => setState({ open: false })}
                    style={{ position: 'absolute' }}
                  >
                    <Slide
                      media={
                        <img src="https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg" />
                      }
                      mediaBackgroundStyle={{ backgroundColor: red[400] }}
                      style={{ backgroundColor: red[600] }}
                      title="This is a very cool feature"
                      subtitle="Just using this will blow your mind."
                    />
                    <Slide
                      media={
                        <img src="https://pbs.twimg.com/media/DsONJkrXgAAoivG.jpg" />
                      }
                      mediaBackgroundStyle={{ backgroundColor: blue[400] }}
                      style={{ backgroundColor: blue[600] }}
                      title="Ever wanted to be popular?"
                      subtitle="Well just mix two colors and your are good to go!"
                    />
                    <Slide
                      media={
                        <img src="https://www.travelreport.mx/wp-content/uploads/2018/12/tuneles-chinos-en-mexicali-cuarto.jpg" />
                      }
                      mediaBackgroundStyle={{ backgroundColor: green[400] }}
                      style={{ backgroundColor: green[600] }}
                      title="May the force be with you"
                      subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
                    />
                  </AutoRotatingCarousel>
                </div>
                         
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="h2">
                    {<h1>titulo</h1>}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h1"
                    color="textSecondary"
                    component="h1"
                  >
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
          />
          ;
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(FilterProperty);

//<CardMedia className={classes.media} image={avatar} />
