import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStrategyCall = () => {
    window.open('https://forms.gle/7mHDrHwQKd23AxUg8', '_blank');
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Methodology', href: '#services' },
    { name: 'AI Coach', href: '#ai-coach' },
    { name: 'Success Stories', href: '#testimonials' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-brand-black/90 backdrop-blur-md border-white/10 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-serif font-bold text-white tracking-tight flex items-center gap-2 group">
            <div className="w-3 h-3 bg-brand-accent rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
            IAN<span className="font-light text-white/50">INTELLIGENCE</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-medium text-white/70 hover:text-brand-accent transition-colors tracking-wide uppercase font-mono"
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="outline" 
              className="px-6 py-2 text-xs uppercase tracking-widest hover:bg-brand-accent hover:text-brand-black" 
              onClick={handleStrategyCall}
            >
              Book Strategy Call
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2 hover:text-brand-accent transition-colors z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className={`h-px bg-current transition-all duration-300 ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`h-px bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-px bg-current transition-all duration-300 ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-2'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-black z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center gap-8 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-2xl font-serif text-white hover:text-brand-accent transition-colors"
          >
            {link.name}
          </a>
        ))}
        <div className="h-px w-12 bg-white/10 my-4"></div>
        <Button onClick={handleStrategyCall} className="min-w-[200px]">Book Strategy Call</Button>
      </div>
    </>
  );
};