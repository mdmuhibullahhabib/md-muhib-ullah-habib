import React from 'react'

const Header = ({subtitle, title}) => {
    return (
        <div className="bg-gradient-to-r from-[#0f3d3e] via-[#195e63] to-[#0f3d3e] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto mt-5">
          <h2 className="text-lg text-cyan-200">{subtitle}</h2>
          <h1 className="text-4xl font-bold mt-4 ml-4 text-white">{title}</h1>
        </div>
      </div>
      
    )
}

export default Header;