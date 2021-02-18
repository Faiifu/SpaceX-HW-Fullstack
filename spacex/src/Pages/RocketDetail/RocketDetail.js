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
            <div className="mx-16 mt-4 text-2xl">
               <Link to="/Rocket"><span className="flex flex-row  cursor-pointer w-16 "><img src="/left-arrow.svg" className="mx-4"></img><span>Back</span></span></Link>
            </div>
            <div className="container flex flex-col items-center justify-center justify-items-center h-screen">
                <img className="m-4 h-96 w-96 rounded-full " src={rocketInfo.flickr_images}></img>
                <p className="m-4 text-7xl ">{rocketInfo.rocket_name}</p>
            </div>
        </div>
        
        
    )
}

export default RocketDetail