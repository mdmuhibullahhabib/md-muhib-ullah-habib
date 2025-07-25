import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Muhib. All rights reserved.
        </p>

        <div className="flex space-x-5">
          <a
            href="https://www.facebook.com/mdmuhibullah.habib"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 transition-colors"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="https://linkedin.com/in/mdmuhibullahhabib"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a
            href="https://github.com/mdmuhibullahhabib"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-100 transition-colors"
          >
            <FaGithub size={16} />
          </a>
        </div>

        <a
          href="https://mdmuhibullahhabib.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          www.mdmuhibullahhabib.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
