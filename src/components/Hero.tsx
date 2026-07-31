import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 max-w-6xl mx-auto flex flex-col items-start justify-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-6">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        Available for Freelance & Full-Time Roles
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
        Building real-time platforms & <br className="hidden sm:inline" />
        <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
          scalable web architectures.
        </span>
      </h1>

      <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
        Full-Stack Engineer specializing in React, TypeScript, and Django. I bridge complex backend logic with smooth, resilient frontend experiences.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition shadow-lg shadow-cyan-500/20"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;