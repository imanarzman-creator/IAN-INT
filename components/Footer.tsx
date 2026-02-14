import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
                <span className="text-2xl font-serif font-bold text-white tracking-tight">IAN</span>
                <span className="text-2xl font-sans font-light text-white/50 tracking-tight">INTELLIGENCE</span>
            </div>
            <p className="text-brand-text-muted max-w-sm mb-8 leading-relaxed">
              Redefining executive career strategy through the synthesis of human expertise and predictive artificial intelligence.
            </p>
            <div className="flex gap-4">
               <a 
                 href="https://www.linkedin.com/in/iman-arzman/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-accent hover:text-black transition-all"
                 aria-label="LinkedIn"
               >
                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs font-mono">Platform</h4>
            <ul className="space-y-4 text-sm text-brand-text-muted">
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Methodology</a></li>
              <li><a href="#ai-coach" className="hover:text-brand-accent transition-colors">AI Advisor</a></li>
              <li><a href="#testimonials" className="hover:text-brand-accent transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs font-mono">Legal</h4>
            <ul className="space-y-4 text-sm text-brand-text-muted">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-text-muted font-mono">
          <p>© {new Date().getFullYear()} IAN Intelligence. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Powered by Google Gemini 2.0</p>
        </div>
      </div>
    </footer>
  );
};