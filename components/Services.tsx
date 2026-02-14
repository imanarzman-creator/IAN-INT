import React, { useState } from 'react';
import { Button } from './Button';

export const Services: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  // Links
  const links = {
    bedahResume: 'https://forms.gle/jALhB4Aqb1pfVepK8',
    mockInterview: 'https://cal.com/iman-arzman-gcqwj7/mock-interview-simulation-30-mins',
    careerRoadmap: 'https://cal.com/iman-arzman-gcqwj7/career-strategy-consultation',
    b2bConsult: 'mailto:imanarzman@gmail.com?subject=Corporate%20Consultancy%20Inquiry',
    circle100: 'https://forms.gle/QyR7csTf13ZRVT4y8'
  };

  const openLink = (url: string) => window.open(url, '_blank');

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setIsJoined(true); setEmail(''); }, 1500);
  };

  return (
    <section id="services" className="bg-brand-navy py-24 border-b border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-sm font-mono text-brand-gold uppercase tracking-[0.3em] mb-4">The Ecosystem</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Master the Game of Employment</h3>
          <p className="text-brand-text-muted text-lg max-w-2xl mx-auto">
            Whether you are an individual climbing the ladder or an organization building a winning culture.
          </p>
        </div>

        {/* --- PART 1: INDIVIDUAL SERVICES (B2C) --- */}
        <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
                <h4 className="text-white font-bold text-2xl font-serif">For Individuals</h4>
                <div className="h-px bg-white/10 flex-1"></div>
            </div>

            {/* Service Grid */}
            <div className="grid lg:grid-cols-3 gap-6 mb-12">
                {/* 1. Bedah Resume */}
                <div className="bg-brand-navy-light p-8 rounded-2xl border border-white/5 hover:border-brand-gold/50 transition-all group flex flex-col hover:-translate-y-1 duration-300">
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">📄</div>
                    <h5 className="text-xl font-bold text-white mb-2">Bedah Resume</h5>
                    <p className="text-xs font-mono text-brand-gold uppercase tracking-wider mb-4">The Foundation</p>
                    <p className="text-brand-text-muted text-sm leading-relaxed mb-8 flex-1">
                        Surgical review of your CV. We optimize for ATS, narrative flow, and recruiter psychology. 
                        <br/><span className="italic opacity-60">Result: More interview callbacks.</span>
                    </p>
                    <div className="pt-6 border-t border-white/5">
                        <div className="flex flex-col mb-4">
                            <span className="text-brand-text-muted line-through text-sm">RM 450</span>
                            <span className="text-brand-gold font-bold text-3xl">RM 59 <span className="text-xs text-white/50 font-normal ml-1 align-middle">PROMO</span></span>
                        </div>
                        <Button variant="outline" fullWidth onClick={() => openLink(links.bedahResume)}>Book Session</Button>
                    </div>
                </div>

                {/* 2. Mock Interview */}
                <div className="bg-brand-navy-light p-8 rounded-2xl border border-brand-gold/20 relative overflow-hidden group flex flex-col hover:-translate-y-1 duration-300 shadow-[0_0_30px_rgba(251,191,36,0.05)]">
                    <div className="absolute top-0 right-0 bg-brand-gold text-brand-navy text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-widest">Most Popular</div>
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">🎙️</div>
                    <h5 className="text-xl font-bold text-white mb-2">Mock Interview</h5>
                    <p className="text-xs font-mono text-brand-gold uppercase tracking-wider mb-4">The Simulation</p>
                    <p className="text-brand-text-muted text-sm leading-relaxed mb-8 flex-1">
                        High-pressure simulation of your upcoming interview. Refine your answers, tone, and body language.
                        <br/><span className="italic opacity-60">Result: Confidence & Offer Letters.</span>
                    </p>
                    <div className="pt-6 border-t border-white/5">
                         <div className="flex flex-col mb-4">
                            <span className="text-brand-text-muted line-through text-sm">RM 350</span>
                            <span className="text-brand-gold font-bold text-3xl">RM 49 <span className="text-xs text-white/50 font-normal ml-1 align-middle">PROMO</span></span>
                        </div>
                        <Button variant="primary" fullWidth onClick={() => openLink(links.mockInterview)}>Enter War Room</Button>
                    </div>
                </div>

                {/* 3. Career Roadmap */}
                <div className="bg-brand-navy-light p-8 rounded-2xl border border-white/5 hover:border-brand-gold/50 transition-all group flex flex-col hover:-translate-y-1 duration-300">
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">🗺️</div>
                    <h5 className="text-xl font-bold text-white mb-2">Career Strategy</h5>
                    <p className="text-xs font-mono text-brand-gold uppercase tracking-wider mb-4">The Long Game</p>
                    <p className="text-brand-text-muted text-sm leading-relaxed mb-8 flex-1">
                        3-5 year execution plan. Salary negotiation tactics, industry pivoting, and personal branding.
                        <br/><span className="italic opacity-60">Result: Clarity & Income Growth.</span>
                    </p>
                    <div className="pt-6 border-t border-white/5">
                        <div className="flex flex-col mb-4">
                            <span className="text-brand-text-muted line-through text-sm">RM 550</span>
                            <span className="text-brand-gold font-bold text-3xl">RM 89 <span className="text-xs text-white/50 font-normal ml-1 align-middle">PROMO</span></span>
                        </div>
                        <Button variant="outline" fullWidth onClick={() => openLink(links.careerRoadmap)}>Build Roadmap</Button>
                    </div>
                </div>
            </div>

            {/* Circle 100 & Ebook Layout */}
            <div className="grid lg:grid-cols-2 gap-6">
                 {/* Circle 100 */}
                 <div className="bg-gradient-to-br from-brand-navy-light to-[#162032] border border-white/10 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold blur-[80px] opacity-10"></div>
                    <div>
                        <div className="flex justify-between items-start mb-4">
                             <h5 className="text-2xl font-serif font-bold text-white">Circle 100</h5>
                             <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-1 rounded border border-red-500/20 animate-pulse">FEW SEATS LEFT</span>
                        </div>
                        
                        {/* FOMO Progress Bar */}
                        <div className="mb-4">
                             <div className="w-full bg-brand-navy rounded-full h-2 mb-2 border border-white/5 overflow-hidden">
                                <div className="bg-brand-gold h-full rounded-full animate-[width_1s_ease-out]" style={{width: '89%'}}></div>
                             </div>
                             <div className="flex justify-between items-end">
                                <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider animate-pulse">Seats Limited!</span>
                                <span className="text-[10px] text-brand-gold font-mono uppercase tracking-wider text-right">89% Slots Occupied</span>
                             </div>
                        </div>

                        <p className="text-brand-text-muted text-sm mb-6">
                            Exclusive community access. Weekly Q&A, templates vault, and peer networking. The most affordable way to get continuous mentorship.
                        </p>
                    </div>
                    
                    {/* Reverted to Button */}
                    <div className="mt-auto w-full relative z-10 pt-6 border-t border-white/5">
                        <div className="flex flex-col mb-4">
                             <span className="text-brand-text-muted line-through text-sm">RM 1,200</span>
                             <span className="text-brand-gold font-bold text-3xl">RM 59 <span className="text-xs text-white/50 font-normal ml-1 align-middle">LIMITED TIME</span></span>
                        </div>
                        <Button variant="primary" fullWidth onClick={() => openLink(links.circle100)}>
                           Join Now
                        </Button>
                    </div>
                 </div>

                 {/* Ebook */}
                 <div className="bg-brand-navy-light border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
                    <div>
                        <h5 className="text-2xl font-serif font-bold text-white mb-2">"JANGAN MINTA KERJA"</h5>
                        <p className="text-brand-text-muted text-sm mb-6">
                            My upcoming book. The manifesto on becoming "hunted" by recruiters. Join the launch list.
                        </p>
                    </div>
                     {isJoined ? (
                            <div className="bg-green-500/10 border border-green-500/20 p-3 rounded-lg text-center">
                                <p className="text-green-400 font-bold text-sm">You're on the list!</p>
                            </div>
                        ) : (
                            <form onSubmit={handleWaitlistSubmit} className="flex gap-2">
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="flex-1 bg-brand-navy border border-white/10 px-4 rounded-lg text-sm text-white focus:border-brand-gold outline-none" 
                                />
                                <button type="submit" className="bg-white text-brand-navy font-bold px-4 py-3 rounded-lg text-xs hover:bg-brand-gold transition-colors">
                                    {isSubmitting ? '...' : 'NOTIFY ME'}
                                </button>
                            </form>
                        )}
                 </div>
            </div>
        </div>

        {/* --- PART 2: CORPORATE SERVICES (B2B) --- */}
        <div>
            <div className="flex items-center gap-4 mb-10">
                <h4 className="text-white font-bold text-2xl font-serif">For Organizations</h4>
                <div className="h-px bg-white/10 flex-1"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                {/* HR Consultancy */}
                <div className="group relative bg-[#0f172a] border border-white/10 p-8 rounded-2xl hover:bg-[#162032] transition-colors">
                    <h5 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                        <span>🏢</span> HR Consultancy
                    </h5>
                    <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
                        Strategic intervention for SMEs and Startups. Talent acquisition frameworks, performance management systems, and HR policy auditing.
                    </p>
                    <a href={links.b2bConsult} className="text-brand-gold text-sm font-bold uppercase tracking-widest hover:underline flex items-center gap-2">
                        Inquire Services <span>→</span>
                    </a>
                </div>

                {/* Corporate Training */}
                <div className="group relative bg-[#0f172a] border border-white/10 p-8 rounded-2xl hover:bg-[#162032] transition-colors">
                    <h5 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                        <span>🎓</span> Corporate Training
                    </h5>
                    <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
                        TTT Certified workshops. Leadership development, communication mastery, and emotional intelligence for high-performance teams.
                    </p>
                    <a href={links.b2bConsult} className="text-brand-gold text-sm font-bold uppercase tracking-widest hover:underline flex items-center gap-2">
                        Request Training Deck <span>→</span>
                    </a>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};