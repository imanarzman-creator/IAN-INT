import React from 'react';
import { Button } from './Button';

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
                {/* Status Badge - Moved Upfront */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold text-brand-navy text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:scale-105 transition-transform cursor-default">
                    <span className="animate-pulse">🔥</span>
                    Accepting New Clients
                </div>

                {/* Credentials */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy-light border border-white/10 rounded-lg">
                  <span className="text-brand-text-muted font-mono text-xs font-bold uppercase tracking-widest">15+ Years HR Experience • PHRi Certified</span>
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
            
            <div className="flex items-center gap-6 pt-8 border-t border-white/5 mt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://ui-avatars.com/api/?name=Client+${i}&background=random&color=fff`} 
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
          <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-56 h-56 md:w-80 md:h-80 mx-auto group">
              
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
                      {/* Shine effect - removed undefined animation */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <div className="flex items-center gap-2 mb-1 relative z-10">
                        <span className="text-lg font-bold uppercase tracking-tight">DM SEKARANG</span>
                        <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </div>
                      <p className="text-xs font-medium opacity-90 relative z-10">Click to Chat on WhatsApp</p>
                  </div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
