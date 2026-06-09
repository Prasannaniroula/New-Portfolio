import React from 'react'
import { useTheme } from './Context/ThemeContext';
import { Route,Routes } from 'react-router-dom';
import Projects from './Pages/Projects';
import NavBar from './Components/NavBar';
import Index from './Pages/Index';
import UnderConstruction from './Pages/UnderConstruction';
import Contactme from './Pages/Contactme';

function App() {
  const{isDark, toggleTheme} = useTheme();
  return(
    <div className={`flex flex-col px-4 sm:px-20 py-0 ${isDark ? 'bg-black':'bg-white'}`}>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/hobby" element={<UnderConstruction/>} />
      <Route path="/contact" element={<Contactme/>} />

    </Routes>
    </div>
  )
  
}

export default App