import { React, useState } from "react";
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaTimes,
  FaWhatsapp
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[gray] text-black-300 z-[10]">
      <h1 className=" lg:flex  border-black margin-left-[30px] font-bold text-xl text-blue ">
        Portfolio <br />
        Website
      </h1>

      <ul className="hidden md:flex">
        <li><a href='/'>Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      {/*Hamburger */}
      <div className="md:hidden  z-10 " onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[gray] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl"><a href="/">Home</a></li>
        <li className="py-6 text-4xl"><a href="/about">About</a></li>
      <li className="py-6 text-4xl"><a href="/portfolio">Portfolio</a></li>
      <li className="py-6 text-4xl"><a href="/skills">Skills</a></li>
      <li className="py-6 text-4xl"><a href="/contact">Contact</a></li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0  ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#0078d4]  ">
            <a
              className=" flex justify-between items-center w-full text-white-300"
              href="https://www.linkedin.com/in/ajnasnb"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[grey]  ">
            <a
              className=" flex justify-between items-center w-full text-white-300"
              href="https://www.github.com/AjnasNB"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#09d628]  ">
            <a
              className=" flex justify-between items-center w-full text-white-300"
              href="https://ajnasnb@gmail.com"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#b5ff3e]  ">
            <a
              className=" flex justify-between items-center w-full text-white-300"
              href="https://drive.google.com/file/d/1MmejM9upDDTREeHyNbFMPaz-EO0-COKo/view?usp=sharing"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#25d366]  ">
            <a
              className=" flex justify-between items-center w-full text-white-300"
              href="https://wa.me/+918590708633"
            >
              Whatsapp
              <FaWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
