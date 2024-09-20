import React from 'react'
import { motion } from 'framer-motion'

const Shop = () => {
  return (
    <>
      <div>
        <div className='flex justify-between'>
          <motion.div
            className='items-center'
            initial={{ x: '-100vw' }}  // Start off-screen to the left
            animate={{ x: 0 }}  // Slide to its final position
            transition={{ type: 'spring', stiffness: 50 }}  // Add spring animation
          >
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-red-600 m-10 p-10'>
              Find your Products
            </h1>
            <p className="text-slate-500 w-[320px] text-xl ml-20">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione harum dolores consequuntur magni. Nesciunt ratione optio maxime!
            </p>
            <button className="bg-red-600 text-white ml-20 border-2 border-red-600 py-2 px-5 mt-6 lg:mt-8 text-lg rounded-md hover:bg-transparent hover:text-red-600 hover:border-red-600 transition-colors duration-300">
              Shop
            </button>
          </motion.div>

          <motion.div
            initial={{ y: '100vh' }}  // Start off-screen at the bottom
            animate={{ y: 0 }}  // Slide up to its final position
            transition={{ type: 'spring', stiffness: 50 }}  // Add spring animation
          >
            <img
              src="images/shoes.jpg"
              className="w-[800px] justify-center mt-10 rounded-full hover:scale-90 hover:shadow-xl hover:shadow-green-500 transition-transform duration-300 ease-in-out"
              alt="Shoes"
            />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-screen mt-32">
        <motion.div
          className="flex-1 bg-blue-500 flex items-center justify-center"
          initial={{ x: '-100vw' }}  // Start off-screen to the left
          animate={{ x: 0 }}  // Slide to its final position
          transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}  // Add spring animation with a slight delay
        >
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Explore with Us</h1>
            <p className="mt-2">Discover new Products.</p>
            <a
              href="https://spacema-dev.com/free-tailwind-css-templates/"
              className="mt-4 inline-block bg-white text-blue-500 py-2 hover:scale-90 px-4 rounded hover:bg-blue-700 hover:text-white transition-transform duration-300 ease-in-out"
            >
              Here You Go
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1715594564891-b4aecdd6e05e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
          initial={{ y: '100vh' }}  // Start off-screen at the bottom
          animate={{ y: 0 }}  // Slide up to its final position
          transition={{ type: 'spring', stiffness: 50, delay: 0.3 }}  // Add spring animation with a slight delay
        />
      </div>
    </>
  )
}

export default Shop
