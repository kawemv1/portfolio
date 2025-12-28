import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import whatsappLogo from './whatsapp.svg';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (field: 'name' | 'email' | 'message') => 
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;
    const text = encodeURIComponent(
      `Hi! ${
        name ? `I'm ${name}` : "I'm reaching out"
      }${email ? ` (email: ${email})` : ''}. My message is: ${message || 'I would like to connect.'}`
    );
    const whatsappLink = `https://wa.me/77057727204?text=${text}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-blue-900/10 to-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-dark-card rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col md:flex-row">
          
          <div className="md:w-1/2 p-8 md:p-12 bg-primary-dark text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <h3 className="text-3xl font-bold mb-6 relative z-10">Get in touch</h3>
            <p className="text-blue-100 mb-12 relative z-10">
              I'm open to freelance projects and collaboration. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase tracking-wider">Email</p>
                  <a href="mailto:ansarkairzhan1@gmail.com" className="font-medium hover:text-blue-200 transition-colors">
                    ansarkairzhan1@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                   <p className="text-xs text-blue-200 uppercase tracking-wider">Location</p>
                  <p className="font-medium">Astana, Kazakhstan</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/15 flex items-center justify-center backdrop-blur-sm">
                  <img src={whatsappLogo} alt="WhatsApp" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase tracking-wider">WhatsApp</p>
                  <a
                    href="https://wa.me/77719750625"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-blue-200 transition-colors"
                  >
                    +7 771 975 0625
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4 relative z-10">
               {SOCIAL_LINKS.map((link) => (
                 <a 
                  key={link.platform} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                  aria-label={link.platform}
                 >
                   {link.icon}
                 </a>
               ))}
            </div>
          </div>

          <div className="md:w-1/2 p-8 md:p-12 bg-dark-card">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-500 transition-colors"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange('name')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-500 transition-colors"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange('email')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-500 transition-colors"
                  placeholder="Hello, I'd like to talk about..."
                  value={form.message}
                  onChange={handleChange('message')}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition-all transform hover:scale-[1.02]"
              >
                Send via WhatsApp
              </button>
              <p className="text-xs text-slate-500">
                We’ll open WhatsApp with your message. Prefer Telegram? Mention @beysenly and I’ll reply there too.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
