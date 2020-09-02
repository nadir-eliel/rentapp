import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import Commentaries from './components/Users';
import BuildingList from './components/BuildingList';
import Users from './components/BuildingCard';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  menuButton,
} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <BuildingList />
    </div>
  );
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
