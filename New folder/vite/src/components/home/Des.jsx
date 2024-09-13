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
        <h1 className='mt-5 font-extralight text-3xl inline-block ml-4 cursor-pointer hover:text-teal-600 underline translate-x-1 transition duration-300'>
          Description
        </h1>

        {/* Flex container for product boxes */}
        <div className='flex flex-wrap mt-10'>
          {products.map((product, index) => (
            <div key={index} className='flex-1 min-w-[250px] m-5 border-zinc-600 border-2 p-5'>
              <div>
                <h1 className='font-semibold text-xl'>{product.title}</h1>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Des
