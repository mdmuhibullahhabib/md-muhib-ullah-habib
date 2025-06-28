import React from 'react'

const Header = ({subtitle, title}) => {
    return (
        <div className="bg-[#013c36] text-white py-12 px-6">
            <div className="max-w-6xl mx-auto mt-5">
                <h2 className="text-lg"> {subtitle}</h2>
                <h1 className="text-4xl font-bold mt-4 ml-4">{title}</h1>
            </div>
        </div>
    )
}

export default Header