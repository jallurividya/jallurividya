import { Eye, Download } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-900 px-6 py-24 flex items-center text-slate-200"
    >
      <div className="max-w-4xl mx-auto w-full">

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-indigo-500 mb-16 text-center">
          About Me
        </h2>

        {/* Card */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-slate-800 p-8 rounded-2xl shadow-lg">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/profile.jpeg"
              alt="Vidya Profile"
              className="w-64 h-64 object-cover rounded-2xl 
                         border-2 border-cyan-400 shadow-md"
            />
          </div>

          {/* Content */}
          <div>

            <p className="text-base md:text-lg leading-relaxed text-slate-300 mb-8 text-justify">
              I am <span className="font-semibold text-cyan-400">
                Vidya Sai Mounika Jalluri
              </span>, a Full Stack Web Developer with a
              strong foundation in building modern, scalable web applications. I specialize
              in developing responsive user interfaces using{" "}
              <span className="text-indigo-400 font-medium">React</span> and creating efficient backend
              systems with{" "}
              <span className="text-indigo-400 font-medium">Node.js</span> and{" "}
              <span className="text-indigo-400 font-medium">Express</span>. With a keen interest in problem-solving and clean
              architecture, I am committed to writing maintainable code and continuously improving
              my technical expertise.
            </p>

            {/* Resume Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">

              {/* View Resume */}
              <a
                href="/VidyaSaiMounikaJalluriResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2
                           w-full sm:w-auto
                           px-6 py-2.5 rounded-lg
                           bg-cyan-400/20 border border-cyan-400
                           text-cyan-400 font-medium text-sm
                           shadow-md
                           transition-all duration-300
                           hover:bg-cyan-400 hover:text-slate-900 hover:-translate-y-1"
              >
                <Eye size={18} />
                View Resume
              </a>

              {/* Download Resume */}
              <a
                href="/VidyaSaiMounikaJalluriResume.pdf"
                download
                className="flex items-center justify-center gap-2
                           w-full sm:w-auto
                           px-6 py-2.5 rounded-lg
                           bg-indigo-500/20 border border-indigo-500
                           text-indigo-500 font-medium text-sm
                           shadow-md
                           transition-all duration-300
                           hover:bg-indigo-500 hover:text-white hover:-translate-y-1"
              >
                <Download size={18} />
                Download Resume
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
