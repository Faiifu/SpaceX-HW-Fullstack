import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Pages/Home/Home"
import Rocket from "./Pages/Rocket/Rocket"
import Launch from "./Pages/Launch/Launch"

import Nav from "./components/nav/Nav"

import './App.css';
  
export default function BasicExample() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <hr />
    
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Rocket">
            <Rocket />
          </Route>
          <Route path="/Launch">
            <Launch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}