import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  FaArrowDown,
  FaGraduationCap,
  FaLaptopCode,
  FaToolbox,
  FaGlobe,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="w-full min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE TEXT */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Hi, I'm <span className="text-cyan-400">Md. Muhib Ullah Habib</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-medium text-gray-300">
              I’m a&nbsp;
              <span className="text-cyan-300 font-semibold">
                <Typewriter
                  words={[
                    "Full Stack Developer",
                    "MERN Expert",
                    "Firebase Integrator",
                    "Tech Enthusiast",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>

            <p className="max-w-xl text-gray-400 text-sm sm:text-base leading-relaxed">
              Passionate about building full-stack web applications using modern tools like React, Node.js,
              Firebase, and MongoDB. Currently a student at Daffodil International University.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mt-6">
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

            <div className="mt-10 text-cyan-400 animate-bounce cursor-pointer">
              <div onClick={() => scrollToSection("about-preview")} title="Scroll to About">
                <FaArrowDown size={24} />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://i.ibb.co/6ckgwLJj/Md-Muhib-Ullah-Habib.jpg"
              alt="Md. Muhib Ullah Habib"
              className="w-72 sm:w-96 rounded-3xl shadow-lg border-4 border-cyan-500 hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="py-20 bg-gradient-to-r from-blue-50 to-cyan-100 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-700 mb-4">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I’m a passionate full-stack developer with a focus on crafting clean and user-friendly web experiences. Studying Software Engineering at Daffodil International University, I’ve worked with modern technologies like React, Node.js, MongoDB, and Firebase.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <FaGraduationCap className="text-blue-600" /> B.Sc. in Software Engineering
              </li>
              <li className="flex items-center gap-2">
                <FaLaptopCode className="text-blue-600" /> MERN Stack Developer
              </li>
              <li className="flex items-center gap-2">
                <FaToolbox className="text-blue-600" /> Firebase, TailwindCSS, JWT Auth
              </li>
              <li className="flex items-center gap-2">
                <FaGlobe className="text-blue-600" /> Currently open to freelance & internship
              </li>
            </ul>
            <Link
              to="about"
              className="inline-block mt-6 px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded hover:bg-blue-600 hover:text-white transition"
            >
              Learn More
            </Link>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/about-illustration.svg"
              alt="About Illustration"
              className="w-full max-w-sm rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">Featured Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-blue-600">Project Title {i}</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  A brief 100-letter description about your best project, explaining what it solves or does.
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 text-sm text-blue-500 hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume / Experience */}
      <section className="py-20 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-4xl font-bold text-center text-blue-700">Experience & Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Software Engineering — Daffodil International University</h3>
              <p className="text-sm text-gray-600">2021 – Present</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Freelance Full Stack Developer</h3>
              <p className="text-sm text-gray-600">2022 – Present | Remote</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Have a Project in Mind?</h2>
        <p className="mb-6">I’m available for freelance work, internships, and collaborations.</p>
        <Link
          href="contact"
          className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded hover:bg-blue-100 transition"
        >
          Let’s Talk
        </Link>
      </section>
    </>
  );
};

export default Home;
