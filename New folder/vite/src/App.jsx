import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Cate from './components/home/Cate'
import Home from './components/home/Home'



const App = () => {
  return (
    <>
  <Navbar/>
     <Outlet/>

     <Cate/>
     
     
    
    </>
  )
}

export default App
