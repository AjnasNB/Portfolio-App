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

const skillData = [
  { icon: html, name: "HTML" },
  { icon: css, name: "CSS" },
  { icon: js, name: "JAVASCRIPT" },
  { icon: tailwind, name: "TAILWIND" },
  { icon: mongodb, name: "MONGO DB" },
  { icon: express, name: "EXPRESS JS" },
  { icon: react, name: "REACT" },
  { icon: node, name: "NODE JS" },
  { icon: git, name: "GIT" },
  { icon: firebase, name: "FIREBASE" },
  { icon: python, name: "PYTHON" },
  { icon: django, name: "DJANGO" },
  { icon: c, name: "C" },
  { icon: cpp, name: "C++" },
  { icon: java, name: "JAVA" },
  { icon: cs, name: "C#" },
  { icon: gml, name: "GML" },
  { icon: unity, name: "UNITY" },
  { icon: mysql, name: "MYSQL" },
  { icon: netlify, name: "NETLIFY" },
  { icon: aws, name: "AWS" },
  { icon: heroku, name: "HEROKU" }
];

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
      <div className="stars" style={{ minHeight: "100vh", paddingTop: "50px", background: "#0a192f", overflow: "auto" }}>
        <div name="portfolio" className="w-full md:h-screen text-gray-300">
          <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
            <div className="pb-8 pt-9">
              <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Skills</p>
              <p className="py-4">These are the technologies I've worked with</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
              {skillData.map((skill, index) => (
                <div key={index} className="shadow-md shadow-[#5d8dc9] hover:scale-110 duration-500">
                  <img className="w-20 mx-auto" src={skill.icon} alt={`${skill.name} icon`} />
                  <p className="my-4">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
