import React, { useState, useEffect } from "react";
import "./Home.css";
import { BrowserRouter, Link } from "react-router-dom";

function Home() {
  const [info, setInfo] = useState([]);
  const [rockets, setRockets] = useState([]);
  useEffect(() => {
    const fetchInfo = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/info");
      const data = await response.json();
      setInfo(data);
    };
    const fetchRockets = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/rockets");
      const data = await response.json();
      setRockets(data);
    };
    fetchInfo();
    fetchRockets();
  }, []);
  return (
    <>
      {rockets.length === 0 ? (
        <></>
      ) : (
        <>
          <div className="bg-home min-h-screen min-w-full">
            <div className="bg-image">
              {/* <img src={'/image-main.png'} className="img-main bg-cover min-w-full"></img> */}
              <video className="video-bg" autoplay="true" muted loop="true">
                <source src="foot.mp4" type="video/mp4" />
              </video>
              <div className="home-feature p-10">
                <div className="flex justify-center">
                  <h1 className="text-white text-5xl md:text-8xl">SPACE</h1>
                  <h1 className="x text-5xl md:text-8xl">X</h1>
                </div>
                <p className="text-white pt-5">
                  Elon Musk founder | 2002 founded | 7000 employees<br></br>3
                  vehicles | 3 launch sites | 1 test sites{" "}
                </p>
              </div>
            </div>

            <div className="section-2" style={{backgroundImage:"url('image-footer2.png')"}}>
              <div className="section-2-inner" style={{background:"#0009"}}>
                <h1 className="text-white pt-20 text-4xl text-center">
                  ROCKET
                </h1>
                <div className="home-sum pb-20">
                  <p className="text-white p-10">{info.summary}</p>
                  <Link to="/Rocket"><a href="#!" className="xbtn">
                    VIEW OUR ROCKETS
                  </a></Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
