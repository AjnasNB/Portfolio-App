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
    <div className="stars" style={{backgroundColor:'#0a192f'}}>
      <div
        name="home"
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center  text-white h-full"
      >
        <div className="flex flex-col justify-center mx-auto">
          <div class="bg-gray-600 rounded-full w-40 h-40 sm:w-64 sm:h-64 flex items-center justify-center mx-auto">
            <img
              src={img}
              alt="Ajnas"
              class="rounded-full w-30 h-30 sm:w-60 sm:h-60"
            />
          </div>
          <div class="flex justify-center items-center">
            <div class="bg-white bg-opacity-50 rounded-lg p-8 mg:max-w-md mx-auto mt-8 fle justify-center">
              <div class="flex justify-center items-center ">
                <div class="ml-8">
                  <p></p>
                  <span>Hi👋,My Name is </span>
                  <h1 className="lg:text-5xl text-4xl/[45px] font-bold text-gray-950 whitespace-nowrap flex justify-center">
                    Ajnas N B
                  </h1>
                  <h2 className="lg:text-xl text-lg/[30px]  text-blue-950 flex justify-center font-bold whitespace-nowrap ">
                    Engineer, Full stack Developer
                  </h2>
                  <div className="mt-3">
                    <h3 className="text-lg font-bold text-blue-800 flex flex-col justify-normal whitespace-pre-line">
                      <p>🏢 Based in Kochi,Kerala</p>
                      <p className="flex">
                        <FaPython className="mr-2 text-yellow-400 text-3xl" />{" "}
                        Python developer with 2 years of experience
                      </p>
                      <p>🤵 Entrepreneur with a vision</p>
                    </h3>
                  </div>
                  <div class="description-text"></div>
                  <div className="flex justify-center">
                    <a href="https://drive.google.com/file/d/1MmejM9upDDTREeHyNbFMPaz-EO0-COKo/view?usp=sharing">
                      <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                        View Resume
                      </button>
                    </a>
                  </div>
                  <div className="lg:hidden flex justify-center mt-5 text-4xl">
                    <a href="https://www.linkedin.com/in/ajnasnb">
                      <FaLinkedin className=" hover:text-blue-600 focus:text-blue-500 mr-8" />
                    </a>
                    <a href="https://www.github.com/AjnasNB">
                      <FaGithub className=" hover:text-gray-600 focus:text-gray-600 mr-8" />
                    </a>
                    <a href="https://www.instagram.com/_a.jnas">
                      <FaInstagram className=" hover:text-red-400 focus:text-red-400 mr-8" />
                    </a>
                    <a href="https://wa.me/+918590708633">
                      <FaWhatsapp className=" hover:text-green-600 focus:text-green-500 " />
                    </a>
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
