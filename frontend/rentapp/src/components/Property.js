import React, { Component } from 'react';
import PropertyList from './PropertyList';
import PropertySearchBar from './PropertySearchBar';
import { withRouter } from "react-router-dom";

import { BrowserRouter as Router, 
  Switch,
  Route,
  useRouteMatch} from 'react-router-dom';

function Property()  {
    
  let { path, url } = useRouteMatch();

 return (
      <div>
      <Switch>
         <Route exact path={path}>
             <PropertySearchBar />
               <PropertyList />
        </Route>
      </Switch>
        
      </div>
    );
  }


export default withRouter(Property)