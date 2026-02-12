import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 px-6 py-24 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold text-indigo-500 mb-16">
          Get In Touch
        </h2>

        {/* Contact Items */}
        <div className="space-y-10">

          {/* Email */}
          <div className="flex flex-col items-center group">
            <div className="p-5 bg-slate-800 rounded-full shadow-md text-cyan-400 
                            transition-all duration-300 
                            group-hover:scale-110 
                            group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
              <Mail size={26} />
            </div>
            <p className="mt-4 text-lg text-slate-300">
              jallurividya2002@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center group">
            <div className="p-5 bg-slate-800 rounded-full shadow-md text-cyan-400 
                            transition-all duration-300 
                            group-hover:scale-110 
                            group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
              <Phone size={26} />
            </div>
            <p className="mt-4 text-lg text-slate-300">
              +91 7675956238
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center group">
            <div className="p-5 bg-slate-800 rounded-full shadow-md text-cyan-400 
                            transition-all duration-300 
                            group-hover:scale-110 
                            group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
              <MapPin size={26} />
            </div>
            <p className="mt-4 text-lg text-slate-300">
              Kalidindi, Andhra Pradesh, India
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-10 pt-8">

            {/* GitHub */}
            <a
              href="https://github.com/jallurividya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-slate-800 rounded-full shadow-md text-cyan-400
                         transition-all duration-300 
                         hover:scale-110 
                         hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
            >
              <Github size={26} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vidya-sai-mounika-jalluri-873271355/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-slate-800 rounded-full shadow-md text-cyan-400
                         transition-all duration-300 
                         hover:scale-110 
                         hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
            >
              <Linkedin size={26} />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
