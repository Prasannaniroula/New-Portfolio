import React from 'react'
import { useState } from 'react'
import { motion } from 'motion/react'
import { VscThreeBars } from "react-icons/vsc";
import { useTheme } from '../Context/ThemeContext';
import { themes } from '../Context/ThemeContext';

function NavBar() {
  const{isDark, toggleTheme} = useTheme();
  const t = isDark ? themes.dark: themes.light
  
  const navOptions = [
    {id:"home",label:"Home"},
    {id:"aboutme",label:"About me"},
    {id:"skills",label:"Skills"},
    {id:"projects",label:"Projects"},
    {id:"hobby",label:"Hobby"},
  ]
  const {isMenuOpen, setIsMenuOpen} = useState(false);
  const [link,activeLink]= useState("home")
  return (
    <>
    <motion.div className={`flex ${t.bg}   justify-between items-center mt-2 mb-2`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{ 
    duration: 0.5,
    delay: 0.5,  
    ease: "easeInOut" 
  }}>
        <h1 className={`text-2xl font-bold `}>Portfolio</h1>
        <div className={`gap-2 ${t.text} hidden sm:flex sm:gap-10`}>
           {navOptions.map((option)=>(
            <div key={option.id}
            onClick={()=>activeLink(option.id)}
            className={`cursor-pointer transition ${
              link === option.id ? "" : "text-gray-400 hover:text-white"
            }`}
            > {option.label}</div>
           ))}
           <button className={`px-2 rounded-xl ${isDark ? 'bg-white border-black text-black':'bg-black border-white text-white'}`}>Contact me</button>
           < button onClick={toggleTheme}
            className={`flex items-center gap-2 px-4 py-1 rounded-full border transition-all duration-300 
              ${isDark
              ? 'border-white text-white hover:bg-zinc-800' 
              : 'border-black text-black hover:bg-gray-100'}`}
           >
            <span>{isDark ? '🌙' : '☀️'}</span>
            <span className='text-sm'>{isDark ? 'Dark' : 'Light'}</span>
           </button>
        </div>
        <div className='text-white text-2xl lg:hidden md:hidden sm:hidden'>
        <VscThreeBars  />
        </div>
    </motion.div>
    </>
  )
}

export default NavBar