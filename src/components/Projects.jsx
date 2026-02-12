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
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio built with React and Tailwind CSS to showcase projects, skills, and experience with smooth animations and a professional design system.",
      image: "/portfolio.jpg",
      github: "https://github.com/yourusername/portfolio",
      live: "https://your-portfolio-live.com",
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
              <div className="flex gap-6 mt-6">
                
                {/* Live Demo */}
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

                {/* GitHub */}
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
