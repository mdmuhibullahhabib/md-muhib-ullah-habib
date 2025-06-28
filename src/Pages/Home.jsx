import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex items-center justify-center"
    >
      <div className="max-w-screen-xl px-6 text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Hi, I'm <span className="text-cyan-400">Md. Muhib Ullah Habib</span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-medium text-gray-300">
          I’m a&nbsp;
          <span className="text-cyan-300 font-semibold">
            <Typewriter
              words={["Full Stack Developer", "MERN Expert", "Firebase Integrator", "Tech Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
          Passionate about building full-stack web applications using modern tools like React, Node.js, Firebase, and MongoDB. Currently a student at Daffodil International University.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
          <a
            href="/your-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-md bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-2 rounded-md border border-cyan-400 hover:bg-cyan-600 transition text-cyan-400 hover:text-white font-semibold"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-12 text-cyan-400 animate-bounce">
          <a href="#about">
            <FaArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
