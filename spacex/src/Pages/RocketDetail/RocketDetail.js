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
        <div className="bg-black">
            <div className="bg-black container mx-auto">
                <div className=" mx-auto p-4 pb-5">
                <Link to="/Rocket"><span className="flex flex-row cursor-pointer pt-20 text-white"><img src="/left-arrow.png" className="w-4 h-2 mx-3 mt-2"></img><span>Back</span></span></Link>
                </div>
                <div className=" mx-auto p-4 flex flex-col items-center justify-center justify-items-center">
                    <img className="mb-6 w-full rocketDetailImg" src={rocketInfo.flickr_images}></img>
                    <p className="text-5xl text-white">{rocketInfo.rocket_name}</p>
                </div>
                {rocketInfo.height &&
                <div className="grid  grid-cols-1 md:grid-cols-3 gap-3 p-5">
                <div className="text-xl pb-12">
                    <p className="text-2xl text-yellow-500">Height</p>
                    <p className="pt-2 text-white">{rocketInfo.height.meters} meters. {rocketInfo.height.feet} feet</p>
                </div>
                <div className="text-xl pb-12">
                    <p className="text-2xl text-yellow-500">Diameter</p>
                    <p className="pt-2 text-white">{rocketInfo.diameter.meters} meters. {rocketInfo.diameter.feet} feet</p>
                </div>
                <div className="text-xl pb-12">
                    <p className="text-2xl text-yellow-500">Mass</p>
                    <p className="pt-2 text-white">{rocketInfo.mass.kg} kg. {rocketInfo.mass.lb} lb.</p>
                </div>
            </div>
                }
            <div className="px-52">
                <hr/>
            </div>
            </div>
            <div className=" container mx-auto p-5 pt-20">
                <div className="text-white inline-block pb-10">
                    <h1 className="text-yellow-400 inline text-3xl">{rocketInfo.rocket_name}</h1>
                    <p className="inline">{rocketInfo.description}</p>   
                </div>
                <div className="grid  grid-cols-1 md:grid-cols-3 gap-3 text-white">
                    <div className="pb-4">
                        <p className="text-2xl text-yellow-400">Cost per launch</p>
                        <p className="text-xl">{rocketInfo.cost_per_launch}</p>
                    </div>
                    <div className="pb-4">
                        <p className="text-2xl text-yellow-400">Success rate pct</p>
                        <p className="text-xl">{rocketInfo.success_rate_pct}</p>
                    </div>
                    <div className="pb-4">
                        <p className="text-2xl text-yellow-400">First flight</p>
                        <p className="text-xl">{rocketInfo.first_flight}</p>
                    </div>
               
                    <div className="pb-4">
                        <p className="text-2xl text-yellow-400">Country</p>
                        <p className="text-xl">{rocketInfo.country}</p>
                    </div>
                    <div className="pb-4">
                        <p className="text-2xl text-yellow-400">Active</p>
                        {rocketInfo.active?<p className="text-green-400 text-xl">True</p>:<p className="text-red-400 text-xl">False</p>}
                    </div>
                    <div className="pb-4">
                        <p className="text-2xl text-yellow-400">Type</p>
                        {rocketInfo.engines &&
                            <p className="text-xl">{rocketInfo.engines.type}</p>
                        }
                    </div>
                </div>
                <div className="text-white pt-10 pb-10">
                    <p className="">Additional information : <a href={rocketInfo.wikipedia} className="underline hover:text-yellow-400" target="_blank">Wikipedia</a></p>
                </div>
            </div>
        </div>
        
        
    )
}

export default RocketDetail