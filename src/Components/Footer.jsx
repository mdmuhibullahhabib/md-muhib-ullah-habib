import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Muhib. All rights reserved.
        </p>

        <div className="flex space-x-5">
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 transition-colors"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition-colors"
          >
            <FaTwitter size={16} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
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
          href="https://yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          yourwebsite.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
