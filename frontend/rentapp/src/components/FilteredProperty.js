import React from 'react';
import CommentaryList from './CommentaryList';
import AddCommentary from './AddCommentary';
import MapComponent from './MapComponent';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import AuthHelperMethods from '../services/AuthHelperMethods';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Rating from './SimpleRating';
import Typography from '@material-ui/core/Typography';

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(3),
  },
});

async function getPropertyAsync(idProperty) {
  let response = await fetch(
    'http://localhost:4000/api/apartments/' + idProperty,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
  let data = response.json();
  return data;
}

class FilteredProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idProperty: undefined,
      property: {
        other_details: undefined,
        comments: [],
        photos: [],
        address: [],
      },
    };
  }

  updateList() {
    console.log(this.state.idProperty);
  }

  async componentDidMount() {
    this.setState({
      idProperty: this.props.location.pathname.replace(
        '/filteredProperty/',
        ''
      ),
    });
    let dataProperty = await getPropertyAsync(
      this.props.location.pathname.replace('/filteredProperty/', '')
    );
    this.setState({ property: dataProperty }, function () {
      this.render();
    });
  }

  showRating() {
    return <Rating />;
  }

  showAddCommentary() {
    return (
      <div className="newcommentary-content">
        <AddCommentary
          idProperty={this.props.location.pathname.replace(
            '/filteredProperty/',
            ''
          )}
          callbackFromParent={this.updateList}
        />
      </div>
    );
  }

  render() {
    const { checkedA, checkedB, checkedF, checkedG } = this.state;
    const { classes } = this.props;
    const userHelper = new AuthHelperMethods();
    return (
      <div className="filtered-content">
        <div className="property-content">
          <Card>
            <CardMedia
              style={{ height: 300 }}
              image={this.state.property.photos[0]}
            />
          </Card>
          <Box fontWeight="fontWeightMedium" m={1}>
            <Typography component="h2" variant="h3" color="textPrimary">
              ${this.state.property.price}
            </Typography>
          </Box>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <Box fontWeight="fontWeightMedium" m={1}>
                    {this.state.property.other_details}
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.property.garage}
                          name="garage"
                        />
                      }
                      label="Garage"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                          checked={this.state.property.kids}
                          name="kids"
                        />
                      }
                      label="Niños"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.property.pets}
                          name="pets"
                        />
                      }
                      label="Mascotas"
                    />{' '}
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.property.backyard}
                          name="backyard"
                        />
                      }
                      label="Patio"
                    />{' '}
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.property.pool}
                          name="pool"
                        />
                      }
                      label="Piscina"
                    />
                    <TextField
                      disabled
                      multiline
                      rows={2}
                      id="standard-read-only-input"
                      label={
                        this.state.property.address.line +
                        this.state.property.address.city +
                        this.state.property.address.province
                      }
                      InputProps={{
                        readOnly: false,
                      }}
                    />
                    {'  '}
                  </FormGroup>
                </Paper>
              </Grid>
            </Grid>
            {userHelper.loggedIn() ? this.showRating() : ''}
          </div>
        </div>
        <div className="commentarylist-content">
          <CommentaryList
            comments={this.state.property.comments}
            changeProperty={this.setFilter}
          />
        </div>
        {userHelper.loggedIn() ? this.showAddCommentary() : ''}
        <div className="map-content">
          <MapComponent />
        </div>
        <div className="calendary-content"></div>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(FilteredProperty);
