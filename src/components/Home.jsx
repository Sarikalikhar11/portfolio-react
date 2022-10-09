import React from 'react';
import Profile from '../assets/profile.jpg';
import {HiOutlineArrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 max-width-1024">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-5xl sm:text-6xl font-bold text-gray-100">I'm a Front End Developer</h2>
                <p className="text-gray-400 py-4 max-w-md"> Self-motivated IT professional with deep knowledge and proficiency in JavaScript, HTML, CSS, and mobile responsive website development, as well as highly potent skills and ability in encoding virus-free and efficient code, seeks the position of Front-end Web Developer </p>
                <div>
                    <button className= "group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer">
                    Portfolio 
                        <span className="group-hover:rotate-90 duration-300">
                        <HiOutlineArrowRight size={20} className="ml-2"/>
                        </span>
                    </button>
                </div>
            </div>
            {/* <div>
                <img src={Profile} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
            </div> */}
        </div>
    </div>
  )
}

export default Home