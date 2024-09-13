import React from 'react'

const Des = () => {
  const products = [
    {
      title: 'Top Rated',
      description: 'Our products are Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aliquam.'
    },
    {
      title: 'Top Rated',
      description: 'Our products are Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aliquam.'
    },
    {
      title: 'Top Rated',
      description: 'Our products are Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aliquam.'
    }
  ]

  return (
    <>
      <div className='flex flex-col items-start'>
        {/* Description Title */}
        <h1 className='mt-5 font-extralight text-2xl sm:text-3xl inline-block ml-4 cursor-pointer hover:text-teal-600 underline translate-x-1 transition duration-300'>
          Description
        </h1>

        {/* Flex container for product boxes */}
        <div className='flex flex-wrap justify-start mt-10'>
          {products.map((product, index) => (
            <div
              key={index}
              className='w-full sm:w-[45%] lg:w-[30%] flex-grow m-2 p-5 border-gray-400 border-2 transition-all'
            >
              <div>
                <h1 className='font-semibold text-lg sm:text-xl'>{product.title}</h1>
                <p className='text-sm sm:text-base'>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Des
