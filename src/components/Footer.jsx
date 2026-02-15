const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-indigo-500 font-medium">
            Vidya Sai Mounika Jalluri
          </span>. All rights reserved.
        </p>

        <p className="text-xs text-slate-500 mt-2">
          Built with React & Tailwind CSS
        </p>

      </div>
    </footer>
  );
};

export default Footer;
