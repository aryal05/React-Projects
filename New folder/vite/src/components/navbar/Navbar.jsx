import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='flex flex-col sm:flex-row items-center justify-between bg-white text-black p-4 sm:p-3'>

        {/* Logo */}
        <div className='text-black'>
          <h1>Logo Here</h1>
        </div>

        {/* Search Bar (always visible) */}
        <div className='flex items-center'>
          <input
            type="text"
            className='h-10 border-2 rounded-md border-teal-600 px-2 w-full max-w-xs'
            placeholder='Search Here'
          />
          <button className='bg-lime-600 border-2 border-teal-700 ml-3 w-20 text-white hover:bg-blue-600 transition-colors duration-300 rounded-md'>
            Search
          </button>
        </div>

        {/* Hamburger Menu Icon for Small Screens (right-aligned) */}
        <div className='sm:hidden flex flex-1 justify-end mt-4 sm:mt-0'>
          <button
            onClick={toggleMenu}
            className='text-gray-300 focus:outline-none'
          >
            {/* Hamburger Icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } sm:flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-9 text-black mt-4 sm:mt-0`}
        >
          <Link
            to="/"
            className="border-2 border-transparent hover:border-gray-400 hover:bg-slate-500 transition-colors duration-300 rounded-md px-2 py-1"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="border-2 border-transparent hover:border-gray-400 hover:bg-slate-500 transition-colors duration-300 rounded-md px-2 py-1"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="border-2 border-transparent hover:border-gray-400 hover:bg-slate-500 transition-colors duration-300 rounded-md px-2 py-1"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
