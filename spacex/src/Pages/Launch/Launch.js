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
  const [rocketName, setRocketName] = useState("");
  const [launchYear, setLaunchYear] = useState("");
  const [isSuccess, setIsSuccess] = useState("");
  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await fetch(`https://api.spacexdata.com/v3/launches?order=DESC&rocket_name=${rocketName}&launch_year=${launchYear}&launch_success=${isSuccess}`)
      const data = await response.json();
      setLaunches(data);  
    };
    fetchLaunches();
  },
  [rocketName,launchYear,isSuccess],
  );
  const handleRocketNameChange = (e) => {
    setRocketName(e.target.value)
  }
  const handleLaunchYearChange = (e) => {
    setLaunchYear(e.target.value)
  }
  const handleIsSuccessChange = (e) => {
    setIsSuccess(e.target.value)
  }
  const handleCounter = () => {
    setCount(count + 1)
  }
  let {path,url} = useRouteMatch()
    return (
      <div>
        <div className="flex flex-col items-center justify-center justify-items-center bg-black pb-20">
          <h1 className=" text-white text-5xl text-center py-5 pt-40 myTitle">Launches List</h1>
        </div>
        <div class="container mx-auto  py-5">
        <div className=" text-m grid  grid-cols-1 md:grid-cols-3 gap-3">
              <div className="text-center">
                <select className="mx-8 cursor-pointer px-4 py-2" onChange={handleRocketNameChange} name="" id="" >
                  <option value="">Select Rocket</option>
                  <option value="Falcon 1">Falcon 1</option>
                  <option value="Falcon 9">Falcon 9</option>
                  <option value="Falcon Heavy">Falcon Heavy</option>
                  <option value="Starship">Starship</option>
                </select>
              </div>
              <div className="border-solid text-center">
                <select className="mx-8 cursor-pointer px-4 py-2"  onChange={handleLaunchYearChange} name="" id="" >
                  <option value="">Select Year</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                </select>
              </div>
              <div className="border-solid text-center">
                <select className="mx-8 cursor-pointer px-4 py-2" onChange={handleIsSuccessChange} name="" id="" >
                  <option value="">Select Launch success</option>
                  <option value="true">Success</option>
                  <option value="false">Fail</option>
                </select>
              </div>
          </div>
        </div>
        <div className="bg-yellow-400 ">
        <div className=" mx-auto grid grid-cols-12 justify-center text-center">
          <p className="col-span-3 mx-2 text-xl py-4 text-white font-bold">Launch Year</p>
          <p className="col-span-3 mx-2 text-xl py-4 text-white font-bold">Name</p>
          <p className="col-span-3 mx-2 text-xl py-4 text-white font-bold">Description</p>
          <p className="col-span-3 mx-2 text-xl py-4 text-white font-bold">Success</p>
        </div>
        </div>
        <div className=" table-wrap">
        {launches.map((mission)=>(
          <>
          {mission.flight_number %2 == 0
            ?
            
            <Link to={`${url}/LaunchDetail/${mission.flight_number}`}>
            <div className=" grid grid-cols-12 justify-center text-center items-center cursor-pointer">
              <p className="col-span-3 mx-2 text-s py-4">{mission.launch_year}</p>
              <p className="col-span-3 mx-2 text-s py-4">{mission.mission_name}</p>
              <p className="col-span-3 mx-2 text-s py-4">{mission.details}</p>
              <p className="col-span-3 mx-2 text-s py-4">{mission.launch_success?<p className="text-green-600">Success</p>:<p className="text-red-600">Fail</p>}</p>
            </div>
            </Link>
            :
            <Link to={`${url}/LaunchDetail/${mission.flight_number}`}>
            <div className=" grid grid-cols-12 justify-center text-center items-center cursor-pointer">
              <p className="col-span-3 mx-2 text-s py-4">{mission.launch_year}</p>
              <p className="col-span-3 mx-2 text-s py-4">{mission.mission_name}</p>
              <p className="col-span-3 mx-2 text-s py-4">{mission.details}</p>
              <p className="col-span-3 mx-2 text-s py-4">{mission.launch_success?<p className="text-green-600">Success</p>:<p className="text-red-600">Fail</p>}</p>
            </div>
            </Link>
            
          }
          </>
        ))}
        </div>
      </div>
    );
  }

export default Launch;