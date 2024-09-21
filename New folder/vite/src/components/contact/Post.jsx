import React from 'react'

const Post = () => {
  return (
    <div className='flex justify-around items-center border-2 bg-cyan-950 rounded-xl text-white'>
      <div className='item-center'>
      <h1 className='text-3xl font-bold mb-4 underline decoration-slate-600'>Reason Behind</h1>
        <p className='w-80'>Explore the items you need with us with more than 5 years of trust from the people and relaible  service.
           
Explore the items you need with us, backed by over 5 years of trust from our valued customers and reliable service. We offer a diverse range of high-quality products designed to meet your every need. With a commitment to excellence, we ensure fast delivery, exceptional customer support, and a seamless shopping experience that you can rely on, time and time again.
 Join our community of satisfied shoppers and discover why we are a trusted name in the industry. </p>

      </div>
      <div>
        <img src="images/bg.avif"  className="mb-9 justify-center mt-10 rounded-xl hover:scale-90 hover:shadow-xl hover:shadow-green-900 transition-transform duration-300 ease-in-out" alt="" />
      </div>
    </div>
  )
}

export default Post
