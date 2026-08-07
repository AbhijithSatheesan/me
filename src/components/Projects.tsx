import React from "react";
import { Link } from "react-router-dom";

// Import your new wide image
import respawnNationImg from "./images/RespawnNation.png";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-zinc-900">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-4">
        <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-500">Flagship Project</h2>
        <p className="text-lg text-zinc-300 max-w-md font-serif italic">A real-time esports platform</p>
      </div>

      <article className="group flex flex-col w-full">
        
        {/* --- MASSIVE WIDE IMAGE --- 
            Using w-full and h-auto ensures 100% of the image is shown without any cropping on both desktop and mobile.
        */}
        <div className="w-full mb-10 md:mb-16 rounded-xl overflow-hidden bg-[#121214] border border-zinc-800 shadow-2xl relative">
           <img 
             src={respawnNationImg} 
             alt="Respawn Nation Architecture" 
             className="w-full h-auto block transition-transform duration-1000 ease-out group-hover:scale-[1.03]" 
           />
           {/* Subtle overlay that fades out when hovered */}
           <div className="absolute inset-0 bg-black/20 transition-opacity duration-1000 group-hover:opacity-0 pointer-events-none"></div>
        </div>

        {/* --- EDITORIAL SPLIT-TEXT LAYOUT --- */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Side: Title and Tech Stack */}
          <div className="md:col-span-5 flex flex-col items-start">
            <h3 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-zinc-100 mb-6 tracking-tighter">
              <Link to="/respawn-nation" className="hover:text-zinc-400 transition-colors duration-500">Respawn Nation</Link>
            </h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {["React", "Django", "Cloudflare", "Razorpay", "WebSockets"].map(tech => (
                <span key={tech} className="text-xs uppercase tracking-widest text-zinc-600 font-medium">{tech}</span>
              ))}
            </div>
          </div>

          {/* Right Side: Description and Link */}
          <div className="md:col-span-7 md:pl-8 border-t md:border-t-0 md:border-l border-zinc-800/50 pt-8 md:pt-0">
            <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed mb-10 font-light">
              A high-performance esports live streaming platform built to digitize complex event logistics. Engineered to seamlessly handle real-time tournament brackets, live broadcast feeds, and automated financial payouts via an ACID-compliant internal ledger.
            </p>
            <Link to="/respawn-nation" className="group/btn inline-flex items-center gap-4 text-sm font-medium uppercase tracking-widest text-zinc-100 hover:text-zinc-500 transition-colors">
              View Architecture Deep Dive <span className="transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
            </Link>
          </div>

        </div>
      </article>

      {/* --- OTHER EXPLORATIONS (Minimal Mention) --- */}
      <div className="mt-32 pt-8 border-t border-zinc-900">
        <h4 className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-8">Other Explorations</h4>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b border-zinc-900/50 hover:border-zinc-700 transition-colors group/row cursor-pointer">
          <div>
             <h5 className="text-xl font-serif text-zinc-300 group-hover/row:text-zinc-100 transition-colors">Vehicle Valuation Engine</h5>
             <span className="text-sm text-zinc-600 font-light mt-1 block">Python / Scikit-Learn</span>
          </div>
          <a href="#" className="mt-4 sm:mt-0 text-xs uppercase tracking-widest text-zinc-500 group-hover/row:text-zinc-300 transition-colors">
             View Repository →
          </a>
        </div>
      </div>

    </section>
  );
};

export default Projects;