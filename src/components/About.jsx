const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-900 px-6 py-24 flex items-center text-slate-200"
    >
      <div className="max-w-6xl mx-auto w-full">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Profile Image */}
          <div className="flex justify-center">
            <img
              src="/profile.jpeg"
              alt="Vidya Profile"
              className="w-64 h-64 object-cover rounded-2xl 
                         border-2 border-cyan-400 shadow-md"
            />
          </div>

          {/* Right Side - Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-indigo-500 mb-6">
              About Me
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-slate-300">
              I am <span className="font-semibold text-cyan-400">
                Vidya Sai Mounika Jalluri
              </span>, a Full Stack Web Developer with a 
              strong foundation in building modern, scalable web applications. I specialize 
              in developing responsive user interfaces using <span className="text-indigo-400 font-medium">React</span> and creating efficient backend 
              systems with <span className="text-indigo-400 font-medium">Node.js</span> and <span className="text-indigo-400 font-medium">Express</span>. With a keen interest in problem-solving and clean 
              architecture, I am committed to writing maintainable code and continuously improving 
              my technical expertise to deliver high-quality software solutions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
