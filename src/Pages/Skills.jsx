import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaJs,
  FaPython,
  FaFire,
  FaDatabase,
  FaCode,
  FaTools,
  FaTerminal,
  FaBug,
  FaLinux,
  FaComments,
  FaLightbulb,
  FaUsers,
  FaClock,
} from "react-icons/fa";

const skillSections = [
  {
    title: "Frontend Development",
    description:
      "Crafting modern, responsive, and performant user interfaces using cutting-edge technologies.",
    skills: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    ],
  },
  {
    title: "Backend & Databases",
    description:
      "Building scalable APIs and managing secure, efficient data storage systems.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "MongoDB", icon: <FaDatabase className="text-green-700" /> },
      { name: "Firebase", icon: <FaFire className="text-yellow-500" /> },
      { name: "Python", icon: <FaPython className="text-indigo-500" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    description:
      "Using powerful developer tools and platforms to enhance productivity and code quality.",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-black" /> },
      { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      { name: "Terminal", icon: <FaTerminal className="text-gray-700" /> },
      { name: "Linux", icon: <FaLinux className="text-gray-600" /> },
      { name: "Debugging", icon: <FaBug className="text-red-500" /> },
    ],
  },
  {
    title: "Soft Skills",
    description:
      "Equipped with essential non-technical skills to work collaboratively and adapt efficiently.",
    skills: [
      { name: "Teamwork", icon: <FaUsers className="text-blue-700" /> },
      { name: "Communication", icon: <FaComments className="text-teal-600" /> },
      { name: "Problem Solving", icon: <FaLightbulb className="text-yellow-400" /> },
      { name: "Time Management", icon: <FaClock className="text-purple-600" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-100 px-6 md:px-20 py-20 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl font-bold text-center mb-8 text-blue-900 tracking-wide">
          💼 My Skillset
        </h2>

        {/* Intro */}
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-600 mb-16">
          I’m a full-stack developer passionate about building clean, user-friendly web applications.
          With a focus on scalable design and a strong grasp of both frontend and backend technologies,
          I aim to deliver impactful solutions. Here’s a breakdown of my core technical and soft skills.
        </p>

        {/* Sections */}
        {skillSections.map((section, i) => (
          <div key={i} className="mb-20">
            <div className="mb-6">
              <h3 className="text-3xl font-semibold text-blue-700">{section.title}</h3>
              <p className="text-gray-600 mt-2">{section.description}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {section.skills.map((skill, index) => (
                <div
                  key={index}
                  title={skill.name}
                  className="group flex flex-col items-center p-5 bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition">{skill.icon}</div>
                  <span className="text-md font-medium text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
