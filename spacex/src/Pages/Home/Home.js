import React, { useState, useEffect} from 'react';
import {
  BrowserRouter,
  Link
} from "react-router-dom";

function Home() {
    const [info, setInfo] = useState([]);
    useEffect(() => {
      const fetchInfo = async () => {
        const response = await fetch("https://api.spacexdata.com/v3/info")
        const data = await response.json();
        setInfo(data);
      };
      fetchInfo();
    },
    [],
    );
    return (
      <div>
        <h2>Home</h2>
        <ul>
          <h2>{info.name}</h2>
          <p>{info.summary}</p>
          <p>{info.cto}</p>
          {/* <p>{info.headquarters['city']}</p> */}
          {/* <p>{info.headquarters["address"]}</p> */}
          {/* <p>{info.links["address"]}</p> */}
          {/* <p>{info.links}</p> */}
          {/* <Link to = {info.links.website}>Websites</Link> */}
          {/* <p>{info.headquarters.city}</p> */}
          
        </ul>
      </div>
    );
  }

export default Home;