import React from 'react'
import { VscArrowLeft } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { useTheme } from '../Context/ThemeContext'
import { themes } from '../Context/ThemeContext'
import { BsArrowUpRight } from 'react-icons/bs'

const projects = [
  {
    number: "01",
    title: "Hamro Aadhiyan",
    stack: ["React", "Node", "Express", "MongoDB"],
    description: "A full-stack ed-tech web application developed with the MERN stack. Hamro Aadhiyan provides students with an interactive learning experience, featuring course management, user authentication, and a responsive interface built for all devices.",
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

function Projects() {
  const { isDark } = useTheme()
  const t = isDark ? themes.dark : themes.light

  return (
    <div className={`min-h-screen w-full pb-20 ${t.bg} ${t.text}`}>

      {/* Back */}
      <Link to="/" className={`inline-flex gap-2 p-8 items-center text-sm transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}>
        <VscArrowLeft /> BACK TO HOME
      </Link>

      {/* Header */}
      <div className="px-8 mb-12">
        <div className="w-10 h-1 bg-red-700 rounded mb-4" />
        <h1 className="font-bold text-5xl mb-3">Projects</h1>
        <p className={`text-base max-w-xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          A collection of things I've built from full-stack web apps to AI-powered tools.
        </p>
      </div>

      {/* Projects */}
      <div className="px-8 flex flex-col gap-6">
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
              {/* Hover overlay */}
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

              {/* Number + Title */}
              <div>
                <span className={`text-sm font-mono ${isDark ? 'text-zinc-600' : 'text-gray-300'}`}>
                  {p.number}
                </span>
                <h2 className="text-2xl font-bold mt-1">{p.title}</h2>
              </div>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className={`px-3 py-1 rounded-full text-xs border
                      ${isDark ? 'border-zinc-700 text-gray-300' : 'border-gray-300 text-gray-600'}`}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {p.description}
              </p>

              {/* Live link */}
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-500 transition w-fit"
              >
                Live Link <BsArrowUpRight />
              </a>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects