import React from 'react'
import { VscArrowLeft } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { useTheme } from '../Context/ThemeContext'
import { themes } from '../Context/ThemeContext'
import { BsArrowRight } from 'react-icons/bs'

function Projects() {
    const{isDark, toogleTheme} = useTheme();
      const t = isDark ? themes.dark: themes.light
  return (
    <>
    <div className={`${t.text} w-full h-full`}>
       <Link to="/" className={`inline-flex gap-2 p-8 items-center ${isDark? 'text-white':'text-black'}`}> <VscArrowLeft/> BACK TO HOME</Link>
       <h1 className={`font-bold text-3xl p-4 ${isDark ? 'text-white':'text-black'}`}>Projects Section</h1>

    <div className='flex flex-col gap-12 pb-20'>
       <div className={`flex flex-col sm:flex-row items-center text-center gap-10 sm:pl-8 border-b ${isDark ? 'border-zinc-300':'border-zinc-300'}`}>
        
        <div className={`w-full h-60 p-4 sm:w-full sm:h-86 flex items-center justify-center relative group `}>
            <Link to="https://hamro-aadhiyan.vercel.app/">
            <img className='w-full h-full object-cover transition-all duration-300 group-hover:blur-sm' src="./Preview_hamro.png" alt="Preview of the image"/>
            <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300'>
                <p className='text-2xl text-black'>Preview</p>
            </div>
            </Link>
        </div>
        <div className={`w-full h-54 text-justify`}>
            <h1 className={`text-center text-2xl font-semibold pb-2`}>Hamro Aadhiyan</h1>
            <div className='italic pb-2'>React, Node, Express, MongoDB</div>
            <p>A full-stack ed-tech web application developed with the MERN stack. Hamro Aadhiyan provides students with an interactive learning experience, featuring course management, user authentication, and a responsive interface built for all devices. </p>
            <Link to='https://hamro-aadhiyan.vercel.app/'><button className='border rounded-xl p-3 hover:bg-red-800 hover:text-white mt-4 border-white'><span className='inline-flex gap-2 items-center'>Live Link <BsArrowRight/></span> </button></Link>
        </div>
        </div> 
        <div className={`flex flex-col sm:flex-row items-center text-center gap-10 sm:pl-8`}>
        
        <div className={`w-full h-60 p-4 sm:w-full sm:h-86 flex items-center justify-center relative group`}>
            <img className='transition-all duration-300 group-hover:blur-sm' src="./Preview_SDR.png" alt="Preview of the image"/>
            <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0  group-hover:opacity-100 transition-all duration-300'>
                <p className='text-2xl text-black'>Preview</p>
            </div>
        </div>
        <div className={`w-full h-54 text-justify`}>
            <h1 className={`text-center text-2xl font-semibold pb-2`}>SDR(Sales Development Representative) Agent</h1>
            <div className='italic pb-2'>React, Node, Express, MongoDB, Groq AI(LLaMA 3.3 70B AI model), Brevo Webhook</div>
            <p>A full-stack MERN application that automates the entire email outreach pipeline. The system generates three personalized email variants using Groq AI, evaluates and selects the best one automatically, sends via Brevo SMTP, and tracks real-time engagement events including delivered, opened, clicked, and bounced through webhook integration. </p>
            <Link to='https://sdragent.vercel.app/'><button className='border rounded-xl p-3 hover:bg-red-800 hover:text-white mt-4 border-white'><span className='inline-flex gap-2 items-center'>Live Link <BsArrowRight/></span> </button></Link>
        </div>
        </div> 
    </div>
    
    </div>

    </>
  )
}

export default Projects