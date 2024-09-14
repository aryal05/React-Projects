import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Cate from './components/home/Cate'

import Des from './components/home/Des'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <>
  <Navbar/>
  
     <Outlet/>
     <Cate/>
     <Des/>
     <Footer/>
     
    
    </>
  )
}

export default App
