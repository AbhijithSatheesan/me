import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-800 py-8 bg-black text-zinc-500 text-sm text-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} — Built with React, TypeScript & Tailwind CSS</p>
        <div className="flex gap-6">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-zinc-300">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-zinc-300">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;