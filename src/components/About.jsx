import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi, my name is<span className="font-bold">{" Tushar Jain"}</span> and I am currently a{" "}
          <span className="font-bold">{"3rd Year Student"}</span>
          {" "} studying in{" "}<span className="font-bold">{"Pandit Deendayal Energy University"}</span> pursuing <span className="font-bold">{" Bachelors in Technology in Information and Technology."}</span> 
        </p>
        <br />
        <p className="text-xl">I have also completed my <span className="font-bold">{"Dipoma in Computer Engineering "}</span> from <span className="font-bold">{"The Maharaja Sayajirao University of Baroda"}</span>, Vadodara Gujarat. </p>

        <br />

        <p className="text-xl">
          I have a wide range of hobbies and passions that keep me busy. From reading, playing sports, traveling, to making YouTube videos, I am always seeking new experiences and love to keep myself engaged and learning new things.
        </p>
      </div>
    </div>
  );
};

export default About;
