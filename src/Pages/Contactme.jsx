import React from 'react'
import { themes } from '../Context/ThemeContext'
import { useTheme } from '../Context/ThemeContext'
import { VscArrowLeft, VscMail } from 'react-icons/vsc'
import { Link } from 'react-router-dom'


function Contactme() {
    const {isDark, toogleTheme} = useTheme()
    const t = isDark ? themes.dark : themes.light
  return (
    <>
    <div className={`h-screen w-full ${t.bg} ${t.text}`}>
    <Link to="/" className={`inline-flex gap-2 p-8 items-center ${isDark? 'text-white':'text-black'}`}> <VscArrowLeft/> BACK TO HOME</Link>
    <h1 className={`font-bold text-3xl p-4 ${isDark ? 'text-white':'text-black'}`}>Contact Section</h1>
    <h1 className={`font-bold text-xl p-4 border-b border-t border-zinc-300 ${isDark ? 'text-white':'text-black'}`}><VscMail className='text-'/>E-mail</h1>


    </div>
    </>
  )
}

export default Contactme