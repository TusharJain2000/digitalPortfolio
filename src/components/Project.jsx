import React from "react";
import arrayDestruct from "../assets/portfolio/Homeokart-Home.jpg";
import navbar from "../assets/portfolio/Combat-Game.jpg";
import reactParallax from "../assets/portfolio/Video-Streaming-Platform.png";
import reactSmooth from "../assets/portfolio/microprocessor.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      gitLink: "https://github.com/TusharJain2000/HomeoKart",
      liveLink: "https://homeokart.onrender.com/",
    },
    {
      id: 2,
      src: reactParallax,
      gitLink: "https://github.com/TusharJain2000/Backend-using-JavaScript",
      liveLink: "https://github.com/TusharJain2000/Backend-using-JavaScript",
    },
    {
      id: 3,
      src: navbar,
      gitLink: "https://github.com/TusharJain2000/Combat-Game",
      liveLink: "https://tusharjain2000.github.io/Combat-Game/",
    },
    {
      id: 4,
      src: reactSmooth,
      gitLink: "https://github.com/TusharJain2000/8085-Microprocessor",
      liveLink: "https://github.com/TusharJain2000/8085-Microprocessor",
    },
  ];

  return (
    <div
      name="Project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, gitLink, liveLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <a href={liveLink} target=" ">Live Demo</a> 
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={gitLink} target=" ">Know More.. </a> 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
