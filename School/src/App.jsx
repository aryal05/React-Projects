import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button onClick={()=> setCount((count)=> count+1)}>count</button>
        <p>count is {count}</p>
      </div>
    </>
  )
}

export default App;
