import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import Commentaries from './components/Users';
import Buildings from './components/Buildings';
import Users from './components/Buildings';
import Navbar from './components/Navbar';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  menuButton,
} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return <Navbar />;
  /*
  return (
    <Router>
      <div className="container">
        <h1>Todo bien</h1>
        <hr />
        <Switch>
          <Route path="/login">Pagina de logueo</Route>
          <Route path="/signin">Pagina de registro</Route>
          <Route path="/">Pagina de inicio</Route>
        </Switch>
      </div>
    </Router>
  )
  */
}

export default App;
