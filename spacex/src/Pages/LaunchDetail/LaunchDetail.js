import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


function LaunchDetail (){
    let {missionId} = useParams();

    const [flight, setFlight] = useState([]);
  useEffect(() => {
    const fetchFlight = async () => {
      const response = await fetch(`https://api.spacexdata.com/v3/launches/${missionId}`)
      const data = await response.json();
      setFlight(data);  
      console.log(data)
    };
    fetchFlight();
  },
  [],
  );
    return(
        <div>
            <p>{flight.mission_name}</p>
        </div>
    )
}

export default LaunchDetail