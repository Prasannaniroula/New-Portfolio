import React from 'react'
import NavBar from './Components/NavBar'
import Index from './Pages/Index'
import { useTheme } from './Context/ThemeContext';
import { themes } from './Context/ThemeContext';

function App() {
    const{isDark, toggleTheme} = useTheme();
  return (
    <>
    <div className={`flex flex-col px-4 sm:px-20 py-0 ${isDark ? 'bg-black':'bg-white'}`}>
    <NavBar/>
    <div className='flex-1'>
    <Index/>
    </div>
   
    </div>
    </>
  )
}

export default App