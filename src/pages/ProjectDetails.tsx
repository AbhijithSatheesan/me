import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/portfolioData";

const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project || !project.details) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
        <Link to="/" className="text-cyan-400 hover:underline">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
      <Link to="/#projects" className="text-slate-400 hover:text-cyan-400 transition mb-8 inline-block font-medium">
        &larr; Back to Portfolio
      </Link>

      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">{project.title}</h1>
        </div>
        <p className="text-lg text-cyan-400 font-medium mb-6">{project.role}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <span key={tech} className="text-sm px-3 py-1.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-slate-300 text-lg leading-relaxed">{project.details.overview}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-cyan-400">⚡</span> Core Features
          </h3>
          <ul className="space-y-4">
            {project.details.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-500 mt-1">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center gap-4">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="text-center px-6 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition shadow-lg shadow-cyan-500/20">
              View Live Application ↗
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="text-center px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold border border-slate-700 transition">
              View Source Code (GitHub) →
            </a>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Architecture & Challenges</h2>
        <div className="space-y-8">
          {project.details.challenges.map((challenge, idx) => (
            <div key={idx} className="relative pl-6 border-l-2 border-slate-700">
              <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[7px] top-1.5 ring-4 ring-slate-900"></div>
              <h4 className="text-lg font-bold text-white mb-2">{challenge.title}</h4>
              <p className="text-slate-400 leading-relaxed">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;