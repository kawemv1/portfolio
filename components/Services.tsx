import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="border-b-4 border-primary pb-2">Services</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:bg-dark-card transition-all">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-dark-muted">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
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

export default Services;
