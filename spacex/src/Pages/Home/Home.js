import React, { useState, useEffect} from 'react';
import './Home.css';
import {
  BrowserRouter,
  Link
} from "react-router-dom";


function Home() {
    const [info, setInfo] = useState([]);
    useEffect(() => {
      const fetchInfo = async () => {
        const response = await fetch("https://api.spacexdata.com/v3/info")
        const data = await response.json();
        setInfo(data);
      };
      fetchInfo();
    },
    [],
    );
    return (
      <div className="bg-home min-h-screen">
        <h1 className="text-white text-8xl text-center absolute flex items-center justify-center min-h-screen min-w-full">SPACEX</h1>
        <div className="bg-image">
          <img src={'/image-main.png'} className="img-main bg-cover min-w-full"></img>
        </div>
        <div className="section-2">
          <h1 className="text-white mt-10 text-2xl">ROCKET</h1>
          <div>
          <div className="grid grid-cols-5 gap-5 h-screen flex">
              <div className="w-full h-3/6 bg-red-200 mt-10">1</div>
              <div className="w-full h-3/6 bg-red-200 mt-10">2</div>
              <div className="w-full h-3/6 bg-red-200 mt-10">3</div>
              <div className="w-full h-3/6 bg-red-200 mt-10">3</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Home;