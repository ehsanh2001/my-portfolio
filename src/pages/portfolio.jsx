import React from "react";
import FlipCard from "../components/flipCard/flip_card";
import "../components/flipCard/flip_card.css";
import "../App.css";

export default function Portfolio() {
  return (
    <>
      <div className="pages container ">
        <h1>Portfolio</h1>
        <br />
        <br />
        <div className="row m-1">
          <div className="col-12 col-md-6 col-lg-3  offset-lg-2">
            <FlipCard>
              <div className="container">
                <img
                  height={"300"}
                  width={"100%"}
                  src="../../public/project1.png"
                  alt="Front Image"
                />
                <br />
                <br />
                <h2>CineConnect</h2>
              </div>
              <div>
                <h1>CineConnect</h1>
                <p className="profile">
                  A web site to search for movies on streaming services
                </p>
                <p className="profile">
                  <a
                    href="https://github.com/ehsanh2001/CineConnect"
                    target="_blank"
                  >
                    <img width={50} src="../../public/github.png" alt="" />
                  </a>
                </p>
              </div>
            </FlipCard>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <FlipCard>
              <div>
                <img
                  height={"300"}
                  width={"100%"}
                  src="../../public/project2.png"
                  alt="Front Image"
                />
                <br />
                <br />
                <h2>Marketplace</h2>
              </div>
              <div>
                <h1>Marketplace</h1>
                <p className="profile">
                  Resale app with built-in location search for finding nearby
                  treasures.
                </p>
                <p className="profile">
                  <a
                    href="https://github.com/ehsanh2001/marketplace"
                    target="_blank"
                  >
                    <img width={50} src="../../public/github.png" alt="" />
                  </a>
                </p>
              </div>
            </FlipCard>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <FlipCard>
              <div>
                <img
                  height={"300"}
                  width={"100%"}
                  src="../../public/project3.png"
                  alt="Front Image"
                />
                <br />
                <br />
                <h2>Weather Dashboard</h2>
              </div>
              <div>
                <h1>Weather Dashboard</h1>
                <p className="profile">
                  5 day weather forecast of the cities of your choice.
                </p>
                <p className="profile">
                  <a
                    href="https://github.com/ehsanh2001/weather-dashboard"
                    target="_blank"
                  >
                    <img width={50} src="../../public/github.png" alt="" />
                  </a>
                </p>
              </div>
            </FlipCard>
          </div>
        </div>
      </div>
    </>
  );
}
