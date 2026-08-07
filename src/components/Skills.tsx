import React from "react";

interface SkillCategory {
  category: string;
  items: string[];
}

const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "React Native", "Tailwind CSS", "Redux"],
  },
  {
    category: "Backend",
    items: ["Django", "PostgreSQL", "Redis", "REST APIs", "WebSockets"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "AWS EC2", "DigitalOcean", "Cloudflare Stream", "Git"],
  },
  {
    category: "Security & Testing",
    items: ["OWASP Top 10", "Kali Linux", "Nmap", "Penetration Testing"],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-24 py-16 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Technical Strengths</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-xl bg-black border-2 border-zinc-800 hover:border-zinc-600 transition shadow-lg shadow-zinc-500/5"
            >
              <h3 className="text-lg font-semibold text-white mb-4 tracking-wide border-b border-zinc-800 pb-2">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-zinc-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
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