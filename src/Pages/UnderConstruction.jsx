import React from 'react'
import { useTheme } from '../Context/ThemeContext'
import { themes } from '../Context/ThemeContext'

function UnderConstruction() {
    const{isDark, toogleTheme} = useTheme()
    const t = isDark ? themes.dark : themes.light

  return (

    <div className={`${t.bg} ${t.text} w-full h-screen flex flex-col items-center mt-20 text-xl`}>
        <div className="flex justify-center">
          <svg
            className="animate-spin h-24 w-24 text-indigo-600"
            xmlns="http://w3.org"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
        <h2 className="mt-6 text-3xl font-extrabold">
          Site Under Construction
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm">
          We are currently working hard to bring you a brand new experience. 
          Please check back soon!
        </p>
        

    </div>
  )
}

export default UnderConstruction