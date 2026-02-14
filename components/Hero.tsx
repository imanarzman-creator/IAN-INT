import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-12 lg:pt-24 bg-brand-navy overflow-hidden">
      {/* Subtle Textural Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#1e293b_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Copy Side */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-lg">
              <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest">15+ Years HR Experience • PHRi Certified</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-white">
              Stop Getting Rejected. <br />
              <span className="text-brand-gold italic">Get Hired.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-text-muted max-w-xl leading-relaxed">
              I've spent 15 years inside the interview room making hiring decisions. Now, I'm giving you the <span className="text-white font-semibold">Insider's Playbook</span> to navigate the Malaysian job market and land the salary you deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => window.open('https://forms.gle/7mHDrHwQKd23AxUg8', '_blank')}
                className="px-8 py-4 text-base"
              >
                Book Bedah Resume
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('ebook')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 text-base"
              >
                Join E-Book Waitlist
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-8 border-t border-white/5 mt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://ui-avatars.com/api/?name=User+${i}&background=random&color=fff`} 
                    className="w-10 h-10 rounded-full border-2 border-brand-navy"
                    alt="Success Client"
                  />
                ))}
              </div>
              <p className="text-sm text-brand-text-muted">
                Join <span className="text-white font-bold">500+ professionals</span> who secured jobs this year.
              </p>
            </div>
          </div>

          {/* Visual Side */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-3/4 lg:w-full mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              {/* 
                  TODO: Replace the src below with your actual LinkedIn Profile Picture URL.
                  Currently using a branded Monogram as a fallback.
              */}
              <img 
                src="https://ui-avatars.com/api/?name=Iman+Arzman&background=1e293b&color=fbbf24&size=800&font-size=0.3&bold=true&length=2"
                className="w-full h-full object-cover transition-all duration-700"
                alt="Iman Arzman - Senior HR Consultant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80 lg:opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-brand-navy-light/90 backdrop-blur-md border-l-4 border-brand-gold rounded-r-lg">
                <p className="font-serif text-xl text-white font-bold">Iman Arzman</p>
                <p className="text-brand-gold text-[10px] font-mono uppercase tracking-widest mt-1">Senior HR Consultant | PHRi</p>
              </div>
            </div>
            {/* Decorative Gold Elements - Hidden on small mobile to reduce clutter */}
            <div className="hidden md:block absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-brand-gold/30 rounded-tr-2xl"></div>
            <div className="hidden md:block absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-brand-gold/30 rounded-bl-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};