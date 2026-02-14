import React, { useState, useEffect } from 'react';
import { Button } from './Button';

// Internal component for the animated number
const HeroCounter = () => {
  const [count, setCount] = useState(500);
  
  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2500; // 2.5 seconds
    const startValue = 500;
    const endValue = 589;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease out expo for a premium feel
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(startValue + (endValue - startValue) * ease));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, []);

  return <span className="tabular-nums">{count}+</span>;
};

export const Hero: React.FC = () => {
  const phoneNumber = '601155515608';
  const message = 'Hi IAN, I am interested in your career coaching services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleThreadsFollow = () => {
    // Using the specific URL provided by the user
    window.open('https://www.threads.com/@_imanarzman', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-12 lg:pt-24 bg-brand-navy overflow-hidden">
      {/* Subtle Textural Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#1e293b_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Copy Side */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in order-2 lg:order-1">
            
            <div className="flex flex-col items-start gap-4">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold text-brand-navy text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:scale-105 transition-transform cursor-default">
                    <span className="animate-pulse">🔥</span>
                    Accepting New Clients
                </div>

                {/* Experience Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy-light border border-white/10 rounded-lg">
                  <span className="text-brand-text-muted font-mono text-xs font-bold uppercase tracking-widest">15+ Years HR Experience</span>
                </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-white pt-2">
              Stop Getting Rejected. <br />
              <span className="text-brand-gold italic">Get Hired.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-text-muted max-w-xl leading-relaxed">
              I've spent 15 years inside the interview room making hiring decisions. Now, I'm giving you the <span className="text-white font-semibold">Insider's Playbook</span> to navigate the Malaysian job market and land the salary you deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => window.open('https://forms.gle/jALhB4Aqb1pfVepK8', '_blank')}
                className="px-8 py-4 text-base"
              >
                Book Bedah Resume
              </Button>
              {/* Secondary CTA */}
              <button 
                onClick={handleThreadsFollow}
                className="px-8 py-4 text-base font-bold text-white border-2 border-white/20 rounded-full hover:bg-white hover:text-brand-navy hover:border-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Follow on Threads</span>
              </button>
            </div>
            
            {/* Social Proof - Enhanced per visual inspiration */}
            <div className="flex items-center gap-5 pt-8 border-t border-white/5 mt-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative z-10 transition-transform hover:scale-110 hover:z-20">
                    <img 
                      src={`https://ui-avatars.com/api/?name=Client+${i}&background=${['fbbf24', '1e293b', '94a3b8', 'ffffff'][i-1]}&color=0f172a&rounded=true&bold=true`} 
                      className="w-12 h-12 rounded-full border-2 border-brand-navy shadow-lg"
                      alt="Success Client"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center">
                 <div className="flex items-center gap-1">
                    <span className="text-white font-bold text-lg"><HeroCounter /></span>
                    <span className="text-brand-gold text-xs font-mono uppercase tracking-wide">Professionals</span>
                 </div>
                 <p className="text-brand-text-muted text-xs leading-none">secured jobs this year.</p>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 flex flex-col items-center lg:items-end">
            <div className="relative w-56 h-56 md:w-80 md:h-80 mx-auto lg:mr-0 group mb-12">
              
              {/* Gold Glow Background */}
              <div className="absolute inset-0 bg-brand-gold rounded-full blur-[80px] opacity-20 animate-pulse"></div>

              {/* Circular Image Container */}
              <div className="relative w-full h-full rounded-full border-4 border-brand-gold shadow-[0_0_50px_rgba(251,191,36,0.3)] overflow-hidden z-10 bg-brand-navy-light ring-4 ring-brand-gold/20">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQFnW4OcIEFSWA/profile-displayphoto-scale_200_200/B56ZxEnovhHAAY-/0/1770677768720?e=2147483647&v=beta&t=0EmkUpW2JiA6XyRD4KmvRUzJtK46B7NxmdoD3Uj_Et4"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  alt="Iman Arzman - Professional Consultant"
                />
                
                {/* Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent opacity-60"></div>
              </div>
              
              {/* DM SEKARANG Banner */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] z-20 cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                  <div className="bg-[#25D366] text-white p-3 rounded-xl shadow-2xl border border-white/20 flex flex-col items-center text-center relative overflow-hidden backdrop-blur-sm">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                      
                      <div className="flex items-center gap-2 mb-1 relative z-10">
                        <span className="text-lg font-bold uppercase tracking-tight">DM SEKARANG</span>
                        <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </div>
                      <p className="text-xs font-medium opacity-90 relative z-10">Click to Chat on WhatsApp</p>
                  </div>
              </a>
            </div>

            {/* PHRi Link - Positioned under image */}
            <a 
              href="https://www.credly.com/badges/fb83c073-f009-4140-8651-f6d014d19c54/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-3 bg-brand-navy-light/80 border border-brand-gold/30 px-4 py-2 rounded-full hover:bg-brand-navy-light hover:border-brand-gold transition-all group backdrop-blur-sm"
            >
               <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy text-xs font-bold">✓</div>
               <span className="text-xs font-mono font-bold text-white uppercase tracking-widest group-hover:text-brand-gold transition-colors">PHRi™ Certified</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};