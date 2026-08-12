import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-900 py-10 bg-[#0a0a0a] text-zinc-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* Left Side: Copyright & Branding */}
        <p className="font-light">
          © {new Date().getFullYear()} Abhijith Satheesan. <br className="sm:hidden" />
          <span className="hidden sm:inline"> | </span> 
          Built with React & Tailwind.
        </p>
        
        {/* Right Side: Active Social Links */}
        <div className="flex gap-8 font-medium uppercase tracking-widest text-xs">
          <a 
            href="https://github.com/AbhijithSatheesan/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-zinc-200 transition-colors duration-300"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/abhijith-satheesan-5a3635270" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-zinc-200 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:abhijithms7306@gmail.com" 
            className="hover:text-zinc-200 transition-colors duration-300"
          >
            Email
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;