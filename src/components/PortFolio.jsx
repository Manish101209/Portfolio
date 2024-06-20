import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
// import mongoDB from "../../public/mongodb.jpg";
import service from "../../public/service.png";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: service,
      name: "IT Service Web App",
      description:
        "A React, Express, and Node.js-based website offering IT service solutions. Developed a user-friendly platform to address common IT problems, enhancing user experience and operational efficiency.",
    },
    {
      id: 2,
      logo: express,
      name: "MERN Stack Online Bookstore",
      description:
        "Built a dynamic & responsive online bookstore using MERN stack (MongoDB, Express.js, React.js, Node.js).",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      description: "A JavaScript library for building user interfaces.",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
      description:
        "A programming language that lets you work quickly and integrate systems more effectively.",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
      description:
        "A high-level, class-based, object-oriented programming language.",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
          {cardItem.map(({ id, logo, name, description }) => (
            <div
              className="relative group rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              key={id}
            >
              <img
                src={logo}
                className="w-full h-64 object-cover transition-opacity duration-300"
                alt={name}
                style={{ filter: id === 1 ? "blur(2px)" : "none" }}
              />
              {(id === 1 || id === 2) && (
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white font-bold text-xl mb-1">
                    {name}
                  </div>
                  <div className="flex justify-center space-x-3 mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                      Video
                    </button>
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                      onClick={() =>
                        (window.location.href =
                          id === 1
                            ? "https://manish101209.github.io/Service_Provide_projects/"
                            : "https://github.com/Manish101209/Bookstore-webApp.git")
                      }
                    >
                      Source Code
                    </button>
                  </div>
                </div>
              )}
              <div className="p-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
