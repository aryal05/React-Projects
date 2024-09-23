import React from 'react';
import { motion } from 'framer-motion'; 

const Home = () => {
  return (
    <>
      <div>
        {/* Background Image */}
        <div
          className="w-screen h-screen bg-no-repeat bg-cover bg-center relative"
          style={{ backgroundImage: 'url("/images/slider-bg.jpg")' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30" /> {/* Overlay for better text visibility */}
          
          <div className="flex h-full items-center justify-center px-4 md:px-8 lg:px-16 relative z-10">
            <motion.div
              className="text-center"
              // Animation: slide up from the bottom
              initial={{ y: '100vh' }} // Start from bottom (off-screen)
              animate={{ y: 0 }} // End at original position
              transition={{ type: 'spring', stiffness: 50, damping: 10, duration: 1.5 }} // Smooth transition
            >
              {/* Responsive Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                <span className='text-red-600'>Sale 20% Off</span>
                <br />
                <span className='text-cyan-950'>On Everything</span>
              </h1>

              {/* Responsive Paragraph */}
              <p className="text-base md:text-lg lg:text-xl mt-5 lg:mt-8 text-slate-300 mx-auto md:w-3/4 lg:w-1/2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione harum dolores consequuntur magni. Nesciunt ratione optio maxime!
              </p>

              {/* Shop Button */}
              <button className="bg-red-600 text-white border-2 border-red-600 py-2 px-5 mt-6 lg:mt-8 text-lg rounded-md hover:bg-transparent hover:text-red-600 hover:border-red-600 transition-colors duration-300">
                Shop
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
