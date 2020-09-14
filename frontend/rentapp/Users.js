import React, { useState } from 'react';
import '../components/Users.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import md5 from 'md5';

import {
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
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
}));
const baseUrl = 'http://localhost:3001/users';

function Users(props) {
  const [state, setState] = useState({
    user_name: '',
    password: '',
    successMessage: null,
  });

  const classes = useStyles();

  const handleChange = async (event) => {
    await setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const login = async (event) => {
    event.preventDefault();
    await axios
      .get(baseUrl, {
        params: { user_name: state.user_name, password: md5(state.password) },
      })
      .then((response) => {
        return response.data;
      })

      .then((response) => {
        // console.log(response);
        //if (response.status===200){
        if (response.length > 0) {
          setState((prevState) => ({
            ...prevState,
            successMessage: 'Login successful. Redirecting to home page..',
          }));
          redirectToHome();
          props.showError(null);
        } else if (response.code === 204) {
          props.showError('Username and password do not match');
        } else {
          props.showError('Username and password do not match');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const redirectToHome = () => {
    props.history.push('/');
    props.updateTitle('/');
  };

  const redirectToRegister = () => {
    props.history.push('/signin');
    props.updateTitle('Signin');
  };

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
              <InputLabel htmlFor="usuario">Usuario:</InputLabel>
              <Input
                name="user_name"
                type="usuario"
                arai-describedby="usuario-helper"
                onChange={handleChange}
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
                onChange={handleChange}
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
            <Button variant="contained" color="primary" onClick={login}>
              Iniciar Sesión
            </Button>
          </Grid>
        </Grid>
        <div className="registerMessage">
          <span>¿No tengo una cuenta? </span>
          <span className="loginText" onClick={redirectToRegister}>
            Registrese
          </span>
        </div>
      </Paper>
    </div>
  );
}
export default withRouter(Users);
