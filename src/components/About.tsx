import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24 py-16 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 text-slate-300 leading-relaxed">
          <p>
            I am a full-stack software engineer based in Kerala, India. My technical foundation spans audio-visual systems and event logistics, giving me a real-world perspective on video transport, concurrency, and high-stakes performance execution.
          </p>
          <p>
            Today, I apply that mindset to software development—building esports streaming networks, enterprise school ERPs, and secure web applications. I focus on clean code, proper middleware orchestration, and predictable deployment workflows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;