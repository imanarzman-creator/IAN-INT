import React from 'react';
import { Button } from './Button';

export const CorporateTraining: React.FC = () => {
  return (
    <section className="py-20 bg-brand-navy border-t border-white/10 relative">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-brand-navy-light to-[#162032] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          
          {/* Background Decorative Element */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-brand-gold/30 rounded-full bg-brand-gold/5 text-brand-gold text-[10px] font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                For Organizations
              </div>
              
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                Corporate Training <br/>& Speaking
              </h2>
              
              <p className="text-brand-text-muted text-lg mb-8 leading-relaxed max-w-md">
                HR Strategy & Data Analytics Workshops by a TTT Certified Practitioner. Equip your leaders with engineering-grade people management skills.
              </p>
              
              <Button 
                onClick={() => window.location.href = 'mailto:iman.arzman@gmail.com'}
                variant="outline"
                className="bg-white/5 border-white/20 hover:bg-white hover:text-brand-navy px-8 py-4"
              >
                Request a Proposal
              </Button>
            </div>

            {/* Right List */}
            <div className="bg-[#0f1218]/80 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
               <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6 text-opacity-50">Signature Workshops</h3>
               <ul className="space-y-6">
                 {[
                   { title: "Total Rewards Frameworks", desc: "Structuring salary & benefits for retention." },
                   { title: "Data-Driven Performance Management", desc: "Moving beyond subjective KPIs." },
                   { title: "Hiring Precision for Managers", desc: "Interview techniques that predict success." }
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-start gap-4 group">
                     <div className="w-8 h-8 rounded-full bg-brand-navy border border-white/10 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300 mt-1">
                        {idx + 1}
                     </div>
                     <div>
                        <h4 className="text-white font-bold text-lg group-hover:text-brand-gold transition-colors">{item.title}</h4>
                        <p className="text-brand-text-muted text-sm mt-1">{item.desc}</p>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};