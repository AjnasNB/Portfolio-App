import React, { useEffect, } from 'react'
import '../App.css'
const About = () => {
  useEffect(() => {
        const starsContainer = document.querySelector('.stars');
        const numStars = 100;
        const starRadius = 1;
    
        for (let i = 0; i < numStars; i++) {
          const star = document.createElement('div');
          star.classList.add('star');
          star.style.width = `${starRadius}px`;
          star.style.height = `${starRadius}px`;
          star.style.top = `${Math.random() * 100}%`;
          star.style.left = `${Math.random() * 100}%`;
          starsContainer.appendChild(star);
        }
      }, []);
    
  return (
    <div className='stars'
    style={{ backgroundColor: "#0a192f" ,
    minHeight: "100vh",
    paddingTop: "50px",
    background: "#0a192f",
    overflow: "auto",
  }}
    >
    
    <div name="portfolio" className="w-full md:h-screen   text-gray-300">
        <div className="max-w-[1000px] mx-auto  p-4 flex flex-col justify-center ">
          <div className="pb-8 pt-9 ">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Ajnas N B, nice to meet you. Please take a look around.</p>
            </div>
            <div className='text-xl'>
              <p>I am a tech-savvy computer engineer with a passion for leadership, innovation, and hands-on
              learning through hackathons, workshops, and organizing events. A highly motivated and
              detail-oriented computer engineering student with a wealth of technical skills, including
              proficiency in MERN stack development and experience in Django framework.
              Committed to continuous learning and professional growth. demonstrated by
              participation and wins in hackathons. ideathons. and quizzes. A strong leader with
              experience as the Secretary of Association of Computer Engineering Students and
              Student Coordinator of Startup Activities at Cochin University of Science and
              Technology. Dedicated to making a positive impact through teamwork, ethics, and a
              determination to succeed. I've been webdevelopment and software intern in varous companies like GTECH-Mulearn, Xena Intelligence etc.</p>  
            </div>
            <div className='flex lg:justify-center '>
            <a href='/portfolio'><button className='text-black group border-2 px-6 py-3 my-2 flex items-center bg-white hover:bg-pink-900 hover:border-pink-800 hover:text-white'>
            View Works
            
          </button></a>
            </div>
          </div>
      </div>
    </div>
    
  )
}

export default About