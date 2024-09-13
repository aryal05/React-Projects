import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Cate from './components/home/Cate'

import Des from './components/home/Des'



const App = () => {
  return (
    <>
  <Navbar/>
     <Outlet/>
     <Cate/>
     <Des/>
     
     
    
    </>
  )
}

export default App
