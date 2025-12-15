import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import myPhoto from './myphoto.jpeg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-dark/30 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-300 text-sm font-mono mb-2">
            🚀 Full-Stack Developer & AI/ML Engineer
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Kairzhan Ansar
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-dark-muted max-w-lg mx-auto md:mx-0">
            16-year-old polyglot developer building intelligent solutions. 
            Specializing in Python, AI/ML, and Automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/20"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button 
              className="px-8 py-3 bg-dark-card border border-slate-700 hover:border-blue-500/50 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 hover:bg-slate-800"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="w-4 h-4" />
              Resume
            </button>
            
             <a 
              href="#contact"
              className="px-8 py-3 bg-dark-card border border-slate-700 hover:border-blue-500/50 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 hover:bg-slate-800"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96 translate-y-6 md:translate-y-10">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 blur-2xl opacity-20 animate-pulse"></div>
            <img 
              src={myPhoto} 
              alt="Kairzhan Ansar" 
              className="rounded-full w-full h-full object-cover border-4 border-slate-800 relative z-10 shadow-2xl"
            />
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-dark-card border border-slate-700 p-3 rounded-xl shadow-xl z-20 animate-bounce delay-700">
              <span className="text-2xl">🤖</span>
            </div>
            <div className="absolute bottom-10 -left-8 bg-dark-card border border-slate-700 p-3 rounded-xl shadow-xl z-20 animate-bounce delay-1000">
              <span className="text-2xl">⚡</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
