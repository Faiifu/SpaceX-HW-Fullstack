import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

function Launch() {
  const [launches, setLaunches] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/launches?limit=10")
      const data = await response.json();
      setLaunches(data);  
      console.log(data)
    };
    fetchLaunches();
  },
  [],
  );
  let {path,url} = useRouteMatch()
    return (
      <div>
        <div className="flex flex-col items-center justify-center justify-items-center h-64 bg-black px-32">
          <h1 className="underline text-5xl text-white">Launches List</h1>
          <div className="pt-16 text-sm">
              <select className="mx-4" name="" id="" >
                <option value="">Some Launches</option>
              </select>
              <select className="mx-4" name="" id="" >
                <option value="">10-10-2020</option>
              </select>
              <select className="mx-4" name="" id="" >
                <option value="">true</option>
              </select>
          </div>
        </div>
        <div className="container grid grid-cols-12 bg-yellow-400 justify-center text-center px-32">
          <p className="col-span-3 mx-2 text-xl py-4 text-white font-bold">Name</p>
          <p className="col-span-3 mx-2 text-xl py-4 text-white font-bold">Launch Year</p>
          <p className="col-span-3 mx-2 text-xl py-4 text-white font-bold">Success</p>
          <p className="col-span-3 mx-2 text-xl py-4 text-white font-bold">Description</p>
        </div>
        {launches.map((mission)=>(
          <>
          {mission.flight_number %2 == 0
            ?
            <Link to={`${url}/LaunchDetail/${mission.flight_number}`}>
            <div className="container grid grid-cols-12 bg-yellow-50 justify-center text-center items-center px-32 cursor-pointer hover:bg-yellow-100">
              <p className="col-span-3 mx-2 text-s py-4">{mission.mission_name}</p>
              <p className="col-span-3 mx-2 text-s py-4">{mission.launch_year}</p>
              <p className="col-span-3 mx-2 text-s py-4">{mission.launch_success?<p className="text-green-600">Success</p>:<p className="text-red-600">Fail</p>}</p>
              <p className="col-span-3 mx-2 text-s py-4">{mission.details}</p>
            </div>
            </Link>
            :
            <Link to={`${url}/LaunchDetail/${mission.flight_number}`}>
            <div className="container grid grid-cols-12 bg-gray-200 justify-center text-center items-center px-32 cursor-pointer hover:bg-gray-300">
              <p className="col-span-3 mx-2 text-s py-4">{mission.mission_name}</p>
              <p className="col-span-3 mx-2 text-s py-4">{mission.launch_year}</p>
              <p className="col-span-3 mx-2 text-s py-4">{mission.launch_success?<p className="text-green-600">Success</p>:<p className="text-red-600">Fail</p>}</p>
              <p className="col-span-3 mx-2 text-s py-4">{mission.details}</p>
            </div>
            </Link>
            
          }
          </>
        ))}
        
      </div>
    );
  }

export default Launch;