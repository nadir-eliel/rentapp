// imports the React Javascript Library
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

//Tabs
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
  cardHeader: {
    textalign: 'center',
    align: 'center',
    backgroundColor: 'white',
  },
  input: {
    display: 'none',
  },
  title: {
    color: blue[800],
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    align: 'center',
  },
  button: {
    color: blue[900],
    margin: 10,
  },
  secondaryButton: {
    color: 'gray',
    margin: 10,
  },
  typography: {
    margin: theme.spacing.unit * 2,
    backgroundColor: 'default',
  },

  searchRoot: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
  },
  searchIconButton: {
    padding: 10,
  },
  searchDivider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

class ImageUploadCard extends React.Component {
  state = {
    mainState: 'initial', // initial, search, gallery, uploaded
    imageUploaded: 0,
    selectedFile: null,
  };

  handleUploadClick = (event) => {
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({
        selectedFile: [reader.result],
      });
      this.props.uploadImage(reader.result);
    }.bind(this);

    this.setState({
      mainState: 'uploaded',
      selectedFile: event.target.files[0],
      imageUploaded: 1,
    });
  };

  renderInitialState() {
    const { classes, theme } = this.props;
    const { value } = this.state;

    return (
      <Grid container justify="center" alignItems="center">
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={this.handleUploadClick}
        />
        <label htmlFor="contained-button-file">
          <Fab component="span" className={classes.button}>
            <AddPhotoAlternateIcon />
          </Fab>
        </label>
      </Grid>
    );
  }

  renderUploadedState() {
    const { classes, theme } = this.props;
    return (
      <React.Fragment>
        <CardActionArea onClick={this.imageResetHandler}>
          <img
            width="100%"
            className={classes.media}
            src={this.state.selectedFile}
          />
        </CardActionArea>
      </React.Fragment>
    );
  }

  imageResetHandler = (event) => {
    console.log('Click!');
    this.setState({
      mainState: 'initial',
      selectedFile: null,
      imageUploaded: 0,
    });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <Card className={this.props.cardName}>
            {(this.state.mainState === 'initial' &&
              this.renderInitialState()) ||
              (this.state.mainState === 'uploaded' &&
                this.renderUploadedState())}
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageUploadCard);
