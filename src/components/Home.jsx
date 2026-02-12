import { useState, useEffect } from "react";
import { Github, Linkedin } from "lucide-react";

const roles = [
  "Full Stack Web Developer",
  "Backend Enthusiast"
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
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      {/* Greeting */}
      <p className="text-lg md:text-xl text-slate-300 font-medium mb-4">
        Hi, I’m
      </p>

      <h1 className="text-4xl md:text-6xl font-bold text-indigo-500 mb-6">
        Vidya Sai Mounika Jalluri
      </h1>

      {/* Typing Animation */}
      <h2 className="text-cyan-400 text-xl md:text-2xl font-medium h-10 mb-8">
        {text}
        <span className="border-r-2 border-cyan-400 animate-blink ml-1"></span>
      </h2>

      {/* CTA Button */}
      <a
        href="#projects"
        className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold 
        transition duration-300 hover:bg-indigo-500"
      >
        View My Work
      </a>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-10">
        <a
          href="https://github.com/jallurividya"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-slate-800 rounded-lg text-slate-300 
          hover:text-cyan-400 hover:bg-slate-700 transition duration-300"
        >
          <Github size={22} />
        </a>

        <a
          href="https://www.linkedin.com/in/vidya-sai-mounika-jalluri-873271355/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-slate-800 rounded-lg text-slate-300 
          hover:text-cyan-400 hover:bg-slate-700 transition duration-300"
        >
          <Linkedin size={22} />
        </a>
      </div>
    </section>
  );
};

export default Home;
