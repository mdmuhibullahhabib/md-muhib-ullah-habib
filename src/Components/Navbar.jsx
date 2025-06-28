import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = ["home", "about", "skills", "projects", "contact"];

  return (
    <header className="fixed w-full z-50 bg-[#0f2027] text-white shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Dynamic Logo */}
        <a href="#home" className="leading-tight">
          <div className="text-sm tracking-wide text-gray-300">
            Md. Muhib Ullah
          </div>
          <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Habib
          </div>
          <p className="text-xs text-gray-400 mt-1">Full Stack Developer</p>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 uppercase text-sm font-medium">
          {links.map((link) => (
            <li key={link} className="hover:text-cyan-400 transition">
              <a href={`${link}`}>{link}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div onClick={() => setNav(!nav)} className="md:hidden text-xl cursor-pointer">
          {nav ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="md:hidden flex flex-col items-center bg-[#0f2027] py-6 space-y-6 uppercase font-semibold text-sm">
          {links.map((link) => (
            <li key={link} onClick={() => setNav(false)} className="hover:text-cyan-400 transition">
              <a href={`${link}`}>{link}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
