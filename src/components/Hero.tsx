import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto flex flex-col items-start justify-center min-h-[80vh]">
      
      <div className="flex items-center gap-3 mb-12">
        <span className="w-2 h-2 rounded-full bg-zinc-300 animate-pulse"></span>
        <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">Status: Available</span>
      </div>

      {/* Editorial Serif Header */}
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-zinc-100 tracking-tighter leading-[1.1] mb-10 max-w-5xl">
        I build <i className="text-zinc-500">real-time</i> platforms & scalable architectures.
      </h1>

      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between w-full gap-8">
        <p className="text-lg sm:text-xl text-zinc-400 max-w-lg leading-relaxed font-light">
          Full-Stack Engineer specializing in Django, React, JavaScript and TypeScript. Bridging complex backend logistics with resilient frontend experiences.
        </p>
        
        <a
          href="#projects"
          className="group relative inline-flex items-center gap-4 rounded-full border border-zinc-800 px-8 py-4 text-zinc-100 transition-all duration-300 hover:bg-zinc-100 hover:text-[#0c0c0d]"
        >
          <span className="text-sm font-medium uppercase tracking-wider">Explore Work</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;