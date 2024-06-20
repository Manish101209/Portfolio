import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import express from "../../public/express.png";
import javascript from "../../public/javascript.png";
import node from "../../public/node.png";
import mongodb from "../../public/mongodb.jpg";
import reactjs from "../../public/reactjs.png";

function Experiance() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: express, name: "Express" },
    { id: 4, logo: javascript, name: "JavaScript" },
    { id: 5, logo: node, name: "Node.js" },
    { id: 6, logo: mongodb, name: "MongoDB" },
    { id: 7, logo: reactjs, name: "React" },
  ];

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="mb-8">
          I've more than 1 year of experience in the following technologies:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-2 rounded-xl md:w-48 md:h-48 shadow-lg p-4 cursor-pointer hover:scale-110 transition-transform duration-300 hover:border-pink-500 hover:shadow-pink-500/50"
              key={id}
            >
              <img
                src={logo}
                className="w-24 h-24 rounded-full mb-3"
                alt={name}
              />
              <div className="font-bold text-lg text-center text-white glow">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
