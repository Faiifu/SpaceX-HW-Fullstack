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
        <div className=" text-center absolute flex flex-col items-center justify-center min-h-screen min-w-full">
        <h1 className="text-white text-8xl">SPACEX</h1>
        <p className="text-white pt-5">Elon Musk founder | 2002 founded | 7000 employees<br></br>
3 vehicles | 3 launch sites | 1 test sites </p>
        </div>
        <div className="bg-image">
          <img src={'/image-main.png'} className="img-main bg-cover min-w-full"></img>
        </div>
        <div className="section-2">
          <div className="h-screen">
            <h1 className="text-white pt-5 text-2xl text-center">ROCKET</h1>
              <div className="grid grid-cols-12 gap-5 h-80">
                <div className="col-span-2"></div>
                {/* <img src={rockets[0].flickr_images[0]}> */}
                  <div className="w-full bg-red-200 mt-5 col-span-2">1</div>
                {/* </img> */}
                <div className="w-full bg-red-200 mt-5 col-span-2">2</div>
                <div className="w-full bg-red-200 mt-5 col-span-2">3</div>
                <div className="w-full bg-red-200 mt-5 col-span-2">4</div>
              </div>
              <div className="divide-y divide-gray-400">
                <h1 className="more-detail-text text-white text-center mt-5 mb-3">more detail>></h1>
                <div></div>
              </div>
              <div className="section-3 h-80 w-full flex justify-center items-center">
                <div className="w-2/5 text-center">
                  <h1 className="text-white text-3xl">SpaceX</h1>
                  <br></br>
                  <p className="text-white">{info.summary}</p>
                </div>
                <div className="w-80">
                  <img src={'/elonmusk.png'} className="img-elon w-4/5 mx-8"></img>
                  <p className="text-white text-center">Elon Musk</p>
                </div>
              </div>
            </div>   
          </div>
          <footer className="section-3">
            <div className="w-full h-3/4 mt-5">
              <div className="flex flex-row justify-center">
                <img src={'/flickr.png'} className="w-5 pt-5 mx-5"></img>
                <img src={'/twitter.png'} className="w-5 pt-5 mx-5"></img>
                <img src={'/instagram.png'} className="w-5 pt-5 mx-5"></img>
                <img src={'/website.png'} className="w-5 pt-5 mx-5"></img>
              </div>
                <h1 className="text-base tect-center flex justify-center mt-4 mb-4">Space Exploration Technologies Corp. is an American aerospace manufacturer and<br></br>
                space transportation services company headquartered in Hawthorne, California.</h1>
            </div>
          </footer>
        </div>
    );
  }

export default Home;