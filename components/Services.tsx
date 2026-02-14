import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '01',
    title: "Executive Strategy",
    description: "High-level roadmap planning for C-Suite transitions. We analyze market trends to position your personal brand effectively.",
    price: "RM 1,200",
    icon: "♟️"
  },
  {
    id: '02',
    title: "Resume Optimization",
    description: "Hand-crafted narrative optimization that resonates with human decision-makers, ensuring your story cuts through the noise.",
    price: "RM 450",
    icon: "✍️"
  },
  {
    id: '03',
    title: "Interview Simulation",
    description: "Mock scenarios with real-time feedback on tone, pacing, and content quality, tailored to your target industry.",
    price: "RM 350",
    icon: "🎙️"
  },
  {
    id: '04',
    title: "Negotiation Tactics",
    description: "Data-backed compensation frameworks to ensure you are paid according to your true market value.",
    price: "RM 500",
    icon: "⚖️"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="bg-brand-black border-b border-white/10">
      <div className="container mx-auto px-6 py-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white">The Methodology</h2>
            <p className="text-brand-text-muted text-lg leading-relaxed">
              Precision-engineered services designed to dismantle barriers and accelerate your professional ascent.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end gap-2">
            <span className="text-xs font-mono uppercase text-brand-text-muted tracking-widest">Service Catalog</span>
            <div className="h-px w-32 bg-brand-accent/50"></div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
            
            {/* Featured Promo Block */}
            <div className="md:col-span-2 lg:col-span-2 border-r border-b border-white/10 p-8 md:p-14 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                    <svg width="200" height="200" viewBox="0 0 100 100" className="text-white fill-current">
                        <path d="M50 0 L100 50 L50 100 L0 50 Z" />
                    </svg>
                </div>
                
                <div className="relative z-10 flex flex-col h-full justify-between gap-10">
                    <div>
                        <span className="inline-block px-3 py-1 bg-brand-accent text-brand-black font-bold text-[10px] font-mono tracking-[0.2em] uppercase mb-6">
                            Limited Availability
                        </span>
                        <h3 className="text-3xl md:text-5xl font-serif text-white mb-6">
                            All-Access Membership
                        </h3>
                        <p className="text-brand-text-muted max-w-lg mb-8 text-lg">
                            Gain exclusive 30-day access to our complete suite of executive tools. 
                            Unlock Strategy, Resume Optimization, Interview Prep, and Negotiation tactics.
                        </p>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-mono">
                            <span className="text-brand-accent text-lg">RM 59 / 30 DAYS</span>
                            <span className="w-px h-4 bg-white/20"></span>
                            <span className="line-through text-white/30">RM 2,500 VALUE</span>
                        </div>
                    </div>
                    
                    <button 
                       onClick={() => window.open('https://forms.gle/7mHDrHwQKd23AxUg8', '_blank')}
                       className="w-full sm:w-auto bg-white text-black px-8 py-4 font-medium hover:bg-brand-accent transition-all duration-300 flex items-center justify-between sm:justify-center gap-6 group/btn"
                    >
                       <span className="uppercase tracking-widest text-xs font-bold">Claim Access</span>
                       <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>

            {/* Standard Service Cards */}
            {services.map((service) => (
                <div key={service.id} className="border-r border-b border-white/10 p-10 hover:bg-white/[0.02] transition-colors duration-300 flex flex-col justify-between group min-h-[320px]">
                    <div>
                        <div className="flex justify-between items-start mb-8">
                            <span className="text-4xl opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">{service.icon}</span>
                            <span className="font-mono text-xs text-white/20 group-hover:text-brand-accent transition-colors">{service.id}</span>
                        </div>
                        <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-brand-accent transition-colors">{service.title}</h3>
                        <p className="text-sm text-brand-text-muted leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Investment</span>
                        <span className="font-serif text-lg text-white">{service.price}</span>
                    </div>
                </div>
            ))}

             {/* Quote Filler Block */}
             <div className="hidden lg:flex border-r border-b border-white/10 p-10 items-center justify-center bg-brand-gray/20">
                <blockquote className="text-center">
                   <p className="font-serif text-xl text-white/60 italic mb-4">"The only way to predict the future is to create it."</p>
                   <footer className="text-xs font-mono text-brand-accent uppercase tracking-widest">— Peter Drucker</footer>
                </blockquote>
             </div>
        </div>
      </div>
    </section>
  );
};