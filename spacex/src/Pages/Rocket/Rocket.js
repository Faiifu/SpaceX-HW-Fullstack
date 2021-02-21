import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import RocketDetail from '../RocketDetail/RocketDetail';
import './Rocket.css';

function Rocket() {
  
  const [rockets, setRockets] = useState([]);
    useEffect(() => {
      const fetchrockets = async () => {
        const response = await fetch("https://api.spacexdata.com/v3/rockets")
        const data = await response.json();
        setRockets(data);
        console.log(data)
      };
      fetchrockets();
    },
    [],
    );
    let {path,url} = useRouteMatch()
    return (
      <>
      {rockets.length === 0
      
      ?<></>
      :<>
      <div className="bg-black h-full">
        <h1 className=" text-white text-5xl text-center py-5 pt-40 myTitle">ROCKETS</h1>
        <div className="pic-row1">
          <div className="w-full flex justify-center">
            <div className="container mx-auto px-4 mt-9">
              <div className="grid  grid-cols-1 md:grid-cols-2 gap-3 h-full">
                <Link to={`${url}/RocketDetail/${rockets[0].rocket_id}`}>
                <div className="relative rocket-card falcon1 w-full flex justify-center items-center">
                  <div className="w-full h-full absolute">
                    <div className="p-4">
                      <h1 className="text-white">Rocket</h1>
                      <h1 className="text-4xl text-white md:mt-3">Falcon 1</h1>
                    </div>
                    <div className="p-4 absolute bottom-0 right-0">
                      <h1 className="text-white text-5xl">01</h1>
                    </div>
                  </div>
                  <img src={rockets[0].flickr_images[0]} className="w-full h-full"></img>
                </div>
                </Link>

                <Link to={`${url}/RocketDetail/${rockets[1].rocket_id}`}>
                <div className="relative rocket-card falcon9 w-full h-full flex justify-center items-center">
                  <div className="w-full h-full absolute">
                    <div className="p-4">
                      <h1 className="text-white">Rocket</h1>
                      <h1 className="text-4xl text-white md:mt-3">Falcon 9</h1>
                    </div>
                    <div className="p-4 absolute bottom-0 right-0">
                      <h1 className="text-white text-5xl">02</h1>
                    </div>
                  </div>
                  <img src={rockets[1].flickr_images[2]} className="w-full h-full"></img>
                </div>
                </Link>

                <Link to={`${url}/RocketDetail/${rockets[2].rocket_id}`}>
                <div className="relative rocket-card heavy w-full flex justify-center items-center">
                  <div className="w-full h-full absolute">
                    <div className="p-4">
                      <h1 className="text-white">Rocket</h1>
                      <h1 className="text-4xl text-white md:mt-3">Falcon Heavy</h1>
                    </div>
                    <div className="p-4 absolute bottom-0 right-0">
                      <h1 className="text-white text-5xl">03</h1>
                    </div>
                  </div>
                  <img src={rockets[2].flickr_images[1]} className="w-full h-full"></img>
                </div>
                </Link>

                <Link to={`${url}/RocketDetail/${rockets[3].rocket_id}`}>
                <div className="relative rocket-card starship w-full h-full flex justify-center items-center">
                  <div className="w-full h-full absolute">
                    <div className="p-4">
                      <h1 className="text-white">Rocket</h1>
                      <h1 className="text-4xl text-white md:mt-3">Starship</h1>
                    </div>
                    <div className="p-4 absolute bottom-0 right-0">
                      <h1 className="text-white text-5xl">04</h1>
                    </div>
                  </div>
                  <img src={rockets[3].flickr_images[1]} className="w-full h-full"></img>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2"></div>
      </div>
      </>}
      </>
    );
  }
export default Rocket;