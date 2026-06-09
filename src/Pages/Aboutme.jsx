import React from 'react'
import { useTheme } from '../Context/ThemeContext'
import { themes } from '../Context/ThemeContext'
import { VscArrowLeft } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function Aboutme() {
  const { isDark } = useTheme()
  const t = isDark ? themes.dark : themes.light

  const stats = [
    { label: "Projects Built", value: "2+" },
    { label: "Tech Stack", value: "MERN" },
    { label: "Current Goal", value: "Full-Stack" },
    { label: "Next Goal", value: "AI/ML" },
  ]

  const skills = ["React", "Node.js", "Express", "MongoDB", "JavaScript", "Python", "Git", "REST APIs"]

  const interests = ["🤖 Artificial Intelligence", "📊 Data Analysis", "🧩 Problem Solving", "✈️ Travelling"]

  return (
    <>
     <Helmet>
      <title>About | Prasanna Niroula</title>
      <meta
        name="description"
        content="I'm a fresher Full-Stack Developer from Biratnagar, Nepal, currently pursuing my BSc. CSIT at MMAMC. I specialize in MERN stack development and have built real-world projects that solve practical problems."
      />
    </Helmet>
    <div className={`min-h-screen w-full pb-20 ${t.bg} ${t.text}`}>

      {/* Back */}
      <Link to="/" className={`inline-flex gap-2 p-8 items-center text-sm transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}>
        <VscArrowLeft /> BACK TO HOME
      </Link>

      {/* Header */}
      <div className="px-8 mb-10">
        <div className="w-10 h-1 bg-red-700 rounded mb-4" />
        <h1 className="font-bold text-5xl mb-3">About Me</h1>
      </div>

      {/* Main content */}
      <div className="px-8 flex flex-col sm:flex-row gap-12">

        {/* Left — Bio */}
        <div className="sm:w-1/2 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-3">Hi, I'm Prasanna 👋</h2>
            <p className={`leading-relaxed text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              I'm a fresher Full-Stack Developer from Biratnagar, Nepal, currently pursuing my BSc. CSIT 
              at MMAMC. I specialize in MERN stack development and have built real-world 
              projects that solve practical problems.
            </p>
          </div>

          <div>
            <p className={`leading-relaxed text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              I'm passionate about Artificial Intelligence and Machine Learning, and my long-term 
              goal is to transition into AI engineering. Right now I'm focused on sharpening my 
              Full-Stack skills while continuously exploring AI/ML concepts and Data Analysis on the side.
            </p>
          </div>

          <div>
            <p className={`leading-relaxed text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              When I'm not coding, you'll probably find me planning my next trip ✈️ — travelling 
              is my favourite way to recharge and get inspired.
            </p>
          </div>
        </div>

        {/* Right — Stats + Skills + Interests */}
        <div className="sm:w-1/2 flex flex-col gap-8">

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className={`p-4 rounded-xl border ${isDark ? 'border-zinc-800 bg-zinc-950' : 'border-gray-200 bg-gray-50'}`}>
                <div className="text-2xl font-bold text-red-600">{s.value}</div>
                <div className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className={`px-3 py-1 rounded-full text-sm border transition
                  ${isDark ? 'border-zinc-700 text-gray-300 hover:border-red-600' : 'border-gray-300 text-gray-600 hover:border-red-600'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Interests</h3>
            <div className="flex flex-col gap-2">
              {interests.map((item) => (
                <div key={item} className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Aboutme