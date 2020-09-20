import React, { Component, useState } from 'react';
import './AddUser.css';
import { Redirect, Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AuthHelperMethods from '../services/AuthHelperMethods';

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

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: ' ',
      name: ' ',
      surname: ' ',
      user_type: 1,
      phone: '',
      date_of_birth: Date,
      created_at: '',
      update_at: '',
      email: '',
      password: '',
      confirmPassword: '',
      successMessage: null,
    };
  }

  Auth = new AuthHelperMethods();

  handleChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  /*handleSubmitClick = (event) => {
    event.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      this.sendDetailsToServer();
    } else {
      this.props.showError('Passwords do not match');
    }
  };*/

  sendDetailsToServer = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const {
      user_name,
      name,
      surname,
      user_type,
      phone,
      date_of_birth,
      created_at,
      update_at,
      email,
      password,
    } = this.state;
    console.log();

    await fetch('http://localhost:4000/api/users/signIn', {
      method: 'POST',
      body: JSON.stringify({
        user_name,
        name,
        surname,
        user_type,
        phone,
        date_of_birth,
        created_at,
        update_at,
        email,
        password,
      }),
    })
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          console.log(this.Auth.setToken(response.data.token));

          // this.Auth.setToken(response.data.token);

          this.props.history.push('/');
          window.location.reload(false);
        } else {
          this.setState({
            message: 'Registration failed.',
          });
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  render() {
    const { classes } = this.props;
    const {
      user_name,
      name,
      surname,
      user_type,
      phone,
      date_of_birth,
      created_at,
      update_at,
      email,
      password,
    } = this.state;

    /* if (this.Auth.loggedIn().valueOf === true) {
      return (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      );
    } else {*/
    return (
      <div className={classes.root}>
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
                <InputLabel htmlFor="usuario">User Name:</InputLabel>
                <Input
                  name="user_name"
                  type="usuario"
                  value={user_name}
                  required
                  arai-describedby="usuario-helper"
                  onChange={this.handleChange}
                />
                <FormHelperText id="usuario-helper">
                  Ingrese un de nombre de Usuario.
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
                <InputLabel htmlFor="usuario">Name:</InputLabel>
                <Input
                  name="name"
                  type="text"
                  value={name}
                  required
                  arai-describedby="name-helper"
                  onChange={this.handleChange}
                />
                <FormHelperText id="name-helper">
                  Ingrese su nombre.
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
                <InputLabel htmlFor="usuario">Surname:</InputLabel>
                <Input
                  name="surname"
                  type="text"
                  value={surname}
                  required
                  arai-describedby="surname-helper"
                  onChange={this.handleChange}
                />
                <FormHelperText id="surname-helper">
                  Ingrese su Apellido.
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
                <InputLabel htmlFor="usuario">Email address:</InputLabel>
                <Input
                  name="email"
                  type="email"
                  value={email}
                  required
                  arai-describedby="email-helper"
                  onChange={this.handleChange}
                />
                <FormHelperText id="email-helper">
                  We'll never share your email with anyone else.
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
                <InputLabel htmlFor="usuario">Password:</InputLabel>
                <Input
                  name="password"
                  type="password"
                  value={password}
                  required
                  arai-describedby="password-helper"
                  onChange={this.handleChange}
                />
                <FormHelperText id="password-helper">
                  Ingrese un Password de 6 y 12 caracteres.
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
                <InputLabel htmlFor="usuario">Confirm Password:</InputLabel>
                <Input
                  name="confirmPassword"
                  type="password"
                  arai-describedby="confirmPassword-helper"
                  onChange={this.handleChange}
                />
                <FormHelperText id="confirmPassword-helper">
                  Password wil remain unchanged if left blank.
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
                <InputLabel htmlFor="usuario">Phone:</InputLabel>
                <Input
                  name="phone"
                  type="text"
                  value={phone}
                  required
                  arai-describedby="phone-helper"
                  onChange={this.handleChange}
                />
                <FormHelperText id="phone-helper">
                  Ingrese un telefono.
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
                <Input
                  name="date_of_birth"
                  type="Date"
                  value={date_of_birth}
                  required
                  arai-describedby="date_of_birth-helper"
                  onChange={this.handleChange}
                />
                <FormHelperText id="date_of_birth-helper">
                  Ingrese la fecha de alta.
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
                type="submit"
                variant="contained"
                color="primary"
                onClick={this.sendDetailsToServer}
              >
                Register:
              </Button>
            </Grid>
          </Grid>
          <div className="mt-2">
            <span>¿Ya tiene una cuenta? </span>
            <Link to="/login"> Login here</Link>;
          </div>
        </Paper>
      </div>
    );
  }
}
//}

export default withStyles(useStyles, { withTheme: true })(AddUser);
