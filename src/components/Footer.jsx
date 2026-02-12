const Footer = () => {
  return (
    <footer className="group bg-slate-700 text-slate-400 py-6 relative transition-all duration-300">
      
      <div className="max-w-6xl mx-auto text-center relative h-6 overflow-hidden">
        
        {/* Default Text */}
        <p className="transition-transform duration-300 group-hover:-translate-y-6">
            M A D E &nbsp; W I T H &nbsp; 💜 &nbsp; B Y &nbsp; 
            <span className="text-indigo-500 font-semibold">VIDYA</span>
        </p>

        {/* Thank You Text */}
        <p className="absolute top-6 left-0 w-full text-center font-medium transition-transform duration-300 group-hover:-translate-y-6">
          <span className="text-cyan-400 font-semibold">Thank You 💜</span>
        </p>

      </div>

    </footer>
  );
};

export default Footer;
