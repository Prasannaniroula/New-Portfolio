import React from 'react'
import { easeInOut, motion } from 'motion/react'

function Index() {
  return (
    <>
    //larger screen(desktop/laptop)
        <div className='w-full h- hidden sm:flex'>
          <div className='w-1/2 text-white hidden justify-center items-center sm:flex'>
          <div className='flex flex-col gap-14 mt-10'>
            <div className='text-4xl font-bold'>
              Hi, I am
            </div>
            <div className='flex-col gap-4 '>
              <div className='text-6xl font-bold'>
              Prasanna Niroula<motion.span animate={{opacity:[0,1,0]}} transition={{repeat:Infinity, duration:0.8, ease:"linear"}}>|</motion.span>
              </div>
              <div className='text-xl'>
              Full-stack developer/AI enthusiast
            </div>
            </div>
           
          </div>
          </div>
        <div className="w-1/2 bg-[#902124] flex justify-center sm:items-center text-white sm:[clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)]" >
            <motion.img src='front.png' className='h-[480px] sm:h-[700px] md:h-[700px] object-contain' initial={{ y: "calc(100vw -50%)" }} animate={{y:"calc(0%)"}} transition={{duration:1,delay:0.5, ease:easeInOut}}/>
        </div>
        </div>
    //smaller screen(mobile devices)
    <div className='w-full h-screen lg:hidden md:hidden sm:hidden relative'>
    <div className="w-full  bg-[#902124] flex justify-center text-white" >
            <motion.img src='front.png' className='h-[500px] object-contain ' initial={{ y: "calc(100vw -50%)" }} animate={{y:"calc(-36%)"}} transition={{duration:1,delay:0.5, ease:easeInOut}}/>
        </div>
        <div className='w-full absolute h-130 bottom-0 text-black [clip-path:polygon(100%_0,100%_0,100%_100%,-700%_100%)] bg-black flex justify-center items-center'>
        <div className='flex flex-col gap-04 text-white justify-center items-center'>
            <div className='text-4xl font-bold'>
              Hi, I am
            </div>
            <div className='flex flex-col gap-4 text-center'>
              <div className='text-6xl font-bold'>
              Prasanna Niroula<motion.span animate={{opacity:[0,1,0]}} transition={{repeat:Infinity, duration:0.8, ease:"linear"}}>|</motion.span>
              </div>
              <div className='text-xl text-center'>
              Full-stack developer/AI enthusiast
            </div>
            </div>
           
          </div>
        </div>
    </div>
    </>
  )
}

export default Index