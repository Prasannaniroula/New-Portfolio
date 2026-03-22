import React from 'react'

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
              Prasanna Niroula
              </div>
              <div className='text-xl'>
              Full-stack developer/AI enthusiast
            </div>
            </div>
           
          </div>
          </div>
        <div className="w-1/2 bg-[#902124] text-white [clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)] flex items-center justify-center" >
            <img src='front.png' className='h-[730px] object-contain"'/>
        </div>
        </div>
    </>
  )
}

export default Index