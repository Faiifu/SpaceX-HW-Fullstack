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
import RocketDetail from "./Pages/RocketDetail/RocketDetail"
import LaunchDetail from './Pages/LaunchDetail/LaunchDetail'

import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"

import './App.css';

  
export default function BasicExample() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Rocket/RocketDetail/:rocketId">
            <RocketDetail />
          </Route>
          <Route path="/Rocket">
            <Rocket />
          </Route>
          <Route path="/Launch/LaunchDetail/:missionId">
            <LaunchDetail />
          </Route>
          <Route path="/Launch">
            <Launch />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}