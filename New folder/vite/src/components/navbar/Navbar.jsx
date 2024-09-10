import React from 'react'

const Navbar = () => {
  return (
    <>
       <div className='flex items-center justify-around bg-black space-x-6 p-3'>
        <div className='mr-3 text-gray-300'>
            <h1>Logo Here</h1>
        </div>
 
        <div className='space-x-9 text-gray-300'>
  <a 
    href="/" 
    className="border-2 border-transparent hover:border-gray-400  hover:bg-slate-500  transition-colors duration-300 rounded-md"
  >
    Home
  </a>
  <a 
    href="/about" 
    className="border-2 border-transparent hover:border-gray-400 hover:bg-slate-500 transition-colors duration-300 rounded-md"
  >
    About
  </a>
  <a 
    href="/contact" 
    className="border-2 border-transparent hover:border-gray-400  hover:bg-slate-500 transition-colors duration-300 rounded-md"
  >
    Contact
  </a>
</div>

      <div className=''>
        <input type="text" className='h-10 border-2 rounded-md border-teal-600' name="" id="" placeholder='Seach Here'/>
            <button className='bg-lime-600 border-2 border-teal-700 ml-3 rounded-md w-16 text-white'>Search</button>
        </div>
 
    </div>
    </>
  )
}

export default Navbar
