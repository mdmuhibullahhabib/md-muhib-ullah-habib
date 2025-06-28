import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = ["about", "skills", "projects", "contact"];

  return (
    <header className="fixed w-full z-50 bg-[#0f2027] text-white shadow-lg px-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Dynamic Logo */}
        <Link href="#home" className="leading-tight">
          <div className="text-sm tracking-wide text-gray-300">
            Md. Muhib Ullah
          </div>
          <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Habib
          </div>
          <p className="text-xs text-gray-400 mt-1">Full Stack Developer</p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 uppercase text-sm font-medium">
          {links.map((link) => (
            <li key={link} className="hover:text-cyan-400 transition">
              <Link to={`${link}`}>{link}</Link>
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
              <Link to={`${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
