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
    // Points to Career Strategy Consultation on Cal.com
    window.open('https://cal.com/iman-arzman-gcqwj7/career-strategy-consultation', '_blank');
    setMobileMenuOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Calculate offset to account for fixed header (approx 100px)
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: 'Strategy', href: '#services' },
    { name: 'Ask IAN', href: '#ai-coach' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-brand-navy/95 backdrop-blur-md border-white/10 py-4 shadow-lg' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex flex-col group cursor-pointer"
          >
            <span className="text-xl font-serif font-bold text-white tracking-tight leading-none">IMAN ARZMAN</span>
            <span className="text-[10px] font-mono font-bold text-brand-gold tracking-[0.3em] uppercase opacity-80">HR Consultant</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[11px] font-bold text-white/70 hover:text-brand-gold transition-colors tracking-widest uppercase font-sans cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-brand-gold text-brand-navy px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white" 
              onClick={handleStrategyCall}
            >
              Book Strategy Call
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2 hover:text-brand-gold transition-colors z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
        className={`fixed inset-0 bg-brand-navy z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center gap-8 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            onClick={(e) => scrollToSection(e, link.href)} 
            className="text-2xl font-serif text-white hover:text-brand-gold transition-colors cursor-pointer"
          >
            {link.name}
          </a>
        ))}
        <Button onClick={handleStrategyCall} className="min-w-[200px] bg-brand-gold text-brand-navy font-bold">Book Strategy Call</Button>
      </div>
    </>
  );
};