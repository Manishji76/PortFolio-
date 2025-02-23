import React, { useState } from 'react';
import pic from "../../src/assets/pic.jpg"
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll'; // Import Link from react-scroll


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home", to: "home" },
    { id: 2, text: "About", to: "about" },
    { id: 3, text: "Skills", to: "skills" },
    { id: 4, text: "Project", to: "project" },
    { id: 5, text: "Tools", to: "tools" },
    { id: 6, text: "Contact", to: "contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          {/* Left side: Logo, Name, and Title */}
          <div className="flex space-x-2 items-center">
            <img src={pic} className="h-12 w-12 rounded-full" alt="Logo" />
            <div>
              <h1 className="font-semibold text-xl cursor-pointer">
                Manis<span className="text-green-500 text-2xl">h</span>
              </h1>
              <p className="text-sm">Penetration Tester</p>
            </div>
          </div>

          {/* Right side: Navigation Links */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text, to }) => (
                <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust offset if you have a fixed navbar
                    duration={500}
                    className="hover:text-green-500"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <AiOutlineMenu size={24} /> : <IoCloseSharp size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div>
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text, to }) => (
                <li key={id} className="hover:scale-105 duration-200 font-semibold cursor-pointer">
                  <Link
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust offset if you have a fixed navbar
                    duration={500}
                    onClick={() => setMenu(false)} // Close mobile menu after clicking
                    className="hover:text-green-500"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;