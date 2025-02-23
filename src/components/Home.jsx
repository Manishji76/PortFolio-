// src/components/Home.jsx
import React from 'react';
import { MdFacebook } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import pic from "../../src/assets/pic.jpg";
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Tools from '../components/Tools';
import Contact from '../components/Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      {/* Home Section */}
      <div id="home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          {/* Left Side */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I am a</h1>
              <span className="text-red-700 font-bold">Penetration Tester</span>
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              A Penetration Tester is a cybersecurity professional 
              responsible for evaluating the security of systems, networks, 
              and applications by simulating real-world attacks. They identify vulnerabilities, 
              exploit weaknesses, and provide recommendations to enhance security defenses. 
              Their role is crucial in protecting sensitive data, preventing cyber threats, 
              and ensuring robust security measures are in place.
            </p>
            <br />
            {/* Social Media Icons */}
            <div className="space-x-2">
              <h1 className="font-bold">Available on</h1>
              <ul className="flex space-x-5">
                <li>
                  <MdFacebook className="text-2xl cursor-pointer" />
                </li>
                <li>
                  <FaSquareInstagram className="text-2xl cursor-pointer" />
                </li>
                <li>
                  <FaTelegram className="text-2xl cursor-pointer" />
                </li>
                <li>
                <a 
              href="https://www.linkedin.com/in/manish-ji/" // Replace with your LinkedIn profile URL
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <AiFillLinkedin className="text-3xl" />
            </a>
                </li>
                <li>
                  <IoLogoYoutube className="text-2xl cursor-pointer" />
                </li>
                <li>
                  <FaGithubSquare className="text-2xl cursor-pointer" />
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
            <img src={pic} alt="Profile" className="rounded-full h-64 w-64 md:h-80 md:w-80 shadow-lg" />
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <About />
      <Skills />
      <Projects />
      <Tools />
      <Contact />
      <Footer/>
    </>
  );
};

export default Home;