import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-brand-black border-b border-white/10 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          src="https://photos.fife.usercontent.google.com/pw/AP1GczPTDYe7thZXulxGsKd6jq0VIPFexSPbLlQSLlPoFNutBM0bvi23WB8w=w687-h897-s-no-gm?authuser=0" 
          alt="Iman Arzman Background" 
          className="w-full h-full object-cover opacity-[0.08] grayscale scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-10 py-12">
          <div className="inline-flex items-center gap-3 px-3 py-1 border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-xs font-mono tracking-widest uppercase text-brand-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
            Executive Coaching by Iman Arzman
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.9] text-white tracking-tight">
            Lead with <br />
            <span className="text-brand-accent italic pr-4">Intelligence.</span>
          </h1>
          
          <p className="text-xl text-brand-text-muted max-w-lg leading-relaxed border-l-2 border-brand-accent/30 pl-6">
            Led by Iman Arzman, IAN Intelligence combines elite human strategy with predictive AI to navigate your career through the complexities of the modern workforce.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Button 
              onClick={() => window.open('https://forms.gle/7mHDrHwQKd23AxUg8', '_blank')}
              className="bg-brand-accent text-brand-black hover:bg-white border-0 shadow-[0_0_20px_rgba(212,179,127,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Book Strategy Call
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('ai-coach')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-white/20 hover:border-brand-accent"
            >
              Consult IAN
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-white/5">
            <div>
              <span className="block text-4xl text-white font-serif mb-1">500+</span>
              <span className="text-[10px] font-mono text-brand-text-muted uppercase tracking-widest">Executives Placed</span>
            </div>
            <div>
              <span className="block text-4xl text-white font-serif mb-1">94%</span>
              <span className="text-[10px] font-mono text-brand-text-muted uppercase tracking-widest">Salary Increase</span>
            </div>
          </div>
        </div>

        {/* Hero Visual - Clean & Structured */}
        <div className="hidden lg:block lg:col-span-5 h-[600px] relative">
           <div className="absolute inset-0 border border-white/10 p-3">
              <div className="relative w-full h-full overflow-hidden bg-brand-gray/50 group">
                <img 
                   src="https://photos.fife.usercontent.google.com/pw/AP1GczPTDYe7thZXulxGsKd6jq0VIPFexSPbLlQSLlPoFNutBM0bvi23WB8w=w687-h897-s-no-gm?authuser=0"
                   className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105"
                   alt="Iman Arzman"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent opacity-100 transition-opacity duration-500">
                  <div className="border-l border-brand-accent pl-4">
                    <p className="text-white font-serif text-lg">Iman Arzman</p>
                    <p className="font-mono text-[10px] text-brand-accent uppercase tracking-widest">Founder & Principal Strategist</p>
                  </div>
                </div>
              </div>
           </div>
           
           {/* Decorative Elements */}
           <div className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-white/10 pointer-events-none"></div>
           <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-white/10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};