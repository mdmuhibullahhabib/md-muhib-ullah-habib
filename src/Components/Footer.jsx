import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f2027] text-gray-300 py-10 mt-20">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Dynamic Logo */}
        <div className="text-center md:text-left leading-tight">
          <div className="text-sm tracking-wide text-gray-400">Md. Muhib Ullah</div>
          <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Habib
          </div>
          <p className="text-xs text-gray-500 mt-1">Full Stack Developer</p>
        </div>

        {/* Footer Nav Links */}
        <ul className="flex space-x-6 text-sm font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="hover:text-cyan-400 transition">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4 text-lg">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
            <FaFacebookF />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
            <FaGithub />
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-cyan-400 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Md. Muhib Ullah Habib — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
