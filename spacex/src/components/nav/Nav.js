import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./Nav.css"

function Nav() {
    return (
      <div>
        <div id="bg-home" className="container mx-auto min-w-full text-white w-full">
          <div className="grid grid-cols-12 items-center">
            <img className="md:col-span-3 col-span-3 ml-12 cursor-pointer w-2/5" src="/SpaceX_Logo.png"></img>
            <div className="md:col-span-9 col-span-9 flex flex-row justify-end pr-16">
              <Link to="/"><button className="p-4 hover:border-2 hover:border-white hover:text-red-400 hover:border-rounded">HOME</button></Link>
              <Link to="/Rocket"><button className="p-4 hover:border-2 hover:border-white hover:text-red-400 hover:border-rounded">ROCKET</button></Link>
              <Link to="/Launch"><button className="p-4 hover:border-2 hover:border-white hover:text-red-400 hover:border-rounded">LAUNCHES</button></Link>
            </div>
          </div>
        </div>
      </div>

    );
  }

export default Nav;