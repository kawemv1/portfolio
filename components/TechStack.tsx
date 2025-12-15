import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="border-b-4 border-primary pb-2">Tech Stack</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, index) => (
            <div 
              key={index} 
              className="bg-dark-card rounded-xl p-6 border border-slate-800 hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-blue-900/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-800 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
