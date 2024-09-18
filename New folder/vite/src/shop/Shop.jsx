import React from 'react'

const Shop = () => {
  return (
<>
<div>
    <div className='flex justify-between'>
        <div className='items-center '>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-red-600 m-10 p-10 '>Find your Products  </h1>
        <p className="text-slate-500 w-[320px] text-xl ml-20">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione harum dolores consequuntur magni. Nesciunt ratione optio maxime!
              </p>
              <button className="bg-red-600 text-white  ml-20 border-2 border-red-600 py-2 px-5 mt-6 lg:mt-8 text-lg rounded-md hover:bg-transparent hover:text-red-600 hover:border-red-600 transition-colors duration-300">
                Shop
              </button>
        </div>
        <div>
        <img 
  src="images/shoes.jpg" 
  className="w-[800px] justify-center mt-10 rounded-full hover:scale-90 hover:shadow-xl hover:shadow-green-500 transition-transform duration-300 ease-in-out" 
  alt="Shoes" 
/>

        </div>
    </div>
</div>

</>
  )
}

export default Shop
