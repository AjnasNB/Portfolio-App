import React, { useEffect } from "react";
import "../App.css";
import gym from "../assets/projects/gym.png";
import youtube from "../assets/projects/youtube.png";
import balance from "../assets/projects/game1.png";
import smasher from "../assets/projects/game2.png";
import three from "../assets/projects/3dportfolio.png";
import connect from "../assets/projects/connectgame.png";
import portfolio from "../assets/projects/portfolio.png";

const Portfolio = () => {
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

  const Project = ({ title, demoLink, codeLink, backgroundImage }) => (
    <div
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl font-bold text-white tracking-wider">{title}</span>
        <div className="pt-8 text-center">
          <a href={demoLink}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
          </a>
          <a href={codeLink}>
            <button className="text-center rounded-lg px-4 py-3 bg-white m-2 text-gray-700 font-bold text-lg">Code</button>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="stars" style={{ minHeight: "100vh", paddingTop: "50px", background: "#0a192f", overflow: "auto" }}>
      <div name="portfolio" className="w-full md:h-screen text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
          <div className="pb-8 pt-9">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Works</p>
            <p className="py-6">Checkout my recent works</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-col-3 gap-8">
            <Project title="Portfolio App" demoLink="https://ajnasnb.me" codeLink="https://github.com/AjnasNB/Portfolio-App" backgroundImage={portfolio} />
            <Project title="Fitness Gym App" demoLink="https://gym.ajnasnb.me" codeLink="https://github.com/AjnasNB/Fitness-World-Gym-App" backgroundImage={gym} />
            <Project title="Game Application" demoLink="https://gx.games/games/0fi62k/weight-balance-game/tracks/cefa2daa-c176-4748-8420-ebefc12d681e" codeLink="https://github.com/AjnasNB/Game-for-differently-abled" backgroundImage={balance} />
            <Project title="3-D Portfolio" demoLink="https://ajnasnb.netlify.app" codeLink="https://github.com/AjnasNB/3D-portfolio" backgroundImage={three} />
            <Project title="React JS Application" demoLink="https://youtube.ajnasnb.me" codeLink="https://github.com/AjnasNB/Youtube-clone" backgroundImage={youtube} />
            <Project title="Game Application" codeLink="https://github.com/AjnasNB/Game-Smasher" backgroundImage={smasher} />
            <Project title="Unity Game Application" codeLink="https://github.com/AjnasNB/Connect-game" backgroundImage={connect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
