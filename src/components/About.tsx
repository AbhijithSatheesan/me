import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-20">
        
        {/* Left Side: Editorial Hook */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-8">
            02 / Background
          </h2>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-zinc-100 tracking-tight leading-[1.1]">
            I thrive in <i className="text-zinc-500">ambiguity</i>, building zero-to-one systems, and solving novel problems.
          </h3>
        </div>

        {/* Right Side: Startup-Focused Copy */}
        <div className="w-full md:w-1/2 md:pt-16 flex flex-col gap-6 text-zinc-400 text-lg sm:text-xl leading-relaxed font-light">
          <p>
            Based in Kerala, India, I am a full-stack engineer built for fast-moving startups and distributed remote teams. I gravitate toward environments where the work is never repetitive—teams that demand rapid iteration, high autonomy, and a strong bias for action.
          </p>
          <p>
            I don't just write code; I take ownership of the product architecture. Whether I am building a real-time esports streaming engine or designing automated payment pipelines, I treat every project as an opportunity to invent. 
          </p>
          <p>
            I automate the mundane so I can focus on the complex. If you are looking for an engineer who treats code as a craft and wants to help build the next big thing from the ground up, we are going to get along great.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;