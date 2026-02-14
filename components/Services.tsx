import React, { useState } from 'react';
import { Button } from './Button';

export const Services: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  const links = {
    bedahResume: 'https://forms.gle/jALhB4Aqb1pfVepK8',
    mockInterview: 'https://cal.com/iman-arzman-gcqwj7/mock-interview-simulation-30-mins',
    careerRoadmap: 'https://cal.com/iman-arzman-gcqwj7/career-strategy-consultation',
    circle100: 'https://forms.gle/RxPkqW3YE8h74RYr9' 
  };

  const openLink = (url: string) => window.open(url, '_blank');

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call for waitlist
    setTimeout(() => {
      setIsSubmitting(false);
      setIsJoined(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section id="services" className="bg-brand-navy py-24 border-b border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-mono text-brand-gold uppercase tracking-[0.3em] mb-4">The Ecosystem</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Master the Game of Employment</h3>
          <p className="text-brand-text-muted text-lg">
            Whether you need a tactical fix, a strategic overhaul, or a community of winners. Choose your weapon.
          </p>
        </div>

        {/* HIGH END 1-on-1 SERVICES GRID */}
        <div className="mb-8">
            <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                Premium 1-on-1 Consultation
            </h4>
            <div className="grid lg:grid-cols-3 gap-6">
            
                {/* 1. Bedah Resume */}
                <div className="bg-brand-navy-light p-8 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-all group flex flex-col">
                    <div className="mb-6">
                        <span className="text-3xl">📄</span>
                        <h5 className="text-xl font-serif font-bold text-white mt-4">Bedah Resume</h5>
                        <p className="text-xs font-mono text-brand-gold mt-1 uppercase tracking-wider">The Foundation</p>
                    </div>
                    <p className="text-brand-text-muted text-sm leading-relaxed mb-8 flex-1">
                        A surgical review of your resume. We identify gaps, optimize for ATS systems, and rewrite your narrative to hook recruiters in 6 seconds.
                    </p>
                    <div className="pt-6 border-t border-white/5">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-white font-bold">RM 450</span>
                            <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-white/60">Per Session</span>
                        </div>
                        <Button variant="outline" fullWidth onClick={() => openLink(links.bedahResume)} className="text-xs">Book Review</Button>
                    </div>
                </div>

                {/* 2. Mock Interview (New) */}
                <div className="bg-brand-navy-light p-8 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-all group flex flex-col relative overflow-hidden">
                    <div className="mb-6 relative z-10">
                        <span className="text-3xl">🎙️</span>
                        <h5 className="text-xl font-serif font-bold text-white mt-4">Mock Interview</h5>
                        <p className="text-xs font-mono text-brand-gold mt-1 uppercase tracking-wider">The Simulation</p>
                    </div>
                    <p className="text-brand-text-muted text-sm leading-relaxed mb-8 flex-1">
                        Step into the "War Room". A high-pressure simulation of your upcoming interview. We refine your body language, tone, and strategic answers.
                    </p>
                    <div className="pt-6 border-t border-white/5 relative z-10">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-white font-bold">RM 350</span>
                            <span className="text-[10px] bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-1 rounded font-bold uppercase tracking-wide animate-pulse">High Demand</span>
                        </div>
                        <Button variant="outline" fullWidth onClick={() => openLink(links.mockInterview)} className="text-xs">Enter War Room</Button>
                    </div>
                </div>

                {/* 3. Career Roadmap (New) */}
                <div className="bg-brand-navy-light p-8 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-all group flex flex-col">
                    <div className="mb-6">
                        <span className="text-3xl">🗺️</span>
                        <h5 className="text-xl font-serif font-bold text-white mt-4">Career Roadmap</h5>
                        <p className="text-xs font-mono text-brand-gold mt-1 uppercase tracking-wider">The Long Game</p>
                    </div>
                    <p className="text-brand-text-muted text-sm leading-relaxed mb-8 flex-1">
                        Stop guessing. We build a 3-5 year execution plan for your promotion, salary negotiation, and industry pivot. Includes salary benchmarking.
                    </p>
                    <div className="pt-6 border-t border-white/5">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-white font-bold">RM 550</span>
                            <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-white/60">Comprehensive</span>
                        </div>
                        <Button variant="outline" fullWidth onClick={() => openLink(links.careerRoadmap)} className="text-xs">Build Roadmap</Button>
                    </div>
                </div>
            </div>
        </div>

        {/* CIRCLE 100 - THE NO BRAINER OFFER */}
        <div className="grid lg:grid-cols-12 gap-8 mb-8">
            <div className="lg:col-span-8">
                <div className="bg-gradient-to-br from-brand-gold/10 to-brand-navy border border-brand-gold/50 rounded-2xl p-8 md:p-12 relative overflow-hidden group shadow-[0_0_50px_rgba(251,191,36,0.1)]">
                    {/* Background Glint */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold blur-[100px] opacity-20 pointer-events-none"></div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-brand-gold text-brand-navy text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-sm">Best Value</span>
                                <span className="text-red-400 text-[10px] font-bold uppercase tracking-[0.2em] animate-pulse">87% Spots Taken</span>
                            </div>
                            <h4 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                                Circle 100 <span className="text-brand-gold font-light italic">Access</span>
                            </h4>
                            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                                Can't commit to 1-on-1 yet? Get the <strong>blueprint for all three</strong>. Join the inner circle and access the methodologies for Resume, Interview, and Career Strategy in one place.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-xs font-mono text-brand-gold/90 mb-8">
                                <li className="flex items-center gap-2">✓ Resume Structures</li>
                                <li className="flex items-center gap-2">✓ Interview Scripts</li>
                                <li className="flex items-center gap-2">✓ Roadmap Templates</li>
                                <li className="flex items-center gap-2">✓ Weekly Group Q&A</li>
                            </ul>
                            <div className="flex items-center gap-4">
                                <Button onClick={() => openLink(links.circle100)} className="shadow-brand-gold/20 shadow-lg px-8">
                                    Join Now • RM 59
                                </Button>
                                <span className="text-xs text-brand-text-muted">for 30 days access</span>
                            </div>
                        </div>
                        
                        {/* Visual for Bundle */}
                        <div className="w-full md:w-1/3 bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                            <p className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Total Value RM 1350+</p>
                            <div className="text-4xl font-bold text-white mb-1">RM 59</div>
                            <div className="text-xs text-brand-gold mb-4">Limited Time Offer</div>
                            <div className="space-y-2 text-left">
                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-red-500 w-[87%]"></div>
                                </div>
                                <p className="text-[9px] text-right text-white/50">Batch closing soon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* EBOOK - LEAD GEN */}
            <div className="lg:col-span-4">
                <div id="ebook" className="bg-brand-navy-light h-full p-8 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-all flex flex-col justify-center relative overflow-hidden">
                    <div className="relative z-10">
                        <span className="text-4xl mb-6 block">📖</span>
                        <h4 className="text-2xl font-serif font-bold text-white mb-2">"JANGAN MINTA KERJA"</h4>
                        <p className="text-brand-text-muted text-xs leading-relaxed mb-6">
                            The upcoming manifesto on becoming "hunted" by recruiters. The strategies that didn't make it to the blog.
                        </p>
                        
                        {isJoined ? (
                            <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg text-center animate-fade-in">
                                <p className="text-green-400 font-bold text-sm mb-1">You're on the list!</p>
                                <p className="text-green-400/70 text-[10px]">Watch your inbox for exclusive previews.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleWaitlistSubmit} className="space-y-3">
                                <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full bg-brand-navy border border-white/10 p-3 rounded-lg text-xs text-white focus:border-brand-gold outline-none transition-colors placeholder:text-white/20" 
                                />
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full bg-white text-brand-navy font-bold py-3 rounded-lg hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 text-xs uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                                </button>
                            </form>
                        )}
                        
                        <p className="text-[10px] text-brand-text-muted mt-6 italic text-center opacity-50">Expected Launch: March 2026</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};