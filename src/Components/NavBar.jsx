import React from 'react'
import { useState } from 'react'

function NavBar() {
  const navOptions = [
    {id:"home",label:"Home"},
    {id:"aboutme",label:"About me"},
    {id:"skills",label:"Skills"},
    {id:"projects",label:"Projects"},
  ]
  const [link,activeLink]= useState("Home")
  return (
    <>
    <div className='flex bg-black justify-between items-center mt-2 mb-2'>
        <h1 className='text-2xl font-bold text-white'>Portfolio</h1>
        <div className='text-white flex gap-18'>
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
    </div>
    </>
  )
}

export default NavBar