import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ["about", "skills", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reusable styling function
  const getLinkClasses = ({ isActive }) =>
    `transition ${
      isActive ? "text-cyan-400 border-b-2 border-cyan-400" : "hover:text-cyan-400"
    }`;

  return (
    <header
      className={`fixed w-full z-50 text-white shadow-lg px-10 transition-colors duration-300 ${
        scrolled ? "bg-[#0f2027cc]" : "bg-[#0f2027]"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="leading-tight">
          <div className="text-sm tracking-wide text-gray-300">Md. Muhib Ullah</div>
          <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Habib
          </div>
          <p className="text-xs text-gray-400 mt-1">Full Stack Developer</p>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 uppercase text-sm font-medium">
          {links.map((link) => (
            <li key={link}>
              <NavLink to={`/${link}`} className={getLinkClasses}>
                {link}
              </NavLink>
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
            <li key={link} onClick={() => setNav(false)}>
              <NavLink to={`/${link}`} className={getLinkClasses}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
