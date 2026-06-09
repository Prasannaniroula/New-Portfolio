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
    sublabel: "Drop me a message anytime",
    icon: <CgMail size={28} />,
    display: "Prasannaniroula987@gmail.com",
    href: "mailto:Prasannaniroula987@gmail.com",
    hoverBorder: "hover:border-red-600",
    hoverIcon: "group-hover:text-red-400",
  },
  {
    label: "Facebook",
    sublabel: "Connect on social media",
    icon: <CgFacebook size={28} />,
    display: "prasanna.niraula.9",
    href: "https://www.facebook.com/prasanna.niraula.9",
    hoverBorder: "hover:border-blue-600",
    hoverIcon: "group-hover:text-blue-500",
  },
  {
    label: "LinkedIn",
    sublabel: "Let's grow our network",
    icon: <CiLinkedin size={28} />,
    display: "prasanna-niroula",
    href: "https://www.linkedin.com/in/prasanna-niroula-74564219b",
    hoverBorder: "hover:border-blue-500",
    hoverIcon: "group-hover:text-blue-400",
  },
  {
    label: "GitHub",
    sublabel: "Check out my code",
    icon: <VscGithub size={28} />,
    display: "Prasannaniroula",
    href: "https://github.com/Prasannaniroula",
    hoverBorder: "hover:border-purple-500",
    hoverIcon: "group-hover:text-purple-400",
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
      <div className="px-8 mb-12">
        <div className="w-10 h-1 bg-red-700 rounded mb-4" />
        <h1 className="font-bold text-5xl mb-3">Let's Connect</h1>
        <p className={`text-base max-w-xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Got an idea worth building? I'm always open to new opportunities, collaborations, and interesting conversations. Reach out through any of these channels.
        </p>
      </div>

      {/* Cards grid */}
      <div className="px-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {methods.map((m, i) => (
          <a
            key={i}
            href={m.href}
            target="_blank"
            rel="noreferrer"
            className={`group flex flex-col gap-4 p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1
              ${m.hoverBorder}
              ${isDark ? 'border-zinc-800 bg-zinc-950' : 'border-gray-200 bg-gray-50'}`}
          >
            {/* Top row — icon + number */}
            <div className="flex items-center justify-between">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200
                ${isDark ? 'bg-zinc-900' : 'bg-gray-100'} ${m.hoverIcon}`}>
                {m.icon}
              </div>
              <span className={`text-sm font-mono ${isDark ? 'text-zinc-700' : 'text-gray-300'}`}>
                0{i + 1}
              </span>
            </div>

            {/* Label + sublabel */}
            <div>
              <div className={`text-xl font-bold transition-colors duration-200 ${m.hoverIcon}`}>
                {m.label}
              </div>
              <div className={`text-sm mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                {m.sublabel}
              </div>
            </div>

            {/* Display link */}
            <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} group-hover:text-blue-400 transition-colors duration-200`}>
              <span className="truncate">{m.display}</span>
              <BsArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all duration-200 shrink-0" />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Contactme