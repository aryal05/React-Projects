import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const About = () => {
  return (
    <>
      <div className="relative">
        <img className='m-7 p-7' src="/images/about.jpeg" alt="About" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-black text-3xl font-bold p-4 rounded-full hover:bg-blue-700 cursor-pointer duration-500">
            About Us 
            <span className='font-extralight hover:underline'>
              <Link to="/">/Home</Link> {/* Use Link for navigation */}
            </span>
          </h1>
        </div>
      </div>
      <hr />


    </>
  );
}

export default About;
