import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import YouTube from "react-youtube";

function LaunchDetail() {
  let { missionId } = useParams();

  const [flight, setFlight] = useState([]);
  useEffect(() => {
    const fetchFlight = async () => {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/${missionId}`
      );
      const data = await response.json();
      setFlight(data);
      console.log(data);
    };
    fetchFlight();
  }, []);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <div className="bg-gray-200">
      <div className=" mx-auto p-4 pb-5">
        <Link to="/Rocket">
          <span className="flex flex-row cursor-pointer pt-20">
            <img
              src="/left-arrow-black.png"
              className="w-4 h-2 mx-3 mt-2"
            ></img>
            <span>Back</span>
          </span>
        </Link>
      </div>
      <div className="flex flex-col items-center pt-6 pb-6">
        {flight.links && (
          <>
            <YouTube videoId={flight.links.youtube_id} opts={opts}></YouTube>
            <p className="text-2xl md:text-4xl text-bold text-center p-4">
              {flight.mission_name}
            </p>
          </>
        )}
      </div>
      <div className=" bg-black text-white ">
        <div className="container mx-auto p-4 py-20">
          <div class="grid grid-cols-12 gap-10f">
            {flight.links && (
              <>
                <div className="flex flex-col col-span-12 md:col-span-6 items-center ">
                  <img
                    src={flight.links.mission_patch}
                    alt=""
                    className="h-60 w-60"
                  />
                  <p className="pt-2 text-xl">Mission</p>
                  <p className="pt-2 text-4xl">{flight.mission_name}</p>
                  <div className="flex flex-row items-center pt-4">
                    <a
                      className="mx-8 py-2 underline cursor-pointer"
                      href={flight.links.article_link}
                    >
                      Article
                    </a>
                    <a
                      className="mx-8 py-2 underline cursor-pointer"
                      href={flight.links.wikipedia}
                    >
                      Wikipedia
                    </a>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 flex flex-col text-xl">
                  <p className="text-yellow-400">Rocket Name</p>
                  <p>{flight.rocket.rocket_name}</p>
                  <p className="text-yellow-400 mt-2">Launch Time (UTC)</p>
                  <p>{flight.launch_date_utc}</p>
                  <p className="text-yellow-400 mt-2">Rocket Type</p>
                  <p>{flight.rocket.rocket_type}</p>
                  <p className="text-yellow-400 mt-2">Launch Site</p>
                  <p>{flight.launch_site.site_name_long}</p>
                  <p className="text-yellow-400 mt-2">Launch Success</p>
                  {flight.launch_success ? (
                    <p className="text-green-400">Success</p>
                  ) : (
                    <p className="text-red-400">Fail</p>
                  )}
                  <Link
                    to={`/Rocket/RocketDetail/${flight.rocket.rocket_id}`}
                    className="flex flex-col mt-4"
                  >
                    <button className="xbtn mx-0 cursor-pointer">
                      Rocket Detail -{">"}
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaunchDetail;
