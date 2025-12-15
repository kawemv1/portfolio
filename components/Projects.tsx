import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="border-b-4 border-primary pb-2">Featured Projects</span>
        </h2>
        <p className="text-center text-dark-muted mb-16 max-w-2xl mx-auto">
          A showcase of my recent work in AI, Automation, and Full-Stack Development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group bg-dark-card rounded-xl overflow-hidden border border-slate-800 hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-800/50 rounded-lg text-primary-light">
                    <Folder className="w-6 h-6" />
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} className="text-dark-muted hover:text-white transition-colors" title="View Source">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} className="text-dark-muted hover:text-white transition-colors" title="Live Demo">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-dark-muted text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {project.status && (
                   <span className="inline-block px-2 py-1 mb-4 text-xs font-semibold text-yellow-500 bg-yellow-900/20 rounded w-fit">
                    🚧 {project.status}
                  </span>
                )}

                <div className="mt-auto pt-4 border-t border-slate-800">
                   <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.slice(0, 4).map((t, i) => (
                      <span key={i} className="text-xs font-mono text-primary-light">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/kawemv1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium transition-colors text-white"
          >
            <Github className="w-5 h-5" />
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
