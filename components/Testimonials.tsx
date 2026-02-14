import React from 'react';
import { Testimonial } from '../types';

const GOOGLE_REVIEW_LINK = "https://share.google/0ogIPTcF7tLjXbnKq";

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: "Nur Ain Andie",
    role: "Verified Client",
    company: "Google Review",
    quote: "Highly recommended! He is straightforward, honest, and extremely helpful. He gives clear feedback without sugarcoating, which is exactly what I needed.",
    image: "https://ui-avatars.com/api/?name=Nur+Ain+Andie&background=1a1a1a&color=fff&size=150"
  },
  {
    id: '2',
    name: "fnd yusup",
    role: "Verified Client",
    company: "Google Review",
    quote: "The brutal truth that I longed to receive after being stuck for a while. Highly recommended for those looking to engage a professional who doesn't sugarcoat.",
    image: "https://ui-avatars.com/api/?name=fnd+yusup&background=1a1a1a&color=fff&size=150"
  },
  {
    id: '3',
    name: "Miss PinkY",
    role: "Verified Client",
    company: "Google Review",
    quote: "Received feedback immediately about my resume — truly eye-opening. The way he distinguishes between task-based vs impact-based is very clear & practical.",
    image: "https://ui-avatars.com/api/?name=Miss+PinkY&background=1a1a1a&color=fff&size=150"
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
    <section id="testimonials" className="bg-brand-black text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
             <div className="flex items-center gap-2 mb-4 text-brand-text-muted">
                 <GoogleLogo />
                 <span className="text-sm font-mono uppercase tracking-wider">Verified Reviews</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-serif">Client Success</h2>
          </div>
          <a 
            href={GOOGLE_REVIEW_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-brand-text-muted hover:text-white transition-colors"
          >
            <span className="border-b border-transparent group-hover:border-brand-accent pb-0.5">Read all reviews</span>
            <span>→</span>
          </a>
        </div>

        <div className="border-t border-l border-white/10 grid grid-cols-1 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.id} className="border-r border-b border-white/10 p-10 hover:bg-white/5 transition-all duration-300 flex flex-col group h-full">
              <div className="mb-8 flex-1">
                <div className="flex gap-1 mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                    {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-3 h-3 text-brand-accent fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    ))}
                </div>
                <p className="text-lg font-serif italic text-white/90 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                 <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all border border-white/10" />
                 <div>
                    <h4 className="font-bold text-sm text-white">{t.name}</h4>
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