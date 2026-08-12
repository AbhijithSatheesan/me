import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-24 py-24 border-t border-zinc-900">
      <div className="max-w-2xl mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-medium text-zinc-300 uppercase tracking-widest">
            Available for new opportunities
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-serif text-white mb-6">
          Let's Work Together
        </h2>
        
        <p className="text-zinc-400 text-lg mb-10 leading-relaxed font-light">
          Have a project in mind, need a full-stack engineer, or just want to chat about system architecture? My inbox is always open.
        </p>

        {/* Large Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="mailto:abhijithms7306@gmail.com" 
            className="px-8 py-4 rounded-lg bg-zinc-100 hover:bg-white text-black font-semibold text-sm uppercase tracking-widest transition-colors shadow-md flex items-center justify-center gap-3"
          >
            Send an Email
          </a>
          
          <a 
            href="tel:+917306479177" 
            className="px-8 py-4 rounded-lg bg-[#121214] border border-zinc-800 text-white font-semibold text-sm uppercase tracking-widest hover:border-zinc-500 transition-colors flex items-center justify-center gap-3"
          >
            +91 7306479177
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;