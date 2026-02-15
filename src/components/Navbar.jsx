import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "skills", name: "Skills" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];

  // Active link while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-500 tracking-wide">
          Vidya
        </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative px-3 py-2 font-medium transition-all duration-300
                ${
                  active === link.id
                    ? "text-indigo-500"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
            >
              {link.name}
              {active === link.id && (
                <span className="absolute left-0 -bottom-1 w-full bg-indigo-500 rounded-full"></span>
              )}
            </a>
          ))}

          {/* Resume Button */}
          <a
            href='VidyaSaiMounikaJalluriResume.pdf'
            download
            className="flex items-center gap-2 border border-cyan-400 text-cyan-400 px-5 py-2 rounded-lg font-medium 
            transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900"
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        {/* Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-200"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-6 py-6 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`block font-medium transition-all duration-300
                  ${
                    active === link.id
                      ? "text-indigo-500"
                      : "text-slate-300 hover:text-cyan-400"
                  }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 border border-cyan-400 text-cyan-400 px-5 py-2 rounded-lg font-medium 
              transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
