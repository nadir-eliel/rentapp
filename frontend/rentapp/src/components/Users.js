import React, { Component, useState } from 'react';
import '../styles/Users.css';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import isAuthenticated from '../lib/isAuthenticated';
import { Redirect, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AuthHelperMethods from '../services/AuthHelperMethods';

import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Grid,
} from '@material-ui/core';

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 400,
  },
});
class Users extends Component {
  Auth = new AuthHelperMethods();

  state = {
    loggedin: isAuthenticated(),
    user_name: '',
    password: '',
    successMessage: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */
    this.Auth.login(this.state.user_name, this.state.password)
      .then((res) => {
        if (res === false) {
          return alert("Sorry those credentials don't exist!");
        }
        this.props.history.replace('/');
      })
      .catch((err) => {
        alert(err);
      });
  };

  componentWillMount() {
    /* Here is a great place to redirect someone who is already logged in to the protected route */
    if (this.Auth.loggedIn()) this.props.history.replace('/');
  }

  render() {
    const { classes } = this.props;
    const { user_name, password, successMessage } = this.state;
    if (this.state.loggedin && this.state.loggedin !== '') {
      return (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      );
    } else {
      return (
        <div className={classes.root}>
          <form className={classes.paper}>
            {successMessage !== '' && (
              <div
                className="alert alert-warning alert-dismissible"
                role="alert"
              >
                {successMessage}
              </div>
            )}
            <Paper className={classes.paper}>
              <Grid container spacing={4} justify="center">
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  item
                  md={12}
                >
                  <FormControl>
                    <InputLabel htmlFor="input-with-icon-adornment">
                      Usuario:
                    </InputLabel>
                    <Input
                      id="input-with-icon-adornment"
                      name="user_name"
                      type="usuario"
                      arai-describedby="usuario-helper"
                      value={user_name}
                      onChange={this.onChange}
                      startAdornment={
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                    <FormHelperText id="usuario-helper">
                      Ingrese su nombre de Usuario
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  item
                  md={12}
                >
                  <FormControl>
                    <InputLabel htmlFor="pwd">Password</InputLabel>
                    <Input
                      name="password"
                      type="password"
                      arai-describedby="password-helper"
                      value={password}
                      onChange={this.onChange}
                    />
                    <FormHelperText id="password-helper">
                      Ingrese su Password
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  item
                  md={12}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleFormSubmit}
                  >
                    Iniciar Sesión
                  </Button>
                </Grid>
              </Grid>
              <div className="registerMessage">
                <span>¿No tengo una cuenta? </span>
                <Link to="/signin">Registrate</Link>;
              </div>
            </Paper>
          </form>
        </div>
      );
    }
  }
}

export default withStyles(useStyles, { withTheme: true })(Users);
