import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const categories = [
  { id: 1, name: "Hair Gel", imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" },
  { id: 2, name: "Shoes", imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
  { id: 3, name: "Bags", imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
  { id: 4, name: "Holder", imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
  { id: 5, name: "Watch", imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" },
  { id: 6, name: "Futsal", imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" },
];

const Cate = () => {
  return (
    <>
      <h1 className='mt-5 font-extralight text-2xl sm:text-3xl inline-block ml-4 cursor-pointer hover:text-teal-600 underline translate-x-1 transition duration-300'>
        Categories
      </h1>

      {/* Responsive grid for categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-7">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="bg-white rounded-lg shadow-md p-4"
            initial={{ y: 100, opacity: 0 }} // Start from the bottom and invisible
            whileInView={{ y: 0, opacity: 1 }} // Animate to the original position and become visible when in view
            viewport={{ once: true }} // Animation triggers only once when the element is in view
            transition={{ type: 'spring', stiffness: 50, damping: 20, duration: 0.8 }} // Smooth scroll animation
          >
            <motion.img
              className="h-auto max-w-full rounded-lg hover:scale-90 ease-linear transition-transform duration-300"
              src={category.imageUrl}
              alt={category.name}
              initial={{ y: 100, opacity: 0 }} // Start from the bottom and invisible
              whileInView={{ y: 0, opacity: 1 }} // Animate to the original position and become visible when in view
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.8 }} // Smooth scroll animation for the image
            />
            <h1 className='flex items-center justify-center font-extralight text-xl sm:text-2xl mt-4 hover:underline cursor-pointer hover:text-teal-600 transition duration-300'>
              {category.name}
            </h1>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Cate;
