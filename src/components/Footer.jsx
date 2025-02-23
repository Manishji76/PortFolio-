import React from 'react';
import { MdFacebook } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-6'>
       {/* Social Media Accounts  */}
      <div className='max-w-2xl mx-auto mt-8 text-center'>
        <h2 className='text-2xl font-bold mb-4'>Follow Me on Social Media</h2>
        <div className='flex justify-center space-x-6'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-3xl text-blue-600 hover:text-blue-800'
          >
            <MdFacebook />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-3xl text-pink-600 hover:text-pink-800'
          >
            <FaSquareInstagram />
          </a>
          <a
            href='https://telegram.org'
            target='_blank'
            rel='noopener noreferrer'
            className='text-3xl text-blue-500 hover:text-blue-700'
          >
            <FaTelegram />
          </a>
          <a
            href='www.linkedin.com/in/manish-ji'
            target='_blank'
            rel='noopener noreferrer'
            className='text-3xl text-blue-800 hover:text-blue-900'
          >
            <AiFillLinkedin />
          </a>
          <a
            href='https://youtube.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-3xl text-red-600 hover:text-red-800'
          >
            <IoLogoYoutube />
          </a>
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-3xl text-gray-800 hover:text-gray-900'
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 text-center'>
        <p>&copy; 2025 Manish. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;