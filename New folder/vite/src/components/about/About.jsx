import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Items from './Items';
import { motion } from 'framer-motion'
const About = () => {
  return (
    <>
     <div className='bg-red-500 text-white h-24 flex items-center justify-center text-4xl font-bold'>
        <motion.h1
          className='font-bold text-5xl'
          initial={{ x: '-100vw' }}  // Start off-screen to the left
          animate={{ x: 0 }}  // Move to the final position
          transition={{ type: 'spring', stiffness: 50 }}  // Add spring animation
        >
          About Us
        </motion.h1>
      </div>

      {/* "Why Shop With Us" Header */}
      <div className="relative flex items-center justify-center mt-9">
        <motion.h1
          className='font-bold text-4xl'
          initial={{ x: '-100vw' }}  // Start off-screen to the left
          animate={{ x: 0 }}  // Move to the final position
          transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}  // Add delay for staggered animation
        >
          Why Shop With Us
        </motion.h1>
      </div>
      <div className='flex items-center justify-center space-x-4'>
      {/* First Feature: Free Delivery */}
      <motion.div
        className='border-2 border-bg-gray-800 mt-20 bg-cyan-950 rounded-md h-32 items-center w-80 justify-center text-white'
        initial={{ y: '-100vh' }}  // Start off-screen (above)
        animate={{ y: 0 }}  // Slide down to the final position
        transition={{ type: 'spring', stiffness: 50, delay: 0.1 }}  // Add spring animation and delay
      >
        <h1 className='font-bold text-center text-xl mt-9'>Free Delivery</h1>
        <p className='text-center'>Here We provide free Delivery variations available</p>
      </motion.div>

      {/* Second Feature: Free Shipping */}
      <motion.div
        className='border-2 border-bg-gray-800 mt-20 bg-cyan-950 rounded-md h-32 items-center w-80 justify-center text-white'
        initial={{ y: '-100vh' }}  // Start off-screen (above)
        animate={{ y: 0 }}  // Slide down to the final position
        transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}  // Add a slight delay
      >
        <h1 className='font-bold text-center text-xl mt-9'>Free Shipping</h1>
        <p className='text-center'>Variations of passages of Lorem Ipsum available</p>
      </motion.div>

      {/* Third Feature: Best Quality */}
      <motion.div
        className='border-2 border-bg-gray-800 mt-20 bg-cyan-950 rounded-md h-32 items-center w-80 justify-center text-white'
        initial={{ y: '-100vh' }}  // Start off-screen (above)
        animate={{ y: 0 }}  // Slide down to the final position
        transition={{ type: 'spring', stiffness: 50, delay: 0.3 }}  // Add a slight delay
      >
        <h1 className='font-bold text-center text-xl mt-9'>Best Quality</h1>
        <p className='text-center'>Variations of passages of Lorem Ipsum available</p>
      </motion.div>
    </div>
      {/* <hr /> */}
<Items/>

    </>
  );
}

export default About;
