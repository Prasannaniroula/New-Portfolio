import React from 'react'
import NavBar from './Components/NavBar'
import Index from './Pages/Index'

function App() {
  return (
    <>
    <div className='flex flex-col'>
    <NavBar/>
    <div className='flex-1'>
    <Index/>
    </div>
   
    </div>
    </>
  )
}

export default App