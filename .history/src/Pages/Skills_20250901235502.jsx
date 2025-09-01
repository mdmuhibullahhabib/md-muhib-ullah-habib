import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaFigma, FaJs,
  FaPython, FaFire, FaDatabase, FaCode, FaTerminal, FaBug,
  FaLinux, FaComments, FaLightbulb, FaUsers, FaClock,
} from "react-icons/fa";
import { SiDaisyui, SiTailwindcss } from "react-icons/si";

const skillSections = [
  {
    title: "Frontend Development",
    description: "Crafting modern, responsive, and performant user interfaces using cutting-edge technologies.",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
      { name: "DaisyUI", icon: <SiDaisyui className="text-purple-400 text-3xl" /> },
    ],
  },
  {
    title: "Backend & Databases",
    description: "Building scalable APIs and managing secure, efficient data storage systems.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "MyS", icon: <FaDatabase className="text-emerald-500" /> },
      { name: "MongoDB", icon: <FaDatabase className="text-emerald-500" /> },
      { name: "Firebase", icon: <FaFire className="text-yellow-400" /> },
      { name: "Python", icon: <FaPython className="text-blue-400" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Using powerful tools to improve productivity and code quality.",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
      { name: "GitHub", icon: <FaGithub className="text-white bg-gray-800 p-1 rounded" /> },
      { name: "VS Code", icon: <FaCode className="text-blue-400" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      { name: "Terminal", icon: <FaTerminal className="text-gray-400" /> },
      { name: "Linux", icon: <FaLinux className="text-gray-300" /> },
      { name: "Debugging", icon: <FaBug className="text-red-400" /> },
    ],
  },
  {
    title: "Soft Skills",
    description: "Equipped with essential non-technical skills to collaborate effectively and grow professionally.",
    skills: [
      { name: "Teamwork", icon: <FaUsers className="text-cyan-400" /> },
      { name: "Communication", icon: <FaComments className="text-teal-400" /> },
      { name: "Problem Solving", icon: <FaLightbulb className="text-yellow-300" /> },
      { name: "Time Management", icon: <FaClock className="text-purple-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <>
      <Helmet>
        <title>Skills - Md. Muhib Ullah Habib</title>
      </Helmet>
      <section className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-6 md:px-20 py-20 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8 text-cyan-300 tracking-wide">
            💼 My Skillset
          </h2>

          <p className="text-center text-lg max-w-3xl mx-auto text-gray-300 mb-16">
            I’m a full-stack developer passionate about building clean, user-friendly web applications.
            With a focus on scalable design and strong grasp of both frontend and backend technologies,
            I aim to deliver impactful solutions. Here’s a breakdown of my core technical and soft skills.
          </p>

          {skillSections.map((section, i) => (
            <div key={i} className="mb-20">
              <div className="mb-6">
                <h3 className="text-3xl font-semibold text-cyan-200">{section.title}</h3>
                <p className="text-gray-300 mt-2">{section.description}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {section.skills.map((skill, index) => (
                  <div
                    key={index}
                    title={skill.name}
                    className="group flex flex-col items-center p-5 bg-white/10 rounded-xl shadow-xl hover:shadow-cyan-400/40 hover:scale-105 transition duration-300 backdrop-blur"
                  >
                    <div className="text-4xl mb-2 group-hover:scale-110 transition">{skill.icon}</div>
                    <span className="text-md font-medium text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
