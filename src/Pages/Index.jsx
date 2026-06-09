import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import { themes } from "../Context/ThemeContext";
import { useTheme } from "../Context/ThemeContext";
import { BsLinkedin, BsGithub, BsFacebook, BsArrowUpRight, BsArrowRight } from "react-icons/bs";
import { CgFacebook, CgMail } from 'react-icons/cg'
import { CiLinkedin } from 'react-icons/ci'
import { VscGithub } from 'react-icons/vsc'
import { Helmet } from "react-helmet-async";

const methods = [
  { label: "Email", icon: <CgMail size={28} />, display: "Prasannaniroula987@gmail.com", href: "mailto:Prasannaniroula987@gmail.com", color: "group-hover:text-red-400" },
  { label: "Facebook", icon: <CgFacebook size={28} />, display: "prasanna.niraula.9", href: "https://www.facebook.com/prasanna.niraula.9", color: "group-hover:text-blue-500" },
  { label: "LinkedIn", icon: <CiLinkedin size={28} />, display: "prasanna-niroula", href: "https://www.linkedin.com/in/prasanna-niroula-74564219b", color: "group-hover:text-blue-400" },
  { label: "GitHub", icon: <VscGithub size={28} />, display: "Prasannaniroula", href: "https://github.com/Prasannaniroula", color: "group-hover:text-purple-400" },
]

const projects = [
  {
    number: "01",
    title: "Hamro Aadhiyan",
    stack: ["React", "Node", "Express", "MongoDB"],
    description: "A full-stack ed-tech web application developed with the MERN stack. Provides students with an interactive learning experience, featuring course management, user authentication, and a responsive interface built for all devices.",
    image: "./Preview_hamro.png",
    link: "https://hamro-aadhiyan.vercel.app/",
  },
  {
    number: "02",
    title: "SDR Agent",
    stack: ["React", "Node", "Express", "MongoDB", "Groq AI", "Brevo"],
    description: "A full-stack MERN application that automates the entire email outreach pipeline. Generates three personalized email variants using Groq AI, evaluates and selects the best one automatically, sends via Brevo SMTP, and tracks real-time engagement events through webhook integration.",
    image: "./Preview_SDR.png",
    link: "https://sdragent.vercel.app/",
  },
]

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
    <Helmet>
  <title>Prasanna Niroula | Full Stack Developer</title>
  <meta
    name="description"
    content="Portfolio of Prasanna Niroula, Full Stack Developer specializing in React, Node.js and Machine Learning."
  />
