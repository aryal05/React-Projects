import React from 'react'
import { NavBar, Hero, Footer } from './components'
import { hero } from './data/travigodata'
const App = () => {
  return (
<>
 <NavBar/>
 <Hero hero ={hero}/>
 <Footer/>
</>
  )
}

export default App
