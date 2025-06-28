import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaTools } from "react-icons/fa";

const projects = [
  {
    title: "Lingo Bingo",
    subtitle: "Language Learning App",
    description: `An interactive vocabulary learning platform designed to help users expand their Japanese language skills through engaging bingo-style games. Includes spaced repetition and progress tracking.`,
    tech: ["React", "Firebase", "Tailwind CSS", "Google Auth"],
    image: "/images/lingo-bingo.png",
    live: "https://cholo-bangladesh-a12c4.web.app/",
    github: "https://github.com/yourusername/lingo-bingo",
    date: "April 2024",
    role: "Full Stack Developer",
  },
  {
    title: "HASHI Dental",
    subtitle: "Dental Clinic Website",
    description: `A responsive and modern website for a dental clinic featuring expert doctor profiles, appointment booking, service overviews, and patient testimonials with a clean UI and smooth animations.`,
    tech: ["React", "Tailwind", "Vite", "React Router"],
    image: "/images/hashi-dental.png",
    live: "https://your-hashi-link.com",
    github: "https://github.com/yourusername/hashi-dental",
    date: "January 2024",
    role: "Frontend Developer",
  },
  {
    title: "GitHub Analytics",
    subtitle: "Developer Stats Dashboard",
    description: `A dashboard that visualizes GitHub data such as contributions, pull requests, stars, and issues by integrating GitHub API. Designed to give developers actionable insights on their work.`,
    tech: ["Next.js", "Chart.js", "DaisyUI", "API Integration"],
    image: "/images/github-analytics.png",
    live: "https://your-github-analytics.com",
    github: "https://github.com/yourusername/github-analytics",
    date: "March 2024",
    role: "Full Stack Developer",
  },
  {
    title: "Personal Portfolio",
    subtitle: "My Developer Portfolio",
    description: `My personal portfolio website showcasing projects, skills, blog posts, and contact information. Features dark/light mode toggle and smooth page transitions for enhanced UX.`,
    tech: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
    image: "/images/portfolio.png",
    live: "https://your-portfolio-link.com",
    github: "https://github.com/yourusername/portfolio",
    date: "February 2024",
    role: "Full Stack Developer",
  },
  {
    title: "Task Manager",
    subtitle: "Productivity App",
    description: `A task management tool with scheduling, notifications, and task categorization to boost productivity. Includes real-time data sync and mobile-friendly UI.`,
    tech: ["Vue", "Firebase", "Vuetify"],
    image: "/images/task-manager.png",
    live: "https://your-task-manager-link.com",
    github: "https://github.com/yourusername/task-manager",
    date: "December 2023",
    role: "Frontend Developer",
  },
  {
    title: "Blog Platform",
    subtitle: "Content Publishing CMS",
    description: `A scalable blogging platform with markdown support, user authentication, and rich text editing. Designed for easy content management and SEO optimization.`,
    tech: ["Next.js", "GraphQL", "Tailwind CSS"],
    image: "/images/blog-platform.png",
    live: "https://your-blog-platform.com",
    github: "https://github.com/yourusername/blog-platform",
    date: "November 2023",
    role: "Full Stack Developer",
  },
];

const allTechs = [
  "React",
  "Firebase",
  "Tailwind CSS",
  "Next.js",
  "Vue",
  "Chart.js",
  "DaisyUI",
  "Framer Motion",
  "Vuetify",
  "GraphQL",
  "Vite",
  "Google Auth",
  "API Integration",
  "React Router",
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((t) =>
        t.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      project.subtitle.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTech =
      selectedTech === "All" || project.tech.includes(selectedTech);

    return matchesSearch && matchesTech;
  });

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-6 md:px-16 py-20 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 text-blue-900 tracking-wide">
          🚀 Featured Projects
        </h2>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 gap-5">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-80 px-5 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />

          <select
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="w-full sm:w-56 px-5 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          >
            <option>All</option>
            {allTechs.map((tech) => (
              <option key={tech}>{tech}</option>
            ))}
          </select>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-20">
            No projects found matching your criteria.
          </p>
        ) : (
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.04] transform transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-46 object-cover"
                  loading="lazy"
                />

                <div className="p-8 space-y-5">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-800">
                      {project.title}
                    </h3>
                    <p className="text-indigo-600 italic text-sm mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-6 text-gray-600 text-sm">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaTools />
                      <span>{project.role}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-800 transition"
                    >
                      Live Demo <FaExternalLinkAlt />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition"
                      title="GitHub Repository"
                    >
                      <FaGithub className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
