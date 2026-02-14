import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy border-t border-white/5 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#" className="flex flex-col group mb-6">
              <span className="text-2xl font-serif font-bold text-white tracking-tight leading-none">IMAN ARZMAN</span>
              <span className="text-xs font-mono font-bold text-brand-gold tracking-[0.3em] uppercase opacity-80">HR Consultant</span>
            </a>
            <p className="text-brand-text-muted leading-relaxed max-w-sm">
              Helping Malaysian professionals navigate the corporate ladder with brutal honesty and strategic precision. 15 years of HR insider secrets, now yours.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-brand-text-muted">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Bedah Resume</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Mock Interview</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Career Roadmap</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Circle 100 Access</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-brand-text-muted">
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">LinkedIn</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">Instagram</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">TikTok</a></li>
              <li><a href="mailto:hello@imanarzman.com" className="hover:text-brand-gold transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-text-muted">
          <p>&copy; {new Date().getFullYear()} Iman Arzman. All rights reserved.</p>
          <p>Designed for High Performers.</p>
        </div>
      </div>
    </footer>
  );
};