import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/category/Home'

function App() {
  return (
    <div className=' mt-20 flex  flex-col justify-center items-center overflow-hidden'>
      <Navbar  />
      <Home />
    </div>
  )
}

export default App