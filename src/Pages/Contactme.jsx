import React from 'react'
import { themes } from '../Context/ThemeContext'
import { useTheme } from '../Context/ThemeContext'
import { VscArrowLeft } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { CgFacebook, CgMail } from 'react-icons/cg'
import { CiLinkedin } from 'react-icons/ci'
import { VscGithub } from 'react-icons/vsc'
import { BsArrowUpRight } from 'react-icons/bs'

const methods = [
  {
    label: "Email",
    icon: <CgMail size={28} />,
    display: "Prasannaniroula987@gmail.com",
    href: "mailto:Prasannaniroula987@gmail.com",
    color: "group-hover:text-red-400",
  },
  {
    label: "Facebook",
    icon: <CgFacebook size={28} />,
    display: "prasanna.niraula.9",
    href: "https://www.facebook.com/prasanna.niraula.9",
    color: "group-hover:text-blue-500",
  },
  {
    label: "LinkedIn",
    icon: <CiLinkedin size={28} />,
    display: "prasanna-niroula",
    href: "https://www.linkedin.com/in/prasanna-niroula-74564219b",
    color: "group-hover:text-blue-400",
  },
  {
    label: "GitHub",
    icon: <VscGithub size={28} />,
    display: "Prasannaniroula",
    href: "https://github.com/Prasannaniroula",
    color: "group-hover:text-purple-400",
  },
]

function Contactme() {
  const { isDark } = useTheme()
  const t = isDark ? themes.dark : themes.light

  return (
    <div className={`min-h-screen w-full pb-20 ${t.bg} ${t.text}`}>

      {/* Back */}
      <Link to="/" className={`inline-flex gap-2 p-8 items-center text-sm transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}>
        <VscArrowLeft /> BACK TO HOME
      </Link>

      {/* Header */}
      <div className="px-8 mb-10">
        <div className="w-10 h-1 bg-red-700 rounded mb-4" />
        <h1 className="font-bold text-5xl mb-3">Contact Section</h1>
        <p className={`text-base max-w-xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          I'm always open to discussing new ideas, opportunities, collaborations, and innovative projects. Feel free to reach out any of the mentioned ways.
        </p>
      </div>

      {/* Contact rows */}
      <div className="px-8 flex flex-col">
        {methods.map((m, i) => (
          <a
            key={i}
            href={m.href}
            target="_blank"
            rel="noreferrer"
            className={`group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b gap-4 transition-all duration-200
              ${isDark ? 'border-zinc-800 hover:border-zinc-600' : 'border-gray-200 hover:border-gray-400'}`}
          >
            {/* Left — number */}
            <span className={`text-sm font-mono ${isDark ? 'text-zinc-600' : 'text-gray-300'}`}>
              0{i + 1}
            </span>

            {/* Middle — icon + label */}
            <div className={`flex items-center gap-3 sm:w-1/4 text-xl font-semibold transition-colors duration-200 ${m.color}`}>
              {m.icon}
              {m.label}
            </div>

            {/* Right — link */}
            <div className={`sm:w-1/2 text-base flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-500'} group-hover:text-blue-400 transition-colors duration-200`}>
              {m.display}
              <BsArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all duration-200" />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Contactme