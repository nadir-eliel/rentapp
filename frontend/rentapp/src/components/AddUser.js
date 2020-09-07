import React, { useState } from 'react';
import AddUserForm from './AddUserForm';
import './AddUser.css';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
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
import axios from 'axios';

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

function AddUser(props) {
  const [state, setState] = useState({
    user_ID: '',
    user_name: ' ',
    name: ' ',
    surname: ' ',
    user_type: '',
    phone: '',
    date_of_birth: Date,
    created_at: '',
    update_at: '',
    email: '',
    password: '',
    confirmPassword: '',
    successMessage: null,
  });

  const classes = useStyles();

  const handleChange = async (event) => {
    await setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    } else {
      props.showError('Passwords do not match');
    }
  };

  const sendDetailsToServer = async () => {
    if (
      state.user_name.length &&
      state.name.length &&
      state.surname.length &&
      state.email.length &&
      state.password.length &&
      state.phone.length &&
      state.date_of_birth.length
    ) {
      props.showError(null);
      const payload = {
        user_ID: 2,
        user_name: state.user_name,
        name: state.name,
        surname: state.surname,
        user_type: '',
        phone: state.phone,
        date_of_birth: state.date_of_birth,
        created_at: '',
        update_at: '',
        email: state.email,
        password: state.password,
      };

      await axios
        .post(baseUrl, payload)
        .then((response) => {
          if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,
              successMessage:
                'Registration successful. Redirecting to home page..',
            }));
            props.showError(null);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      props.showError('Please enter valid username and password');
    }
  };

  const redirectToLogin = () => {
    props.history.push('/users');
    props.updateTitle('Users');
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
            md={12}>
              <FormControl>
              <InputLabel htmlFor="usuario">User Name:</InputLabel>
              <Input
                name="user_name"
                type="usuario"
                arai-describedby="usuario-helper"
                onChange={handleChange}/>
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
            md={12}>
              <FormControl>
              <InputLabel htmlFor="usuario">Name:</InputLabel>
              <Input
                name="name"
                type="text"
                arai-describedby="name-helper"
                onChange={handleChange}/>
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
            md={12}>
              <FormControl>
              <InputLabel htmlFor="usuario">Surname:</InputLabel>
              <Input
                name="surname"
                type="text"
                arai-describedby="surname-helper"
                onChange={handleChange}/>
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
            md={12}>
              <FormControl>
              <InputLabel htmlFor="usuario">Email address:</InputLabel>
              <Input
                name="email"
                type="email"
                arai-describedby="email-helper"
                onChange={handleChange}/>
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
            md={12}>
              <FormControl>
              <InputLabel htmlFor="usuario">Password:</InputLabel>
              <Input
                name="password"
                type="password"
                arai-describedby="password-helper"
                onChange={handleChange}/>
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
            md={12}>
              <FormControl>
              <InputLabel htmlFor="usuario">Confirm Password:</InputLabel>
              <Input
                name="confirmPassword"
                type="password"
                arai-describedby="confirmPassword-helper"
                onChange={handleChange}/>
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
            md={12}>
              <FormControl>
              <InputLabel htmlFor="usuario">Phone:</InputLabel>
              <Input
                name="phone"
                type="text"
                arai-describedby="phone-helper"
                onChange={handleChange}/>
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
            md={12}>
              <FormControl>
                <Input
                name="date_of_birth"
                type="Date"
                arai-describedby="date_of_birth-helper"
                onChange={handleChange}/>
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
            <Button type="submit" variant="contained" color="primary" onClick={handleSubmitClick}>
            Register:
            </Button>
          </Grid>
        </Grid>
        <div className="mt-2">
    <span>¿Ya tiene una cuenta? </span>
    <span className="loginText" onClick={redirectToLogin}>
      Login here
    </span>
  </div>
      </Paper>
    </div>
   
  );
}

export default withRouter(AddUser);
