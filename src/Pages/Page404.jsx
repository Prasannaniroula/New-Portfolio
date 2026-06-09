import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../Context/ThemeContext'
import { themes } from '../Context/ThemeContext'
import { VscArrowLeft } from 'react-icons/vsc'

function Page404() {
  const { isDark } = useTheme()
  const t = isDark ? themes.dark : themes.light

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-8 ${t.bg} ${t.text}`}
    >
      <div className="max-w-2xl text-center">

        {/* Red accent */}
        <div className="w-12 h-1 bg-red-700 rounded mx-auto mb-6" />

        {/* 404 */}
        <h1 className="text-8xl sm:text-9xl font-bold text-red-700">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-bold mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p
          className={`mt-6 text-lg leading-relaxed ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Looks like you've wandered into an unexplored route.
          The page you're looking for doesn't exist or may have
          been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

          <Link to="/">
            <button
              className="
                px-6 py-3 rounded-xl
                bg-red-700 text-white
                hover:bg-red-800
                transition
                font-semibold
              "
            >
              Go Home
            </button>
          </Link>

          <Link to="/projects">
            <button
              className={`
                px-6 py-3 rounded-xl border transition font-semibold
                ${
                  isDark
                    ? 'border-white hover:bg-zinc-900'
                    : 'border-black hover:bg-gray-100'
                }
              `}
            >
              View Projects
            </button>
          </Link>

        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link
            to="/"
            className={`
              inline-flex items-center gap-2 text-sm transition
              ${
                isDark
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-500 hover:text-black'
              }
            `}
          >
            <VscArrowLeft />
            BACK TO HOME
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Page404