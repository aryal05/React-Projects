import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Items from './Items';

const About = () => {
  return (
    <><div className='bg-red-600 text-white h-24 flex items-center justify-center text-4xl font-bold'>
      <h1>About Us</h1>
    </div>
      <div className="relative">
        {/* <img className='m-7 p-7' src="/images/about.jpeg" alt="About" /> */}
        <h1>Why Shop With Us</h1>
     
      </div>
      {/* <hr /> */}
<Items/>

    </>
  );
}

export default About;
