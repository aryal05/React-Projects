import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Items from './Items';

const About = () => {
  return (
    <><div className='bg-red-500 text-white h-24 flex items-center justify-center text-4xl font-bold'>
      <h1 className='font-bold text-5xl'>About Us</h1>
    </div>
      <div className="relative flex items-center justify-center mt-9">
        {/* <img className='m-7 p-7' src="/images/about.jpeg" alt="About" /> */}
        <h1 className='font-bold text-4xl'>Why Shop With Us</h1>
      
     
      </div>
      <div className='flex items-center justify-center'>
          <div className=' border-2 border-bg-gray-800 mt-20 bg-cyan-950 rounded-md h-32 items-center w-80 justify-center text-white'>
            <h1 className='font-bold text-center text-xl mt-9' > Free Delivery</h1>
            <p className='text-center'>Here We provide free Delivery variations available</p>
          </div>
          <div className=' border-2 border-bg-gray-800 mt-20 bg-cyan-950 rounded-md h-32 items-center w-80 justify-center text-white'>
            <h1 className='font-bold text-center text-xl mt-9' > Free Shiping</h1>
            <p className='text-center'>variations of passages of Lorem Ipsum available</p>
          </div>
          <div className=' border-2 border-bg-gray-800 mt-20 bg-cyan-950 rounded-md h-32 items-center w-80 justify-center text-white'>
            <h1 className='font-bold text-center text-xl mt-9' > Best Quality</h1>
            <p className='text-center'>variations of passages of Lorem Ipsum available</p>

          </div>
        </div>
      {/* <hr /> */}
<Items/>

    </>
  );
}

export default About;
