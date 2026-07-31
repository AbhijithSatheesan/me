import React from "react";
import { skills } from "../data/portfolioData";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-24 py-16 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Technical Strengths</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition"
            >
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-slate-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;