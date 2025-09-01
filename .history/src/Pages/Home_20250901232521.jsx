import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  FaArrowDown,
  FaGraduationCap,
  FaLaptopCode,
  FaToolbox,
  FaGlobe,
  FaDownload,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Home = () => {

  const [Featured, setFeatured] = useState([]);

  // projects
  useEffect(() => {
    axios.get("https://md-muhib-ullah-habib-server.vercel.app/featured")
      .then((res) => {
        setFeatured(res.data);
      })
      .catch((err) => {
        // console.error("Error fetching projects:", err);
      });
  }, []);



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
              
                href="https://drive.google.com/uc?export=download&id=15Q2v_HxG7DW46WW97PXsQs3-OMPPcljm"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-md bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold"
              >
                    <FaDownload />
                Download Resume
              </a>
              <Link
                to="contact"
                className="px-6 py-2 rounded-md border border-cyan-400 hover:bg-cyan-600 transition text-cyan-400 hover:text-white font-semibold"
              >
                Contact Me
              </Link>
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
              src="https://i.ibb.co/FqW9hqTB/Chat-GPT-Image-Jun-28-2025-04-12-13-PM.png"
              alt="About Illustration"
              className="w-full max-w-sm rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="py-20 bg-gradient-to-br from-[#e0f7fa] via-[#f1f8e9] to-[#fce4ec]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">Featured Projects</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Explore a curated list of my favorite projects, showcasing advanced UI design, real-world APIs, Firebase authentication, and seamless backend integrations. Each one is a unique challenge solved with care.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Featured?.map((fea) => (
              <div key={fea._id} className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition">
                <h3 className="text-xl font-semibold text-blue-600">{fea.projectName}</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {fea.description}
                </p>
                <a
                  href={fea.githubLink}
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
      <section className="py-20 bg-gradient-to-tr from-[#ede7f6] via-[#e3f2fd] to-[#e0f7fa] text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Experience & Education</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-600 border-b pb-2">🎓 Education</h3>

              <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
                <h4 className="text-lg font-semibold">BSc in Software Engineering</h4>
                <p className="text-sm text-gray-600">Daffodil International University · 2023 – Present</p>
                <p className="text-sm text-gray-700 mt-2">
                  Core focus on full-stack development, software design patterns, agile methodology, and real-world project implementation.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-600 border-b pb-2">💼 Experience</h3>

              <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
                <h4 className="text-lg font-semibold">Freelance Full Stack Developer</h4>
                <p className="text-sm text-gray-600">Remote · 2024 – Present</p>
                <p className="text-sm text-gray-700 mt-2">
                  Delivered web apps using React, Node.js, and MongoDB. Specialized in authentication, RESTful APIs, and responsive UI/UX.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-4xl font-bold">Let’s Build Something Great Together!</h2>
          <p className="text-lg text-blue-100">
            I'm always open to discussing product design work, partnerships, and freelance opportunities. Whether you have a question or just want to say hi — I’ll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded hover:bg-blue-100 transition"
            >
              Let’s Talk
            </Link>
            <a
              href="mailto:mdmuhibullahhabib6348.com"
              className="inline-block px-8 py-3 border border-white text-white font-semibold rounded hover:bg-white hover:text-blue-700 transition"
            >
              Send Email
            </a>
          </div>

          <div className="mt-10 text-sm text-blue-200">
            <p>Currently based in Dhaka, Bangladesh — working remotely worldwide 🌍</p>
            <p className="mt-1">Available: Mon - Fri, 9:00 AM to 6:00 PM</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
