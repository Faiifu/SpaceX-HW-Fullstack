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
      <>
      {rockets.length === 0
      ?<></>
      :<>
      <div className="bg-home min-h-screen min-w-full">
        <div className=" text-center absolute flex flex-col items-center justify-center min-h-screen min-w-full">
        <div className="flex">
          <h1 className="text-white text-8xl">SPACE</h1>
          <h1 className="x text-8xl">X</h1>
        </div>
        <p className="text-white pt-5">Elon Musk founder | 2002 founded | 7000 employees<br></br>
3 vehicles | 3 launch sites | 1 test sites </p>
        </div>
        <div className="bg-image">
          <img src={'/image-main.png'} className="img-main bg-cover min-w-full min-h-screen"></img>
        </div>
        <div className="section-2">
          <div className="h-screen">
            <h1 className="text-white pt-5 text-2xl text-center">ROCKET</h1>
              <div className="grid grid-cols-12 gap-2 h-72">
                <div className="col-span-2"></div>
                  <div className="w-full bg-red-200 mt-5 col-span-2">
                    <img src={rockets[0].flickr_images[0]} className="w-full h-full hover:bg-gray-400"></img>
                  </div>
                <div className="w-full bg-red-200 mt-5 col-span-2">
                  <img src={rockets[1].flickr_images[2]} className="w-full h-full"></img>
                </div>
                <div className="w-full bg-red-200 mt-5 col-span-2">
                  <img src={rockets[2].flickr_images[1]} className="w-full h-full"></img>
                </div>
                <div className="w-full bg-red-200 mt-5 col-span-2">
                <img src={rockets[3].flickr_images[1]} className="w-full h-full"></img>
                </div>
              </div>
              <div className="">
                <Link to="/Rocket"><h1 className="more-detail-text text-center mt-5 mb-3">SEE MORE >></h1></Link>
              </div>
              <div className="px-52">
                <hr/>
              </div>
              <div className="section-3 h-80 w-full flex justify-center items-center">
                <div className="w-2/5 text-center">
                  <h1 className="x text-3xl">SpaceX</h1>
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
          
          <div className="bg-black w-full h-4/5">
            <img src={'/image-footer2.png'} className="image-footer w-5/12"></img>
          </div>
        </div>
        </>}
      </>
    );
  }

export default Home;