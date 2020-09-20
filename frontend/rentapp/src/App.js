import React, { useState } from 'react';
import './App.css';
import Login from './components/Users';
import Navbar from './components/Navbar';
import PropertyScreen from './components/FilteredProperty';
import HomeScreen from './components/Property';
import Signin from './components/AddUser';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signin" component={Signin} />
          <Route path="/filteredProperty/" component={PropertyScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
