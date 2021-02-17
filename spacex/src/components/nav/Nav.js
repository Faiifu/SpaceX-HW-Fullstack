import React from 'react';
import "./Nav.css"

function Nav() {
    return (
      <div className="container mx-auto p-3 bg-black text-white w-full">
          <div className="grid grid-cols-12 items-center">
            <img className="md:col-span-3 col-span-3 ml-4 cursor-pointer" src="/rocket.png"></img>
            <div className="md:col-span-9 col-span-9 flex flex-row-reverse pr-16">
              <button className="p-4 hover:border-2 hover:border-white hover:text-red-400 hover:border-rounded">HOME</button>
              <button className="p-4 hover:border-2 hover:border-white hover:text-red-400 hover:border-rounded">ROCKET</button>
              <button className="p-4 hover:border-2 hover:border-white hover:text-red-400 hover:border-rounded">LAUNCHES</button>
            </div>
        </div>
        
        
        
      </div>
    );
  }

export default Nav;