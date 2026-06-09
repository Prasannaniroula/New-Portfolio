import React from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { VscThreeBars } from "react-icons/vsc";
import { useTheme } from '../Context/ThemeContext';
import { themes } from '../Context/ThemeContext';
import { Link } from 'react-router-dom';

function NavBar() {
  const{isDark, toggleTheme} = useTheme();
  const t = isDark ? themes.dark: themes.light
  
  const navOptions = [
    {id:"home",label:"Home", link:'/'},
    {id:"aboutme",label:"About me",link:'/aboutme'},
    {id:"projects",label:"Projects & Skills", link:'/projects'},
    {id:"hobby",label:"Hobby", link:'/hobby'},
    {id:"contact",label:"Contact Me", link:'/contact'}
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [link,activeLink]= useState("home")
  return (
    <>
    <motion.div className={`flex sticky top-0 z-50 ${t.bg} ${t.text} border-b pt-10 sm:p-4 ${isDark? 'border-pink-200':'border-zinc-300'}  justify-between items-center`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{ 
    duration: 0.5,
    delay: 0.5,  
    ease: "easeInOut" 
  }}>
        <h1 className={`text-4xl font-bold `}><Link to='/'>Portfolio</Link></h1>
        <div className={`gap-2 ${t.text} hidden sm:flex sm:gap-10`}>
           {navOptions.map((option)=>(
            <Link key={option.id}
            to={option.link}
            onClick={()=>activeLink(option.id)}
            className={`cursor-pointer font transition ${
              link === option.id ? "font-bold" : isDark? "text-gray-400 hover:text-white":"text-gray-600 hover:text-black hover:font-bold"
            }`}
            > {option.label}</Link>
           ))}
         
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
        <button className={`sm:hidden text-2xl ${t.text}`}
        onClick={()=>setIsMenuOpen(true)}
        >
          <VscThreeBars/>
        </button>
    </motion.div>
    <AnimatePresence>

      {isMenuOpen &&(
        <>
        {/* semi-dark panel */}
        <motion.div 
        className='fixed inset-0 bg-black/50 z-40 sm:hidden'
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        onClick={()=>setIsMenuOpen(false)}
        />
          {/* sidebar-panel  */}
           <motion.div 
        className={`fixed top-0 left-0 h-full w-84 z-50 flex flex-col justify-between p-6 shadow-xl sm:hidden ${isDark? 'bg-black text-white':'bg-white text-black'}`}
        initial={{x:"-100%"}}
        animate={{x:0}}
        exit={{x:"-100%"}}
        transition={{type:"tween", duration:0.3}}
        >
          <div>
        <div className='flex justify-between items-center pb-8 border-b border-gray-200'>
          <h1 className='text-2xl font-bold pt-2 pl-2'>
            Portfolio
          </h1>
          <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-light pr-4 pt-2"
                >
                  ✕
                </button>
        </div>
        {/* nav options and its link  */}
        <div className='flex flex-col gap-4'>
          {navOptions.map((option)=>(
            <Link
            to={option.link}
            key={option.id}
            onClick = {()=>{
              activeLink(option.id)
              setIsMenuOpen(false)
            }}
            className={`pl-4 text-lg cursor-pointer py-2 border-b transition 
              ${link == option.id ? "font-semibold" 
                : isDark ? 'border-zinc-800 text-gray-400 hover:text-white'
                :'border-gray-200 text-gray-500 hover:text-black'}`}
            >
              {option.label}
            </Link>

          ))}

        </div>
        </div>
        <div className='flex flex-col gap-3 bottom-0'>
        <button className={`w-full py-2 rounded-xl ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`} >
          Contact me
        </button>
        <button 
        onClick={toggleTheme}
        className={`flex items-center justify-center gap-2 w-full py-2 rounded-full border transition-all duration-300 ${isDark ? 'border-white text-white' : 'border-black text-black'}`}
        >
          <span>{isDark ? '☀️' : '🌙'}</span>
          <span className="text-sm">{isDark ? 'Light' : 'Dark'}</span>
        </button>
        

        </div>


        </motion.div>

       

      </>
      )}
    </AnimatePresence>
    </>
  )
}

export default NavBar