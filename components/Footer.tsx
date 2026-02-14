import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy border-t border-white/5 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
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
              <li><a href="https://forms.gle/jALhB4Aqb1pfVepK8" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">Bedah Resume</a></li>
              <li><a href="https://cal.com/iman-arzman-gcqwj7/mock-interview-simulation-30-mins" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">Mock Interview</a></li>
              <li><a href="https://cal.com/iman-arzman-gcqwj7/career-strategy-consultation" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">Career Roadmap</a></li>
              <li><a href="https://forms.gle/QyR7csTf13ZRVT4y8" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">Circle 100 Access</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-brand-text-muted">
              <li><a href="https://www.linkedin.com/in/iman-arzman/" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">LinkedIn</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">Instagram</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">TikTok</a></li>
              <li><a href="mailto:imanarzman@gmail.com" className="hover:text-brand-gold transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        {/* Legal & Disclaimer Section */}
        <div className="border-t border-white/5 py-8 grid md:grid-cols-2 gap-8 text-xs text-brand-text-muted leading-relaxed">
          <div>
            <h5 className="text-white font-bold mb-2">Privacy Policy</h5>
            <p>
              We value your privacy and are committed to protecting your personal data. 
              We do not sell, trade, or rent your personal information to others. 
              Any data collected is used solely for the purpose of delivering our coaching services and improving your experience.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-2">Terms of Service</h5>
            <p>
              Disclaimer: Services provided, including "Bedah Resume" and coaching sessions, are for educational and strategic purposes only. 
              While we strive to provide the best possible advice based on industry expertise, 
              <strong> we do not guarantee a job offer, promotion, or specific salary increase.</strong> 
              Outcomes depend on market conditions and individual implementation.
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-text-muted">
          <p>&copy; 2026 Ian Intelligence Enterprise. All Rights Reserved.</p>
          <p>Designed for High Performers.</p>
        </div>
      </div>
    </footer>
  );
};