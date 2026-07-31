import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/portfolioData";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-24 py-16 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col justify-between p-6 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.slug ? (
                      <Link to={`/projects/${project.slug}`} className="hover:text-cyan-400 transition flex items-center gap-2">
                        {project.title} <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                      </Link>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded bg-slate-700/50 text-cyan-400 font-medium border border-slate-600/40">
                    {project.role}
                  </span>
                </div>

                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">›</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm font-medium">
                  {project.slug && (
                    <Link to={`/projects/${project.slug}`} className="text-cyan-400 hover:text-cyan-300 transition mr-auto">
                      View Deep Dive &rarr;
                    </Link>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition">
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;