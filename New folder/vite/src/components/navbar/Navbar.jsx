import React from 'react'

const Navbar = () => {
  return (
    <>
       <div className='flex items-center justify-around bg-gray-50 '>
        <div>
            <h1>Logo Here</h1>
        </div>
   
      <div className='space-x-3 px-3 p-3 mr-3'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>

      </div>
 
    </div>
    </>
  )
}

export default Navbar
