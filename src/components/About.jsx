import React from 'react';
import mk from "../../src/assets/mk.jpg"
const About = () => {
  return (
    <div id='about' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <h1 className='text-4xl font-bold text-center mb-8'>About Me</h1>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2'>
          <p className='text-justify text-lg'>
            I am a passionate Penetration Tester with expertise in identifying and mitigating security vulnerabilities. 
            With a strong background in cybersecurity, I have worked on numerous projects to ensure the safety and 
            integrity of digital systems. My goal is to help organizations protect their assets from potential threats.
          </p>
        </div>
        <div className='md:w-1/2 flex justify-center items-center mt-12 md:mt-0'>
            <img src={mk} alt="Profile" className='rounded-full h-64 w-64 md:h-80 md:w-80 shadow-lg' />
        </div>
      </div>
    </div>
  );
};

export default About;