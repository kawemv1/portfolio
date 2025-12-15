import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';

const LANGUAGE_DATA = [
  { name: 'Python', value: 55, color: '#3572A5' },
  { name: 'TypeScript', value: 20, color: '#2b7489' },
  { name: 'JavaScript', value: 15, color: '#f1e05a' },
  { name: 'HTML/CSS', value: 10, color: '#e34c26' },
];

const ACTIVITY_DATA = [
  { name: 'Mon', commits: 4 },
  { name: 'Tue', commits: 7 },
  { name: 'Wed', commits: 12 },
  { name: 'Thu', commits: 8 },
  { name: 'Fri', commits: 15 },
  { name: 'Sat', commits: 22 }, // "Coding 24/7" implies high weekend activity
  { name: 'Sun', commits: 18 },
];

const GitHubStats: React.FC = () => {
  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="border-b-4 border-primary pb-2">GitHub Activity</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Language Breakdown */}
          <div className="bg-dark-card p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Most Used Languages</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={LANGUAGE_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {LANGUAGE_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center flex-wrap gap-4 mt-4">
              {LANGUAGE_DATA.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }}></div>
                  <span className="text-sm text-dark-muted">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Graph Simulation */}
          <div className="bg-dark-card p-6 rounded-xl border border-slate-800">
             <h3 className="text-xl font-bold text-white mb-6 text-center">Weekly Contribution Activity</h3>
             <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ACTIVITY_DATA}>
                  <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 12}} />
                  <YAxis stroke="#94a3b8" tick={{fontSize: 12}} />
                  <Tooltip 
                    cursor={{fill: '#334155', opacity: 0.4}}
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="commits" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
             </div>
             <p className="text-center text-sm text-dark-muted mt-4">
                Consistent contributions to Open Source and Personal Projects.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
