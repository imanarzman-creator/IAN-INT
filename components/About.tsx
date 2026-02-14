import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-navy-light relative overflow-hidden border-b border-white/5">
      {/* Background Abstract */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-[120px] opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 md:order-1">
             <div className="absolute -top-10 -left-10 text-[10rem] font-serif text-white opacity-5 font-bold leading-none select-none hidden md:block">
                ENG
             </div>
             <h2 className="text-sm font-mono text-brand-gold uppercase tracking-[0.3em] mb-4 relative z-10">The Methodology</h2>
             <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 relative z-10">
                An Engineer's Approach to <span className="text-brand-text-muted italic">Human Resources.</span>
             </h3>
             <div className="space-y-6 text-brand-text-muted text-lg leading-relaxed relative z-10">
                <p>
                   My career didn't begin in a typical HR office. It started with a degree in <strong className="text-white">Aerospace Engineering</strong>. This background gave me an elite analytical toolkit that separates me from traditional consultants.
                </p>
                <p>
                   In engineering, precision is everything. A margin of error can be catastrophic. I apply this same <strong className="text-white">zero-error mindset</strong> to Human Capital.
                </p>
                <p>
                   Whether I'm designing a compensation framework or dissecting your resume, I don't rely on "gut feeling". I use data, structural logic, and strategic precision to engineer results that are predictable, scalable, and impactful.
                </p>
             </div>
          </div>

          <div className="grid grid-cols-1 gap-6 order-1 md:order-2">
              {[
                  {
                      title: "Aerospace Origins",
                      desc: "Applying the rigour of rocket science to workforce dynamics.",
                      icon: "🚀"
                  },
                  {
                      title: "Data-Backed Precision",
                      desc: "Compensation & Performance systems built on mathematical logic, not guesswork.",
                      icon: "📊"
                  },
                  {
                      title: "Bridging Worlds",
                      desc: "Merging engineering exactness with the empathy required for human relations.",
                      icon: "🤝"
                  }
              ].map((item, i) => (
                  <div key={i} className="bg-brand-navy p-6 rounded-xl border border-white/5 hover:border-brand-gold/30 transition-all duration-300 flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-2xl group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors shrink-0">
                          {item.icon}
                      </div>
                      <div>
                          <h4 className="text-white font-bold mb-2 group-hover:text-brand-gold transition-colors">{item.title}</h4>
                          <p className="text-sm text-brand-text-muted leading-relaxed">{item.desc}</p>
                      </div>
                  </div>
              ))}
          </div>

        </div>
      </div>
    </section>
  );
};