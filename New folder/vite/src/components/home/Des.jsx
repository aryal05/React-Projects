import React from 'react'

const Des = () => {
  const products = [
    {
      title: 'Top Rated',
      description: 'Our products are Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aliquam.',
      img:"/images/first.jpg"
    },
    {
      title: 'Popular',
      description: 'Products are popular Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aliquam.',
      img:"/images/second.jpg"
    },
    {
      title: 'Demanding',
      description: 'Displayed items are the most demanding ones Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aliquam.',
      img:"/images/third.jpg"
    }
  ]

  return (
    <div className='flex flex-col items-start px-4'>
      {/* Description Title */}
      <h1 className='mt-5 font-extralight text-2xl sm:text-3xl lg:text-4xl inline-block cursor-pointer hover:text-teal-600 underline translate-x-1 transition duration-300'>
        Description
      </h1>

      {/* Flex container for product boxes */}
      <div className='flex flex-wrap justify-start mt-10 w-full'>
        {products.map((product, index) => (
          <div
            key={index}
            className='w-full sm:w-[45%] lg:w-[30%] flex-grow m-2 p-5 border-white border-l-2 bg-neutral-100 transition-all'
          >
            <div>
              <h1 className='flex items-center justify-center text-gray-500 font-bold text-xl sm:text-2xl lg:text-3xl mb-4 underline decoration-slate-600 hover:underline cursor-pointer hover:text-teal-600 transition duration-300'>
                {product.title}
              </h1>
              <img 
                src={product.img} 
                className='w-full h-auto max-w-[300px] mx-auto rounded-full hover:scale-90 hover:shadow-xl hover:shadow-green-500 transition-transform duration-300 ease-in-out' 
                alt={product.title} 
              />
              <p className='text-base sm:text-lg lg:text-xl mt-4 text-emerald-900 text-center'>
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Des
