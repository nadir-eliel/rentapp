import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import Commentaries from './components/Users';
import Buildings from './components/Buildings';
import Users from './components/Buildings';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vistaActual: null
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "App"
    });
  }

}

export default App;