import React, { useState } from 'react';

export const BookLeadMagnet: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Direct to email via mailto
    const subject = encodeURIComponent("Book Waitlist: JANGAN MINTA KERJA");
    const body = encodeURIComponent(`Hi Iman,\n\nI'm interested in your upcoming book 'JANGAN MINTA KERJA'. Please add me to the waitlist and secure my 20% launch discount.\n\nMy Email: ${email}`);
    
    // Use window.location to trigger the mailto link
    window.location.href = `mailto:imanarzman@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset state to show confirmation UI
    setIsLoading(false);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#1e293b] to-[#0f172a] relative overflow-hidden border-y border-white/5">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Copy & Form */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] font-bold uppercase tracking-widest border border-brand-gold/20">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                Pre-Launch Access
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Stop Begging for a Job. <br/>
                <span className="text-brand-gold">Start Selling Your Value.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-brand-text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
                Coming Soon: <span className="text-white font-semibold italic">JANGAN MINTA KERJA</span> — The ultimate guide by an HR Veteran with 15+ years of experience.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm max-w-lg mx-auto lg:mx-0">
               {submitted ? (
                 <div className="text-center py-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 animate-bounce">
                      🎉
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Redirecting...</h4>
                    <p className="text-brand-text-muted">Opening your email client to send the registration.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-4 text-xs text-brand-gold underline hover:text-white transition-colors">Register another email</button>
                 </div>
               ) : (
                 <>
                  <h3 className="text-xl font-bold text-white mb-4">Get Chapter 1 for FREE</h3>
                  
                  {/* Discount Banner */}
                  <div className="bg-brand-gold/10 border border-brand-gold/20 p-4 rounded-lg mb-6 text-left">
                     <div className="flex items-start gap-3">
                       <span className="text-lg mt-0.5">🎟️</span>
                       <div>
                          <p className="text-brand-gold font-bold text-sm">Waitlist Special Offer</p>
                          <p className="text-brand-text-muted text-xs leading-relaxed mt-1">
                            Sign up now to secure a <span className="text-white font-bold">20% Launch Discount</span> when the book goes live.
                          </p>
                       </div>
                     </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input 
                      type="email" 
                      placeholder="Your Email Address" 
                      className="bg-brand-navy border border-white/20 px-5 py-4 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-brand-gold transition-colors w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="bg-brand-gold text-brand-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-all shadow-lg hover:shadow-brand-gold/20 flex items-center justify-center gap-2"
                    >
                      {isLoading ? 'Processing...' : 'Get Chapter 1 Free'}
                    </button>
                    <p className="text-[10px] text-center text-brand-text-muted opacity-60">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                 </>
               )}
            </div>
          </div>

          {/* Right Column: CSS 3D Book */}
          <div className="lg:w-1/2 flex justify-center items-center py-10 perspective-[2000px]">
            {/* Book Container with Rotation */}
            <div className="relative w-[300px] md:w-[360px] aspect-[2/3] transform-style-3d hover:rotate-y-[-10deg] hover:rotate-x-[5deg] transition-transform duration-500 rotate-y-[-25deg] rotate-x-[10deg] shadow-2xl group cursor-pointer">
              
              {/* Front Cover */}
              <div className="absolute inset-0 bg-[#0f172a] border-2 border-brand-gold/20 rounded-r-md flex flex-col justify-between p-8 text-center shadow-inner backface-hidden z-20 overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                 {/* Texture Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-brand-gold/10 pointer-events-none"></div>
                 
                 <div className="relative z-10">
                    <div className="text-brand-gold text-xs font-mono uppercase tracking-[0.3em] mb-8 border-b border-brand-gold/30 pb-4 inline-block">
                      The HR Manifesto
                    </div>
                    <h1 className="text-5xl font-serif font-bold text-white leading-[0.9] mb-2 drop-shadow-lg">
                      JANGAN<br/>MINTA<br/><span className="text-brand-gold">KERJA</span>
                    </h1>
                 </div>

                 <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full border-2 border-brand-gold mx-auto mb-4 overflow-hidden">
                       <img src="https://media.licdn.com/dms/image/v2/D5603AQFnW4OcIEFSWA/profile-displayphoto-scale_200_200/B56ZxEnovhHAAY-/0/1770677768720?e=2147483647&v=beta&t=0EmkUpW2JiA6XyRD4KmvRUzJtK46B7NxmdoD3Uj_Et4" className="w-full h-full object-cover opacity-80" alt="Author" />
                    </div>
                    <p className="text-white font-bold text-lg tracking-widest uppercase text-sm">Iman Arzman</p>
                    <p className="text-brand-text-muted text-[10px] uppercase tracking-wider">Senior HR Strategist</p>
                 </div>

                 {/* Shine Effect */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>

              {/* Spine */}
              <div className="absolute top-0 bottom-0 left-0 w-[50px] bg-brand-navy-light border-l border-white/10 origin-left rotate-y-90 flex items-center justify-center">
                 <span className="text-brand-gold font-bold text-sm tracking-widest uppercase rotate-90 whitespace-nowrap opacity-80">JANGAN MINTA KERJA</span>
              </div>

              {/* Pages (Thickness) */}
              <div className="absolute top-1 bottom-1 right-2 w-[40px] bg-white rounded-r-sm origin-right translate-z-[-2px] translate-x-[-2px] rotate-y-90 bg-[linear-gradient(90deg,#fff_90%,#ccc_100%)]"></div>
              <div className="absolute top-0 bottom-0 w-[295px] h-full bg-[#0f172a] transform translate-z-[-50px] rounded-l-md shadow-2xl"></div>

              {/* Shadow underneath */}
              <div className="absolute -bottom-10 left-10 right-10 h-10 bg-black/50 blur-xl rounded-[100%] transform rotate-x-[60deg] translate-y-[20px] -z-10"></div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .perspective-[2000px] { perspective: 2000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-[-25deg] { transform: rotateY(-25deg); }
        .rotate-x-[10deg] { transform: rotateX(10deg); }
        .rotate-y-90 { transform: rotateY(-90deg); }
        .translate-z-[-50px] { transform: translateZ(-50px); }
      `}</style>
    </section>
  );
};