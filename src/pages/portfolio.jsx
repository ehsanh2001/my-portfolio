import React from "react";
import FlipCard from "../components/flipCard/flip_card";
import "../components/flipCard/flip_card.css";
import "../App.css";
import Project from "../components/project";

export default function Portfolio() {
  const projects = [
    {
      title: "CineConnect",
      description: "A web site to search for movies on streaming services",
      githubURL: "https://github.com/ehsanh2001/CineConnect",
      imageURL: "./project1.png",
    },
    {
      title: "Marketplace",
      description:
        "Resale app with built-in location search for finding nearby treasures.",
      githubURL: "https://github.com/ehsanh2001/marketplace",
      imageURL: "./project2.png",
    },
    {
      title: "Weather Dashboard",
      description: "5 day weather forecast of the cities of your choice.",
      githubURL: "https://github.com/ehsanh2001/weather-dashboard",
      imageURL: "./project3.png",
    },
    {
      title: "CineConnect",
      description: "A web site to search for movies on streaming services",
      githubURL: "https://github.com/ehsanh2001/CineConnect",
      imageURL: "./project1.png",
    },
    {
      title: "Marketplace",
      description:
        "Resale app with built-in location search for finding nearby treasures.",
      githubURL: "https://github.com/ehsanh2001/marketplace",
      imageURL: "./project2.png",
    },
    {
      title: "Weather Dashboard",
      description: "5 day weather forecast of the cities of your choice.",
      githubURL: "https://github.com/ehsanh2001/weather-dashboard",
      imageURL: "./project3.png",
    },
  ];

  return (
    <>
      <div className="pages row ">
        <h1>Portfolio</h1>
        <br />
        <br />
        <div className="row m-1">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3  offset-lg-1">
              <Project key={`${index}-${project.title}`} project={project} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
