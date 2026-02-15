import { useState, useEffect } from "react";
import { Github, Linkedin, ExternalLink, Briefcase } from "lucide-react";

const roles = [
  "Full Stack Web Developer",
  "Backend Enthusiast",
];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[index % roles.length];
    let timeout;

    if (typing) {
      if (text.length < currentRole.length) {
        timeout = setTimeout(
          () => setText(currentRole.slice(0, text.length + 1)),
          150
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(currentRole.slice(0, text.length - 1)),
          100
        );
      } else {
        setTyping(true);
        setIndex(index + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, typing, index]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-slate-900"
    >
      {/* Greeting */}
      <p className="text-lg md:text-xl text-slate-300 font-medium mb-4">
        Hi, I’m
      </p>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-bold text-indigo-500 mb-6">
        Vidya Sai Mounika Jalluri
      </h1>

      {/* Typing Animation */}
      <h2 className="text-cyan-400 text-xl md:text-2xl font-medium h-10 mb-8">
        {text}
        <span className="border-r-2 border-cyan-400 animate-blink ml-1"></span>
      </h2>

      {/* CTA Button (styled like About section buttons) */}
      <a
        href="#projects"
        className="flex items-center justify-center gap-2
             sm:w-auto
             px-6 py-2.5 rounded-lg
             bg-indigo-500/20 border border-indigo-500
             text-indigo-500 font-medium text-sm
             shadow-md
             transition-all duration-300
             hover:bg-indigo-500 hover:text-white hover:-translate-y-1"
      >
        <Briefcase size={18} />
        View My Work
      </a>


      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-10">
        {/* GitHub */}
        <a
          href="https://github.com/jallurividya"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-12 h-12 flex items-center justify-center
            rounded-full bg-slate-800 text-cyan-400
            shadow-md transition-all duration-300
            hover:scale-110 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]
          "
        >
          <Github size={22} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/vidya-sai-mounika-jalluri-873271355/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-12 h-12 flex items-center justify-center
            rounded-full bg-slate-800 text-cyan-400
            shadow-md transition-all duration-300
            hover:scale-110 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]
          "
        >
          <Linkedin size={22} />
        </a>
      </div>
    </section>
  );
};

export default Home;
