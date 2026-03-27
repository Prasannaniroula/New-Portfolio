import React from 'react'
import { useState } from 'react'
import { motion } from 'motion/react'
import { VscThreeBars } from "react-icons/vsc";

function NavBar() {
  const navOptions = [
    {id:"home",label:"Home"},
    {id:"aboutme",label:"About me"},
    {id:"skills",label:"Skills"},
    {id:"projects",label:"Projects"},
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [link,activeLink]= useState("Home")
  return (
    <>
    <motion.div className='flex bg-black justify-between items-center mt-2 mb-2' initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{ 
    duration: 0.5,
    delay: 0.5,  
    ease: "easeInOut" 
  }}>
        <h1 className='text-2xl font-bold text-white'>Portfolio</h1>
        <div className='text-white gap-2 hidden sm:flex sm:gap-10'>
           {navOptions.map((option)=>(
            <div key={option.id}
            onClick={()=>activeLink(option.id)}
            className={`cursor-pointer transition ${
              link === option.id ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-white"
            }`}
            > {option.label}</div>
           ))}
           <button className='bg-white rounded-2xl px-4 py-1 text-black'>Contact me</button>
        </div>
        <div className='text-white text-2xl lg:hidden md:hidden sm:hidden'>
        <VscThreeBars  />
        </div>
    </motion.div>
    </>
  )
}

export default NavBar