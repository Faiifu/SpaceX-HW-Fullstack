import React, { useState, useEffect} from 'react';
import './Home.css';
import {
  BrowserRouter,
  Link
} from "react-router-dom";


function Home() {
    const [info, setInfo] = useState([]);
    const [rockets, setRockets] = useState([]);
    useEffect(() => {
      const fetchInfo = async () => {
        const response = await fetch("https://api.spacexdata.com/v3/info")
        const data = await response.json();
        setInfo(data);
      };
      const fetchRockets = async () => {
        const response = await fetch("https://api.spacexdata.com/v3/rockets")
        const data = await response.json();
        setRockets(data);
      };
      fetchInfo();
      fetchRockets();
    },
    [],
    );
    return (
      <div className="bg-home min-h-screen min-w-full">
        <h1 className="text-white text-8xl text-center absolute flex items-center justify-center min-h-screen min-w-full">SPACEX</h1>
        <div className="bg-image">
          <img src={'/image-main.png'} className="img-main bg-cover min-w-full"></img>
        </div>
        <div className="section-2">
          <div className="h-screen">
            <h1 className="text-white pt-5 text-2xl text-center">ROCKET</h1>
              <div className="grid grid-cols-12 gap-5 h-2/4">
                <div className="col-span-2"></div>
                {/* <img src={rockets[0].flickr_images[0]}> */}
                  <div className="w-full bg-red-200 mt-5 col-span-2">1</div>
                {/* </img> */}
                <div className="w-full bg-red-200 mt-5 col-span-2">2</div>
                <div className="w-full bg-red-200 mt-5 col-span-2">3</div>
                <div className="w-full bg-red-200 mt-5 col-span-2">4</div>
              </div>
              <div className="divide-y">
                <h1 className="more-detail-text text-white text-center mt-5">more detail>></h1>
                <div></div>
              </div>
              <div className="section-3 h-2/5 w-full flex justify-center items-center pt-1">
                <div className="w-2/5 text-center">
                  <h1 className="text-white text-3xl">SpaceX</h1>
                  <br></br>
                  <p className="text-white">{info.summary}</p>
                </div>
                <div className="w-1/5 bg-yellow-300" >
                  <img src={'/elonmusk.jpg'} className="img-elon w-full"></img>
                </div>
              </div>
            </div>   
          </div>
        </div>
    );
  }

export default Home;