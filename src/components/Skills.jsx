import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import { SiExpress, SiPostman } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skills = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <VscCode />, name: "VS Code" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-900 px-6 py-24 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        
        <h2 className="text-4xl font-bold text-indigo-500 mb-16">
          My Skills
        </h2>

        <div className="grid grid-cols-2 bg-slate-800 p-8 rounded-2xl shadow-lg md:grid-cols-4 gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center"
            >
              
              {/* Circular Icon */}
              <div
                className="
                  w-24 h-24 flex items-center justify-center
                  rounded-full bg-indigo-950
                  text-4xl text-cyan-400
                  shadow-md
                  transition-all duration-500
                  group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]
                  group-hover:scale-105
                "
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <span
                className="
                  mt-4 text-sm font-medium text-slate-300
                  opacity-0 translate-y-2
                  transition-all duration-300
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  group-hover:text-cyan-400
                "
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
