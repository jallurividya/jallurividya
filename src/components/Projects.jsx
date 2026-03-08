import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "AI Time Tracker",
      description:
        "A modern AI-powered time tracking application that provides activity insights, smart categorization, and visual analytics to improve productivity and daily performance.",
      image: "/ai-time-tracker.png",
      github: "https://github.com/jallurividya/ai-evaluation",
      live: "https://jallurividya.github.io/ai-evaluation/",
    },
    {
      title: "Pet Care App",
      description: "A full-stack Pet Care Management System built with React, Node.js, Express, and Supabase. It allows users to manage pets, track vaccinations, maintain health logs, create social posts, and receive AI-based diet recommendations. The app includes authentication, real-time updates, and responsive UI design.",
      image: "/pet-care-app.png",
      frontend: "https://github.com/jallurividya/pet-care-client",
      backend: "https://github.com/jallurividya/pet-care-server",
      live: "https://pet-care-client-fawn.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-slate-900 px-6 py-24">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-indigo-500 text-center mb-16">
          Projects
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl shadow-lg p-8"
            >

              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-contain transition-transform duration-500"
                />
              </div>
              
              {/* Buttons */}
              <div className="flex flex-wrap gap-6 mt-6">

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 
                 px-6 py-2.5 rounded-lg
                 bg-cyan-400/20 border border-cyan-400
                 text-cyan-400 font-medium text-sm
                 shadow-md
                 transition-all duration-300
                 hover:bg-cyan-400 hover:text-slate-900 hover:-translate-y-1"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}

                {/* Single GitHub Repo (AI Tracker) */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 
                 px-6 py-2.5 rounded-lg
                 bg-indigo-500/20 border border-indigo-500
                 text-indigo-500 font-medium text-sm
                 shadow-md
                 transition-all duration-300
                 hover:bg-indigo-500 hover:text-white hover:-translate-y-1"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                )}

                {/* Frontend Repo */}
                {project.frontend && (
                  <a
                    href={project.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 
                 px-6 py-2.5 rounded-lg
                 bg-purple-500/20 border border-purple-500
                 text-purple-500 font-medium text-sm
                 shadow-md
                 transition-all duration-300
                 hover:bg-purple-500 hover:text-white hover:-translate-y-1"
                  >
                    <Github size={18} />
                    Frontend
                  </a>
                )}

                {/* Backend Repo */}
                {project.backend && (
                  <a
                    href={project.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 
                 px-6 py-2.5 rounded-lg
                 bg-pink-500/20 border border-pink-500
                 text-pink-500 font-medium text-sm
                 shadow-md
                 transition-all duration-300
                 hover:bg-pink-500 hover:text-white hover:-translate-y-1"
                  >
                    <Github size={18} />
                    Backend
                  </a>
                )}

              </div>

              {/* Content */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-indigo-500 mb-4">
                  {project.title}
                </h3>

                <p className="text-base text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
