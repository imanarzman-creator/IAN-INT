import React from 'react';
import { Testimonial } from '../types';

const GOOGLE_REVIEW_LINK = "https://share.google/0ogIPTcF7tLjXbnKq";

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: "Danial Hilmie",
    role: "Fresh Graduate (1st Class Hons)",
    company: "Engineering",
    quote: "I was genuinely amazed by the depth of knowledge he brought to the table. He conducted an outstanding resume review session... it was unlike anything I had come across, even in my extensive exploration of other career websites.",
    image: "https://ui-avatars.com/api/?name=Danial+Hilmie&background=fbbf24&color=0f172a&size=150"
  },
  {
    id: '2',
    name: "Mugilen Maniam",
    role: "Head of Integrity & Governance",
    company: "CGC Malaysia",
    quote: "Iman has been instrumental in strengthening our Performance and Rewards framework. His work not only enhanced clarity and transparency... but also aligned KPIs more effectively with organizational goals.",
    image: "https://ui-avatars.com/api/?name=Mugilen+Maniam&background=fbbf24&color=0f172a&size=150"
  },
  {
    id: '3',
    name: "Thiam Chun Ong",
    role: "Sales & Operation Manager",
    company: "Utama Turbine Services",
    quote: "Iman is a proactive and self-motivated personnel, regardless of the challenges he is facing. Always with cheerful charisma, he is a true team player who brings positive energy to any group activity.",
    image: "https://ui-avatars.com/api/?name=Thiam+Chun+Ong&background=fbbf24&color=0f172a&size=150"
  }
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-brand-navy border-b border-white/5 scroll-mt-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -left-20 top-40 w-64 h-64 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
          
          {/* Left: Title & Badge */}
          <div>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold text-xs font-mono uppercase tracking-widest mb-6">
                 <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                 Proven Results
             </div>
             <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
               Don't just take <br/>
               <span className="text-brand-text-muted italic">my word for it.</span>
             </h2>
          </div>

          {/* Right: Social Proof Stats */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex items-center gap-4 bg-brand-navy-light/50 border border-white/5 p-2 pr-6 rounded-full backdrop-blur-sm">
                <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`w-12 h-12 rounded-full border-2 border-brand-navy overflow-hidden bg-brand-navy`}>
                        <img 
                          src={`https://ui-avatars.com/api/?name=Client+${i}&background=random&color=fff`} 
                          className="w-full h-full object-cover opacity-80"
                          alt={`Client ${i}`}
                        />
                      </div>
                    ))}
                </div>
                <div className="flex flex-col">
                    <span className="text-white font-bold text-lg leading-none">500+</span>
                    <span className="text-brand-text-muted text-[10px] uppercase tracking-wider">Professionals Hired</span>
                </div>
            </div>
            
             <a 
              href={GOOGLE_REVIEW_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-text-muted hover:text-white transition-colors group"
            >
              <GoogleLogo />
              <span className="text-sm font-mono uppercase tracking-widest">Read verified reviews</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={t.id} className="group relative bg-[#0f1218] rounded-2xl p-8 border border-white/5 hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-lg">
              
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-brand-gold/10 text-6xl font-serif font-bold group-hover:text-brand-gold/20 transition-colors">"</div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => (
                   <svg key={i} className="w-4 h-4 text-brand-gold fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-brand-text-muted text-base leading-relaxed font-light mb-8 group-hover:text-white transition-colors relative z-10">
                {t.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-auto">
                 <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full border border-white/10 group-hover:border-brand-gold transition-colors" />
                 <div>
                    <h4 className="font-bold text-white text-sm">{t.name}</h4>
                    <p className="text-[10px] text-brand-text-muted font-mono uppercase tracking-wider">{t.company}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};