import React, { useEffect, } from 'react'
import '../App.css'
const Thankyou = () => {
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
    <div className='stars'>
    <div className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
    <div className='text-4xl font-bold text-white flex flex-col justify-center items-center'>
    Thankyou for connecting with me<div className='flex justify-center '>🫂🫂🫂</div> 
    </div>
    
    </div>
    
    </div>
  )
}

export default Thankyou