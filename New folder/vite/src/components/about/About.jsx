import React from 'react';

const About = () => {
  return (
    <>
      <div className="">
        <img className='m-7 p-7' src="/images/about.jpeg" alt="About" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold bg-black bg-opacity-50 p-4 rounded">
          About Us
          </h1>
        </div>
      </div>
    </>
  );
}

export default About;
