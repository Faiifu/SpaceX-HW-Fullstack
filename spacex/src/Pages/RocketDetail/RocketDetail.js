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
            <div className="bg-black">
                <div className="mx-16">
                <Link to="/Rocket"><span className="flex flex-row cursor-pointer pt-20 text-white"><img src="/left-arrow.png" className="w-8 h-4 mx-3 mt-1"></img><span>back</span></span></Link>
                </div>
                <div className="container flex flex-col items-center justify-center justify-items-center h-screen">
                    <img className="mb-6 -m-16 h-3/4 w-2/3 " src={rocketInfo.flickr_images}></img>
                    <p className="text-5xl text-white">{rocketInfo.rocket_name}</p>
                </div>
                {rocketInfo.height &&
                <div className="flex flex-row justify-center">
                <div className="mx-28 text-xl pb-12">
                    <p className="text-2xl text-yellow-500">Height</p>
                    <p className="pt-2 text-white">{rocketInfo.height.meters} meters. {rocketInfo.height.feet} feet</p>
                </div>
                <div className="mx-28 text-xl pb-12">
                    <p className="text-2xl text-yellow-500">Diameter</p>
                    <p className="pt-2 text-white">{rocketInfo.diameter.meters} meters. {rocketInfo.diameter.feet} feet</p>
                </div>
                <div className="mx-28 text-xl pb-12">
                    <p className="text-2xl text-yellow-500">Mass</p>
                    <p className="pt-2 text-white">{rocketInfo.mass.kg} kg. {rocketInfo.mass.lb} lb.</p>
                </div>
            </div>
                }
            <div className="px-52">
                <hr/>
            </div>
            </div>
            <div className="bg-black px-40">
                <div className="text-white py-8 px-16 inline-block">
                    <h1 className="text-yellow-400 inline text-3xl">{rocketInfo.rocket_name}</h1>
                    <p className="inline">{rocketInfo.description}</p>   
                </div>
                <div className="grid grid-cols-12 text-white">
                    <div className="mx-28 pb-4 col-span-4">
                        <p className="text-2xl text-yellow-400">Cost per launch</p>
                        <p className="text-xl">{rocketInfo.cost_per_launch}</p>
                    </div>
                    <div className="mx-28 pb-4 col-span-4">
                        <p className="text-2xl text-yellow-400">Success rate pct</p>
                        <p className="text-xl">{rocketInfo.success_rate_pct}</p>
                    </div>
                    <div className="mx-28 pb-4 col-span-4">
                        <p className="text-2xl text-yellow-400">First flight</p>
                        <p className="text-xl">{rocketInfo.first_flight}</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 text-white">
                    <div className="mx-28 pb-4 col-span-4">
                        <p className="text-2xl text-yellow-400">Country</p>
                        <p className="text-xl">{rocketInfo.country}</p>
                    </div>
                    <div className="mx-28 pb-4 col-span-4">
                        <p className="text-2xl text-yellow-400">Active</p>
                        {rocketInfo.active?<p className="text-green-400 text-xl">True</p>:<p className="text-red-400 text-xl">False</p>}
                    </div>
                    <div className="mx-28 pb-4 col-span-4">
                        <p className="text-2xl text-yellow-400">Type</p>
                        {rocketInfo.engines &&
                            <p className="text-xl">{rocketInfo.engines.type}</p>
                        }
                    </div>
                </div>
                <div className="text-white">
                    <p className="px-16 pt-4 pb-16">Additional information : <a href={rocketInfo.wikipedia} className="underline hover:text-yellow-400" target="_blank">Wikipedia</a></p>
                </div>
            </div>
        </div>
        
        
    )
}

export default RocketDetail