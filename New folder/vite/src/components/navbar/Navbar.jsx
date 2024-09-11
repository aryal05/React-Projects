import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className='flex flex-col sm:flex-row items-center justify-around bg-black p-4 sm:p-3'>
        
        {/* Logo */}
        <div className='mr-3 text-gray-300 mb-4 sm:mb-0'>
          <h1>Logo Here</h1>
        </div>
        
        {/* Navigation Links */}
        <div className='space-y-3 sm:space-y-0 sm:space-x-9 text-gray-300 flex flex-col sm:flex-row'>
          <a 
            href="/" 
            className="border-2 border-transparent hover:border-gray-400 hover:bg-slate-500 transition-colors duration-300 rounded-md px-2 py-1"
          >
            Home
          </a>
          <a 
            href="/about" 
            className="border-2 border-transparent hover:border-gray-400 hover:bg-slate-500 transition-colors duration-300 rounded-md px-2 py-1"
          >
            About
          </a>
          <a 
            href="/contact" 
            className="border-2 border-transparent hover:border-gray-400 hover:bg-slate-500 transition-colors duration-300 rounded-md px-2 py-1"
          >
            Contact
          </a>
        </div>

        {/* Search Bar */}
        <div className='flex mt-4 sm:mt-0'>
          <input 
            type="text" 
            className='h-10 border-2 rounded-md border-teal-600 px-2 w-full sm:w-auto' 
            placeholder='Search Here' 
          />
          <button className='bg-lime-600 border-2 border-teal-700 ml-3 rounded-md w-20 text-white'>
            Search
          </button>
        </div>

      </div>
    </>
  );
}

export default Navbar;
