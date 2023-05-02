import React, { useEffect } from "react";
import "../App.css";
const Contact = () => {
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
    <div className="stars">
      <div className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 ">
        <form
          action="https://getform.io/f/fff685ec-a824-4f7c-8cc8-fb8f909f2524"
          method="POST"
          className="flex flex-col max-w-[600px] w-full "
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 ">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              Submut the form below to contact with me or shoot me a mail using
              the link in the home
            </p>
          </div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="bg-[#ccd6f6] p-2"
            required
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="my-4 p-2 bg-[#ccd6f6] "
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="message"
            className="bg-[#ccd6f6] p-2"
            required
          />
          <input
            type="text"
            name="link"
            placeholder="Enter your resume link"
            className="bg-[#ccd6f6] p-2 my-4"
          />
          <button className="text-white border-2  hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center ">
            Let's connect
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
