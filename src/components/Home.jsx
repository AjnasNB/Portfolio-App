import React, { useEffect } from "react";
import img from "../assets/icons/ajnas2.jpg";
import "../App.css";
import {
  FaPython,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Home = () => {
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
    <div
      className="stars"
      style={{
        backgroundColor: "#0a192f",
        minHeight: "100vh",
        paddingTop: "50px",
        background: "#0a192f",
        overflow: "auto",
      }}
    >
      <div name="Home" className="w-full md:h-screen   text-gray-300">
        <div className="max-w-[1000px] mx-auto  p-4 flex flex-col items-center justify-center ">
          <div className="lg:pb-8 pt-9 flex flex-col  justify-center items-center   ">
            <div className="sm:mr-8 mb-8 sm:mb-0">
              <div class="bg-gray-900 rounded-full w-40 h-40 sm:w-64 sm:h-64 flex items-center justify-center">
                <img
                  src={img}
                  alt="Ajnas"
                  class="rounded-full w-35 h-35 sm:w-60 sm:h-60"
                />
              </div>
            </div>
            <div class="flex justify-center items-center">
              <div class="bg-white bg-opacity-50 rounded-lg p-8 max-w-md mx-auto mt-8 flex justify-center">
                <div class="flex justify-center items-center">
                  <div class="ml-8">
                    <p></p>
                    <span>Hi👋, My Name is </span>
                    <h1 class="lg:text-5xl text-4xl font-bold text-gray-950 whitespace-nowrap flex justify-center">
                      Ajnas N B
                    </h1>
                    <h2 class="lg:text-xl text-lg text-blue-950 flex justify-center font-bold whitespace-nowrap">
                      Engineer, Full Stack Developer
                    </h2>
                    <div class="mt-3">
                      <h3 class="text-lg font-bold text-blue-800 flex flex-col justify-normal whitespace-pre-line">
                        <p>🏢 Based in Kochi, Kerala</p>
                        <p class="flex">
                          <FaPython className="mr-2 text-yellow-400 text-3xl" />{" "}
                          Python developer with 2 years of experience
                        </p>
                      </h3>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-blue-800 flex flex-col justify-normal whitespace-pre-line">
                        <p>👨‍🎓 B.Tech in Computer Science and Engineering</p>
                        <p>🤵 Entrepreneur with a vision</p>
                      </h3>
                    </div>
                    <div class="flex justify-center items-center">
                      <a href="https://bit.ly/AjnasNB">
                        <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full mt-4 mr-5">
                          View Resume
                        </button>
                      </a>
                    </div>
                    <div class="flex justify-center items-center lg:hidden">
                      <a href="/portfolio">
                        <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full mt-4 mr-5">
                          View Portfolio
                        </button>
                      </a>
                    </div>
                    <div class="lg:hidden flex justify-center mt-5 text-4xl">
                      <a href="https://www.linkedin.com/in/ajnasnb">
                        <FaLinkedin class="hover:text-blue-600 focus:text-blue-500 mr-8" />
                      </a>
                      <a href="https://www.github.com/AjnasNB">
                        <FaGithub class="hover:text-gray-600 focus:text-gray-600 mr-8" />
                      </a>
                      <a href="https://www.instagram.com/_a.jnas">
                        <FaInstagram class="hover:text-red-400 focus:text-red-400 mr-8" />
                      </a>
                      <a href="https://wa.me/+918590708633">
                        <FaWhatsapp class="hover:text-green-600 focus:text-green-500" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
