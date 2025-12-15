import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text font-sans selection:bg-primary/30 selection:text-white">
      {/* Navbar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark-bg/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 text-xl font-bold font-mono tracking-tighter">
            <Terminal className="text-primary w-6 h-6" />
            <span>KA<span className="text-primary">.dev</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2 text-sm font-medium bg-primary hover:bg-blue-600 text-white rounded-md transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-dark-card border-b border-slate-800 py-4">
            <div className="flex flex-col px-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className="text-slate-300 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        {children}
      </main>

      <footer className="bg-dark-bg py-8 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Kairzhan Ansar. Built with React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
