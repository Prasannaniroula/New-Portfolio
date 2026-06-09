import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import { themes } from "../Context/ThemeContext";
import { useTheme } from "../Context/ThemeContext";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { VscArrowLeft } from "react-icons/vsc";

function Index() {
  const { isDark, toggleTheme } = useTheme();
  const t = isDark ? themes.dark : themes.light;
  const arr = ["Full-Stack Developer", "AI enthusiast"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % arr.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
    {/* //home page */}
    <div>
      {/* larger screen(desktop/laptop) */}
      <div
        className={`w-full h-screen hidden sm:flex ${t.navbar} ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        <motion.div
        initial = {{y: "calc(10vw -100%)"}}
         className="w-1/2 hidden justify-center items-center sm:flex">
          <div className="flex flex-col gap-10 mt-10">
            <div className="text-4xl font-bold">Hi, I am</div>
            <div className="flex-col gap-4 ">
              <h1 className="text-6xl font-bold">Prasanna Niroula</h1>
              <div className="text-xl">Full-stack developer/AI enthusiast</div>
              <div className="flex gap-8 mt-5">
                <a
                  href="https://www.linkedin.com/in/prasanna-niroula-74564219b"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin className="text-2xl cursor-pointer hover:text-blue-500 transition" />
                </a>
                <a
                  href="https://github.com/Prasannaniroula"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="text-2xl cursor-pointer hover:text-blue-500 transition" />
                </a>
                <a
                  href="https://www.facebook.com/prasanna.niraula.9"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook className="text-2xl cursor-pointer hover:text-blue-500 transition" />
                </a>
              </div>
              <button className={`text-xl border p-4 rounded-xl mt-8 inline-flex items-center gap-2 ${isDark? 'border-white hover:bg-red-800 hover:text-white':'border-black hover:bg-red-800 hover:text-white'}`}>Get in touch <BsArrowRight/>  </button>
            </div>
          </div>
        </motion.div>
        <div className="w-1/2 flex justify-center items-center">
          <div
            className={`w-[520px] h-[520px] flex justify-center items-center bg-red-800 text-white border-4 rounded-full overflow-hidden pt-10 m-10 ${
              isDark ? "border-pink-300" : "border-pink-300"
            }`}
          >
            <motion.img
              src="front.png"
              className="sm:object-contain"
              initial={{ y: "calc(10vw -100%)" }}
              animate={{ y: "calc(-10%)" }}
              transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
            />
          </div>
        </div>
      </div>

      {/* smaller screen(mobile devices) */}
      <div className="w-full min-h-screen flex sm:hidden relative pt-10">
        <div className="w-full  bg-[#902124] flex justify-center text-white rounded-4xl sticky mt-10 top-0">
          <motion.img
            src="front.png"
            className="h-[500px] object-contain"
            initial={{ y: "calc(100vw -50%)" }}
            animate={{ y: "calc(-36%)" }}
            transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
          />
        </div>
        <div
          className={`w-full absolute h-140 bottom-0 [clip-path:polygon(100%_0,100%_0,100%_100%,-1000%_100%)] pt-20 ${
            isDark ? "bg-black" : "bg-white"
          }`}
        >
          <div
            className={` flex flex-col gap-4 text-center ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            <div className="text-4xl font-bold">Hi, I am</div>
            <div>
              <div className="text-6xl font-bold">
                <h1>Prasanna Niroula</h1>
              </div>
              <div className="text-xl">Full-stack developer/AI enthusiast</div>
              <div className="flex gap-8 mt-3 justify-center">
                <a
                  href="https://www.linkedin.com/in/prasanna-niroula-74564219b"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin className="text-2xl cursor-pointer hover:text-blue-500 transition" />
                </a>
                <a
                  href="https://github.com/Prasannaniroula"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="text-2xl cursor-pointer hover:text-blue-500 transition" />
                </a>
                <a
                  href="https://www.facebook.com/prasanna.niraula.9"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook className="text-2xl cursor-pointer hover:text-blue-500 transition" />
                </a>
              </div>
              <button className="border rounded-2xl mt-4 bg-red-800 text-white text-xl p-3 font-semibold">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* //projects */}
    <div className={`${t.text} w-full h-full`}>
       <h1 className={`font-bold text-4xl p-4  text-center ${isDark ? 'text-white':'text-black'}`}>Projects Section</h1>

    <div className='flex flex-col gap-12 pt-20 pb-20'>
       <div className={`flex flex-col sm:flex-row items-center text-center gap-10 sm:pl-8 border-b ${isDark?'border-white':'border-zinc-300'}`}>
        
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
  );
}

export default Index;
