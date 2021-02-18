import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function RocketDetail(){
    let {rocketId} = useParams();

    const [rocketInfo, setRocketInfo] = useState([]);
    useEffect(() => {
      const fetchInfo = async () => {
        const response = await fetch(`https://api.spacexdata.com/v3/rockets/${rocketId}`)
        const data = await response.json();
        setRocketInfo(data);
        console.log(data);
      };
      fetchInfo();
    },
    [],
    );

    return(
        <div>
            <div className="w-full mx-16 my-4 text-2xl">
                <div className=""><img src="/left-arrow.svg"></img>Back</div>
            </div>
            <div className="container flex flex-col items-center justify-center justify-items-center h-screen">
                <img className="m-4 h-96 w-96 rounded-full " src={rocketInfo.flickr_images[0]}></img>
                <p className="m-4 text-7xl ">{rocketInfo.rocket_name}</p>
            </div>
        </div>
        
        
    )
}

export default RocketDetail