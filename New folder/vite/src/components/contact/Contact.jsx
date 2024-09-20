import React from 'react'
import { motion } from 'framer-motion'
import Form from './Form'

const Contact = () => {
  return (
    <>
      <div className='flex items-center justify-center bg-red-600 text-white h-24'>
        <motion.div 
          className='text-4xl font-bold'
          initial={{ x: '-100vw' }}  // Start from off-screen on the left
          animate={{ x: 0 }}  // Animate to the final position
          transition={{ type: 'spring', stiffness: 50 }}  // Add spring-like animation
        >
          <h1>Connect With US</h1>
        </motion.div>
      </div>

      <Form />
    </>
  )
}

export default Contact
