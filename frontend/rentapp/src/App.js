import React, {useState} from 'react';
import logo from './assets/logo.png';
import './App.css';
import Commentaries from './components/Users';
import Buildings from './components/Buildings';
import Users from './components/Users';
import Navbar from './components/Navbar';
import AlertComponent from './components/AlertComponent';


import AddUser from './components/AddUser'

import { BrowserRouter as Router, 
  Switch,
  Route,
  Link,
  Redirect,
  BrowserRouter} from 'react-router-dom';

function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  
return (
  <BrowserRouter>
    <div>
   
      <Navbar  title={title}/>
      <Redirect from="/" to="/" />
      <Switch>
        <Route path="/" exact={true} />
        <Route exact path="/users" >
                <Users  showError={updateErrorMessage}  updateTitle={updateTitle}/> 
          </Route>
        <Route exact path="/signin">
                    <AddUser showError={updateErrorMessage} updateTitle={updateTitle} />
          </Route> 
      </Switch>
      <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
     
    </div>
  </BrowserRouter>
);
}
  
export default App;
