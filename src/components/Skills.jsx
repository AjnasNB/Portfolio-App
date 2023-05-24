import React, { useEffect } from "react";
import "../App.css";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import tailwind from "../assets/icons/tailwind.png";
import mongodb from "../assets/icons/mongodb.png";
import express from "../assets/icons/express.png";
import react from "../assets/icons/react.png";
import node from "../assets/icons/node.png";
import git from "../assets/icons/git.png";
import firebase from "../assets/icons/firebase.png";
import python from "../assets/icons/python.png";
import django from "../assets/icons/django.png";
import c from "../assets/icons/c.png";
import cpp from "../assets/icons/cpp.png";
import java from "../assets/icons/java.png";
import cs from "../assets/icons/csh.png";
import gml from "../assets/icons/gml.png";
import unity from "../assets/icons/unity.png";
import mysql from "../assets/icons/mysql.png";
import netlify from "../assets/icons/netlify.png";
import aws from "../assets/icons/aws.png";
import heroku from "../assets/icons/heroku.png";

const Skills = () => {
  useEffect(() => {
    const starsContainer = document.querySelector(".stars");
    const numStars = 100;
    const starRadius = 1;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.width = `${starRadius}px`;
      star.style.height = `${starRadius}px`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      starsContainer.appendChild(star);
    }
  }, []);

  return (
    <div>
      {/* Navbar */}

      {/* Content */}
      <div
        className="stars"
        style={{
          minHeight: "100vh",
          paddingTop: "50px",
          background: "#0a192f",
          overflow: "auto",
        }}
      >
        {/* Container */}
        <div name="portfolio" className="w-full md:h-screen   text-gray-300">
        <div className="max-w-[1000px] mx-auto  p-4 flex flex-col justify-center ">
          <div className="pb-8 pt-9 ">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            
              Skills
            </p>
            <p className="py-4">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={html} alt="HTML icon" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={css} alt="HTML icon" />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={js} alt="HTML icon" />
              <p className="my-4">JAVASCRIPT</p>
            </div>
            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={tailwind} alt="HTML icon" />
              <p className="my-4">TAILWIND</p>
            </div>
            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={mongodb} alt="HTML icon" />
              <p className="my-4">MONGO DB</p>
            </div>
            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={express} alt="HTML icon" />
              <p className="my-4">EXPRESS JS</p>
            </div>
            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={react} alt="HTML icon" />
              <p className="my-4">REACT</p>
            </div>
            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={node} alt="HTML icon" />
              <p className="my-4">NODE JS</p>
            </div>

            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={python} alt="HTML icon" />
              <p className="my-4">PYTHON</p>
            </div>
            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={django} alt="HTML icon" />
              <p className="my-4">DJANGO</p>
            </div>

            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={c} alt="HTML icon" />
              <p className="my-4">C</p>
            </div>
            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={cpp} alt="HTML icon" />
              <p className="my-4">C++</p>
            </div>

            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={java} alt="HTML icon" />
              <p className="my-4">JAVA</p>
            </div>

            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={cs} alt="HTML icon" />
              <p className="my-4">C#</p>
            </div>

            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={unity} alt="HTML icon" />
              <p className="my-4">UNITY</p>
            </div>

            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={gml} alt="HTML icon" />
              <p className="my-4">GML</p>
            </div>

            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={mysql} alt="HTML icon" />
              <p className="my-4">MYSQL</p>
            </div>

            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={firebase} alt="HTML icon" />
              <p className="my-4">FIREBASE</p>
            </div>

            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={git} alt="HTML icon" />
              <p className="my-4">GIT</p>
            </div>

            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={netlify} alt="HTML icon" />
              <p className="my-4">NETLIFY</p>
            </div>
            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={aws} alt="HTML icon" />
              <p className="my-4">AWS</p>
            </div>

            <div className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={heroku} alt="HTML icon" />
              <p className="my-4">HEROKU</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Skills;
