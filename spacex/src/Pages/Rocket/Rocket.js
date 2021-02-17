import React, { useState, useEffect} from 'react';

function Rocket() {
  const [rockets, setrockets] = useState([]);
    useEffect(() => {
      const fetchrockets = async () => {
        const response = await fetch("https://api.spacexdata.com/v3/rockets")
        const data = await response.json();
        setrockets(data);
      };
      fetchrockets();
    },
    [],
    );
    return (
      <div>
        <div>
          <h1 className="underline text-5xl text-center p-4">ROCKETS</h1>
          {rockets.map((rocket) => (
            <div className="container mx-auto p-4">
            <div className="grid grid-cols-12 items-center justify-center justify-items-center">
              <div className="bg-cover bg-center col-span-4 m-4">
                <img src={rocket.flickr_images[0]} className="w-full rounded-full"></img>
              </div>
              <div className="info col-span-8 m-4">
                <h2 className="text-xl font-bold">{rocket.rocket_name}</h2>
                <p>{rocket.description}</p>
                <div className="flex flex-row justify-end">
                <button className="border-2 p-2 hover:bg-gray-400">View details</button>
                </div>
                
              </div>
            </div>  
          </div>
          ))}
        </div>
      </div>
    );
  }

  export default Rocket;