</Helmet>
      {/* ── HERO ── */}
      <div>
        {/* Desktop */}
        <div className={`w-full h-screen hidden sm:flex ${t.navbar} ${isDark ? "text-white" : "text-black"}`}>
          <div className="w-1/2 hidden justify-center items-center sm:flex">
            <div className="flex flex-col gap-10 mt-10">
              <div className="text-4xl font-bold">Hi, I am</div>
              <div className="flex flex-col gap-4">
                <h1 className="text-6xl font-bold">Prasanna Niroula</h1>
                <div className="text-xl">Full-stack developer/AI enthusiast</div>
                <div className="flex gap-8 mt-2">
                  <a href="https://www.linkedin.com/in/prasanna-niroula-74564219b" target="_blank" rel="noreferrer">
                    <BsLinkedin className="text-2xl cursor-pointer hover:text-blue-500 transition" />
                  </a>
                  <a href="https://github.com/Prasannaniroula" target="_blank" rel="noreferrer">
                    <BsGithub className="text-2xl cursor-pointer hover:text-blue-500 transition" />
                  </a>
                  <a href="https://www.facebook.com/prasanna.niraula.9" target="_blank" rel="noreferrer">
                    <BsFacebook className="text-2xl cursor-pointer hover:text-blue-500 transition" />
                  </a>
                </div>
                <Link to='/contact'>
                  <button className={`text-xl border p-4 rounded-xl mt-4 inline-flex items-center gap-2 transition ${isDark ? 'border-white hover:bg-red-800 hover:text-white' : 'border-black hover:bg-red-800 hover:text-white'}`}>
                    Get in touch <BsArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className={`w-[520px] h-[520px] flex justify-center items-center bg-red-800 text-white border-4 rounded-full overflow-hidden pt-10 m-10 ${isDark ? "border-pink-300" : "border-pink-300"}`}>
              <motion.img
                src="front.png"
                className="sm:object-contain"
                initial={{ y: "calc(10vw - 100%)" }}
                animate={{ y: "calc(-10%)" }}
                transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
              />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="w-full min-h-screen flex sm:hidden relative pt-10">
          <div className="w-full bg-[#902124] flex justify-center text-white rounded-4xl sticky mt-10 top-0">
            <motion.img
              src="front.png"
              className="h-[500px] object-contain"
              initial={{ y: "calc(100vw - 50%)" }}
              animate={{ y: "calc(-36%)" }}
              transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
            />
          </div>
          <div className={`w-full absolute h-140 bottom-0 [clip-path:polygon(100%_0,100%_0,100%_100%,-1000%_100%)] pt-20 ${isDark ? "bg-black" : "bg-white"}`}>
            <div className={`flex flex-col gap-4 text-center ${isDark ? "text-white" : "text-black"}`}>
              <div className="text-4xl font-bold">Hi, I am</div>
              <div>
                <h1 className="text-6xl font-bold">Prasanna Niroula</h1>
                <div className="text-xl">Full-stack developer/AI enthusiast</div>
                <div className="flex gap-8 mt-3 justify-center">
                  <a href="https://www.linkedin.com/in/prasanna-niroula-74564219b" target="_blank" rel="noreferrer">
                    <BsLinkedin className="text-2xl cursor-pointer hover:text-blue-500 transition" />
                  </a>
                  <a href="https://github.com/Prasannaniroula" target="_blank" rel="noreferrer">
                    <BsGithub className="text-2xl cursor-pointer hover:text-blue-500 transition" />
                  </a>
                  <a href="https://www.facebook.com/prasanna.niraula.9" target="_blank" rel="noreferrer">
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

      {/* ── PROJECTS ── */}
      <div className={`w-full py-20 px-8 ${t.bg} ${t.text}`}>
        <div className="w-10 h-1 bg-red-700 rounded mb-4" />
        <h1 className="font-bold text-5xl mb-3">Projects</h1>
        <p className={`text-base max-w-xl leading-relaxed mb-12 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          A collection of things I've built — from full-stack web apps to AI-powered tools.
        </p>

        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <div
              key={p.number}
              className={`group flex flex-col sm:flex-row gap-8 p-6 rounded-2xl border transition-all duration-200 hover:border-red-700
                ${isDark ? 'border-zinc-800 bg-zinc-950' : 'border-gray-200 bg-gray-50'}`}
            >
              {/* Image */}
              <div className="sm:w-2/5 relative overflow-hidden rounded-xl">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-52 object-cover transition-all duration-300 group-hover:blur-sm group-hover:scale-105"
                />
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/30 rounded-xl"
                >
                  <span className="flex items-center gap-2 text-white font-semibold text-lg bg-red-700 px-4 py-2 rounded-xl">
                    Visit Site <BsArrowUpRight />
                  </span>
                </a>
              </div>

              {/* Content */}
              <div className="sm:w-3/5 flex flex-col justify-between gap-4">
                <div>
                  <span className={`text-sm font-mono ${isDark ? 'text-zinc-600' : 'text-gray-300'}`}>{p.number}</span>
                  <h2 className="text-2xl font-bold mt-1">{p.title}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className={`px-3 py-1 rounded-full text-xs border ${isDark ? 'border-zinc-700 text-gray-300' : 'border-gray-300 text-gray-600'}`}>
                      {s}
                    </span>
                  ))}
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{p.description}</p>
                <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-500 transition w-fit">
                  Live Link <BsArrowUpRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CONTACT ── */}
      <div className={`w-full py-20 px-8 ${t.bg} ${t.text}`}>
        <div className="w-10 h-1 bg-red-700 rounded mb-4" />
        <h1 className="font-bold text-5xl mb-3">Let's Connect</h1>
        <p className={`text-base max-w-xl leading-relaxed mb-12 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Got an idea worth building? I'm always open to new opportunities, collaborations, and interesting conversations.
        </p>

        <div className="flex flex-col">
          {methods.map((m, i) => (
            <a
              key={i}
              href={m.href}
              target="_blank"
              rel="noreferrer"
              className={`group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b gap-4 transition-all duration-200
                ${isDark ? 'border-zinc-800 hover:border-zinc-600' : 'border-gray-200 hover:border-gray-400'}`}
            >
              <span className={`text-sm font-mono ${isDark ? 'text-zinc-600' : 'text-gray-300'}`}>0{i + 1}</span>
              <div className={`flex items-center gap-3 sm:w-1/4 text-xl font-semibold transition-colors duration-200 ${m.color}`}>
                {m.icon} {m.label}
              </div>
              <div className={`sm:w-1/2 text-base flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-500'} group-hover:text-blue-400 transition-colors duration-200`}>
                {m.display}
                <BsArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all duration-200" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Index;