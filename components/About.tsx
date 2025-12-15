import React from 'react';
import { Target, Zap, BookOpen, UserCheck, Clock, Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-bg relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="border-b-4 border-primary pb-2">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-dark-muted leading-relaxed">
            <p className="text-lg">
              I'm a <span className="text-white font-semibold">10th-grade student from Astana, Kazakhstan</span>, 
              passionate about turning complex problems into elegant code. My journey began with a curiosity for 
              how things work, which quickly evolved into a full-blown obsession with Full-Stack development and AI.
            </p>
            <p>
              My goal is to become a <span className="text-white font-semibold">Senior AI/ML Engineer in Silicon Valley</span>. 
              I am known for my determination—often coding 24/7—and my ability to learn new frameworks rapidly.
            </p>
            <p>
              Currently, I'm diving deep into <span className="text-primary-light">PyTorch, TensorFlow, and YOLO</span> while 
              preparing for my IELTS examination. I speak English (C1), Russian (Fluent), and Kazakh (Native).
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-dark-card p-4 rounded-lg border border-slate-800">
                <h4 className="text-2xl font-bold text-white mb-1">3+</h4>
                <span className="text-sm">Years Coding</span>
              </div>
              <div className="bg-dark-card p-4 rounded-lg border border-slate-800">
                <h4 className="text-2xl font-bold text-white mb-1">20+</h4>
                <span className="text-sm">Projects Built</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-6 bg-dark-card rounded-xl border border-slate-800 hover:border-primary/50 transition-colors">
              <Target className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-white mb-2">Problem Solver</h3>
              <p className="text-sm text-dark-muted">Tackling complex challenges with innovative solutions.</p>
            </div>
            <div className="p-6 bg-dark-card rounded-xl border border-slate-800 hover:border-primary/50 transition-colors">
              <Zap className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="font-semibold text-white mb-2">Fast Learner</h3>
              <p className="text-sm text-dark-muted">Rapidly adapting to new tech stacks and frameworks.</p>
            </div>
            <div className="p-6 bg-dark-card rounded-xl border border-slate-800 hover:border-primary/50 transition-colors">
              <Clock className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-semibold text-white mb-2">Disciplined</h3>
              <p className="text-sm text-dark-muted">Balancing school, IELTS prep, and development seamlessly.</p>
            </div>
            <div className="p-6 bg-dark-card rounded-xl border border-slate-800 hover:border-primary/50 transition-colors">
              <UserCheck className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="font-semibold text-white mb-2">Client Focused</h3>
              <p className="text-sm text-dark-muted">Delivering solutions that solve real business problems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
