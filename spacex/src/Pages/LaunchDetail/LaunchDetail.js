import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import YouTube from 'react-youtube';

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
  
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
    return(
        <div>
            <div className="mx-16 mt-4 text-2xl">
                <Link to="/Launch"><span className="flex flex-row  cursor-pointer w-16 "><img src="/left-arrow.svg" className="mx-4"></img><span>Back</span></span></Link>
                </div>
            <div className="flex flex-col items-center pt-6 pb-6">
                {flight.links &&
                <>
                    <YouTube videoId={flight.links.youtube_id} opts={opts}></YouTube>
                    <p className="text-4xl text-bold py-4">{flight.mission_name}</p>
                </>
                }
            </div>
            <div className="flex flex-col items-center py-12 bg-black text-white">
            {flight.links &&
                <>
                    <img src={flight.links.mission_patch} alt="" className="h-60 w-60"/>
                    <p className="pt-2 text-xl">Mission</p>
                    <p className="pt-2 text-4xl">{flight.mission_name}</p>
                    <div className="flex flex-row items-center pt-4">
                      <a className="mx-8 border border-yellow-400 px-8 py-2 hover:bg-white hover:text-black cursor-pointer" href={flight.links.article_link} target="_blank">Article</a>
                      <a className="mx-8 border border-yellow-400 px-8 py-2 hover:bg-white hover:text-black cursor-pointer" href={flight.links.wikipedia} target="_blank">Wikipedia</a>
                    </div>
                </>
                }
            </div>
        </div>
    )
}

export default LaunchDetail