import React from "react";
import { motion } from "framer-motion";
// import profile from "../assets/your-photo.jpg"; // Replace with your image path
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiFirebase } from "react-icons/si";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "Firebase", level: 70 },
  { name: "Tailwind CSS", level: 90 },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-br from-[#12151a] via-[#1f2733] to-[#28343d] text-gray-100 py-20 px-6"
    >
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16 tracking-wide text-cyan-400">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Profile + Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3 bg-gray-900 bg-opacity-30 backdrop-blur-md rounded-3xl p-8 shadow-lg"
          >
            <img
              src={'https://i.ibb.co/6ckgwLJj/Md-Muhib-Ullah-Habib.jpg'}
              alt="Md. Muhib Ullah Habib"
              className="rounded-2xl mb-6 w-full object-cover border border-cyan-500"
            />

            <p className="text-gray-300 mb-6 leading-relaxed text-justify font-medium">
              Hello! I’m <strong className="text-cyan-400">Md. Muhib Ullah Habib</strong>, a dedicated Full Stack Developer and Software Engineering student at Daffodil International University. I specialize in building performant and scalable web applications that create excellent user experiences.
            </p>

            <p className="text-gray-400 mb-6 leading-relaxed text-justify">
              With a solid foundation in JavaScript and the MERN stack, I thrive on solving complex problems and continuously evolving my skills to stay on the cutting edge of technology.
            </p>

            <p className="text-gray-400 leading-relaxed text-justify">
              Beyond coding, I am passionate about UI/UX design, clean architecture, and contributing to open-source projects.
            </p>
          </motion.div>

          {/* Cards + Skills */}
          <div className="md:w-2/3 space-y-10">
            {/* Info Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Experience",
                  desc: "Over 2 years developing full-stack web apps using React, Node.js, and Firebase with a focus on scalable architecture.",
                },
                {
                  title: "Education",
                  desc: "Pursuing B.Sc. in Software Engineering at Daffodil International University, maintaining strong academic performance.",
                },
                {
                  title: "Interests",
                  desc: "Passionate about web development, UI/UX design, open source, AI innovations, and tech blogging.",
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="bg-gray-900 bg-opacity-30 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-cyan-600 transition"
                >
                  <h3 className="text-cyan-400 font-semibold text-xl mb-3">{title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Technologies Icons */}
            <motion.div
              className="bg-gray-900 bg-opacity-30 backdrop-blur-md rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-cyan-400 font-semibold text-xl mb-6">Technologies I Use</h3>
              <div className="grid grid-cols-5 sm:grid-cols-8 gap-6 text-cyan-400 text-4xl">
                <FaHtml5 title="HTML5" />
                <FaCss3Alt title="CSS3" />
                <SiTailwindcss title="Tailwind CSS" />
                <SiJavascript title="JavaScript" />
                <FaReact title="React" />
                <FaNodeJs title="Node.js" />
                <SiMongodb title="MongoDB" />
                <SiFirebase title="Firebase" />
                <FaGitAlt title="Git" />
                <FaDatabase title="Database" />
              </div>
            </motion.div>

            {/* Skills Progress Bars */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-cyan-400 font-semibold text-xl mb-6">Skill Proficiency</h3>
              <div className="space-y-5">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-1 font-medium">
                      <span>{name}</span>
                      <span>{level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-4">
                      <div
                        className="bg-cyan-400 h-4 rounded-full transition-all duration-700"
                        style={{ width: `${level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
