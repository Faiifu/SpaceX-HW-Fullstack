import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import RocketDetail from '../RocketDetail/RocketDetail';


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
      <div>
        <div className="py-8">
          <h1 className="underline text-5xl text-center pt-0">ROCKETS</h1>
          {rockets.map((rocket) => (
            <>
             { rocket.id %2 ==1
             ?
             <>
             <div>
              <div className="container mx-auto p-4 px-32">
                <div className="grid grid-cols-12 items-center justify-center justify-items-center">
                    <div className="bg-cover bg-center col-span-4 m-4">
                        <img src={rocket.flickr_images[0]} className="w-72 h-72 rounded-full"></img>
                    </div>
                    <div className="info col-span-8 m-4">
                        <h2 className="text-xl font-bold">{rocket.rocket_name}</h2>
                        <p>{rocket.description}</p>
                      <div className="flex flex-row justify-end">
                        <Link to={`${url}/RocketDetail/${rocket.rocket_id}`}><button className="border-2 p-2 hover:bg-gray-400">View details</button></Link>
                      </div>  
                    </div>
                  </div>
              </div>
             </div>
             </>
              :  
              <>
              <div className="bg-gray-900">
                <div className="container mx-auto p-4 px-32">
                  <div className="grid grid-cols-12 items-center justify-center justify-items-center">
                    <div className="info col-span-8 m-4 text-white">
                      <h2 className="text-xl font-bold">{rocket.rocket_name}</h2>
                      <p>{rocket.description}</p>
                    </div>
                    <div className="bg-cover bg-center col-span-4 m-4">
                      <img src={rocket.flickr_images[0]} className="w-72 h-72 rounded-full"></img>
                    </div>
                    <div className="flex flex-row text-white">
                      <Link to={`${url}/RocketDetail/${rocket.rocket_id}`}><button className="border-2 p-2 hover:bg-gray-400">View details</button></Link>
                    </div>  
                  </div>
                </div>
              </div>
              </>
              }
            </>
          
          ))}
        </div>
        
      </div>
    );
  }

  export default Rocket;