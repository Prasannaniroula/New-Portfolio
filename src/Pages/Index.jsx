import React from 'react'
import { easeInOut, motion } from 'motion/react'

function Index() {
  return (
    <>
        <div className='flex w-full h-full'>
          <div className='w-1/2 text-white flex justify-center items-center'>
          <div className='flex flex-col gap-14'>
            <div className='text-4xl font-bold'>
              Hi, I am
            </div>
            <div className='flex flex-col gap-4'>
              <div className='text-6xl font-bold'>
              Prasanna Niroula<motion.span animate={{opacity:[0,1,0]}} transition={{repeat:Infinity, duration:0.8, ease:"linear"}}>|</motion.span>
              </div>
              <div className='text-xl'>
              Full-stack developer/AI enthusiast
            </div>
            </div>
           
          </div>
          </div>
        <div className="w-1/2 bg-[#902124] text-white [clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)] flex items-center justify-center" >
            <motion.img src='front.png' className='h-[730px] object-contain' initial={{ y: "calc(100vw - 50%)" }} animate={{y:"calc(0%)"}} transition={{duration:1,delay:0.5, ease:easeInOut}}/>
        </div>
        </div>
    </>
  )
}

export default Index