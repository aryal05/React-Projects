import React from 'react'

const Navbar = () => {
  return (
    <>
       <div className='flex items-center justify-around bg-gray-50 space-x-6 p-3'>
        <div className='mr-3'>
            <h1>Logo Here</h1>
        </div>
   
      <div className='space-x-9'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>

      </div>
      <div className=''>
        <input type="text" name="" id="" />
            <button>Search</button>
        </div>
 
    </div>
    </>
  )
}

export default Navbar
