import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import "./Nav.css"

function Nav() {
    return (
      <div>
        <div id="bg-home" className="text-white">
          <div className="grid grid-cols-12 items-center">
            <img className="md:col-span-3 col-span-3 ml-12 cursor-pointer w-2/5" src="/SpaceX_Logo.png"></img>
              <div className="md:col-span-9 col-span-9 flex justify-end pr-10">
                <NavLink exact to="/" activeStyle={{fontWeight: "bold", color: "#FFC300"}}>
                  <p className="p-4 hover:text-yellow-400">Home</p>
                </NavLink>
                <NavLink to="/Rocket" activeStyle={{fontWeight: "bold", color: "#FFC300"}}><p className="p-4 hover:text-yellow-400">Rockets</p></NavLink>
                <NavLink to="/Launch" activeStyle={{fontWeight: "bold", color: "#FFC300"}}><p className="p-4 hover:text-yellow-400">Launches</p></NavLink>
              </div>
          </div>
        </div>
      </div>

    );
  }

export default Nav;