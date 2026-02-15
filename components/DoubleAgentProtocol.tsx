import React, { useState } from 'react';

export const DoubleAgentProtocol: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    
    const subject = encodeURIComponent("ACCESS REQUEST: Double Agent Protocol");
    const body = encodeURIComponent(`AGENT IDENTIFICATION\n\nName: ${name}\nEmail: ${email}\n\nRequesting early access clearance for The Double Agent Protocol.`);
    
    // Direct notification routing via mailto
    window.location.href = `mailto:imanarzman@gmail.com?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
  };

  return (
    <section className="bg-white text-black py-24 relative overflow-hidden font-mono border-y-[12px] border-black">
       {/* Industrial Grid Background */}
       <div className="absolute inset-0 pointer-events-none" style={{ 
           backgroundImage: 'linear-gradient(#00000010 1px, transparent 1px), linear-gradient(90deg, #00000010 1px, transparent 1px)', 
           backgroundSize: '32px 32px'
       }}></div>
       
       {/* Hazard Stripes */}
       <div className="absolute bottom-0 left-0 right-0 h-6 bg-[repeating-linear-gradient(45deg,#FF0000,#FF0000_20px,#000000_20px,#000000_40px)]"></div>

       <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto bg-white border-4 border-black p-8 md:p-12 shadow-[20px_20px_0px_0px_#000000] relative">
              
              {/* Classified Stamp */}
              <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 border-4 border-[#FF0000] rounded-full flex items-center justify-center -rotate-12 bg-white/95 backdrop-blur-sm z-20 shadow-lg">
                  <div className="text-[#FF0000] font-black text-center uppercase leading-none text-xs md:text-sm border-2 border-[#FF0000] p-2 rounded">
                      Clearance Level 5<br/>Authorized Eyes Only<br/>Doc-88X
                  </div>
              </div>

              {/* Header Section */}
              <div className="border-b-4 border-black pb-8 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div>
                      <div className="inline-block bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] mb-4">
                          System Update //
                      </div>
                      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                          The Double<br/>
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">Agent Protocol</span>
                      </h2>
                  </div>
                  <div className="text-left md:text-right font-bold text-xs uppercase tracking-widest opacity-60">
                      <p>Status: Unreleased</p>
                      <p>Auth: I. Arzman (Eng/HR)</p>
                  </div>
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Left Column: Copy */}
                  <div className="space-y-8">
                      <div className="border-l-8 border-[#FF0000] pl-6 py-1">
                          <h3 className="text-xl md:text-2xl font-bold leading-tight uppercase">
                              Strategic Resource Allocation for Career Transition.
                          </h3>
                          <p className="text-lg md:text-xl font-bold mt-2 text-[#FF0000]">
                              Don't burn the boats. Build a bridge.
                          </p>
                      </div>
                      
                      <p className="text-sm md:text-base font-sans font-medium leading-relaxed text-justify border-b border-black/10 pb-6">
                          The flight manual for mid-career specialists ready to pivot without crashing. Written by a 15-year HR veteran and Aerospace Engineer. Contains classified strategies on salary negotiation, transferable skills mapping, and corporate infiltration (networking).
                      </p>

                      {/* Pricing Block */}
                      <div className="flex items-center gap-6 bg-gray-100 p-4 border border-black/10 rounded-sm">
                           <div className="flex flex-col">
                               <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Standard</span>
                               <span className="text-xl font-bold line-through decoration-[#FF0000] decoration-2 opacity-40">RM59</span>
                           </div>
                           <div className="h-8 w-px bg-black/20"></div>
                           <div className="flex flex-col">
                               <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF0000] animate-pulse">Early Bird Access</span>
                               <span className="text-4xl font-black tracking-tight">RM29</span>
                           </div>
                      </div>
                  </div>

                  {/* Right Column: Form */}
                  <div className="relative">
                      {/* Decorative Tape */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-black/10 rotate-2 z-0"></div>

                      <div className="bg-white border-4 border-black p-6 md:p-8 relative z-10 shadow-[8px_8px_0px_0px_#FF0000]">
                          {!submitted ? (
                              <form onSubmit={handleSubmit} className="space-y-5">
                                  <div>
                                      <label className="block text-xs font-black uppercase mb-1 tracking-widest flex justify-between">
                                          <span>Agent Identity</span>
                                          <span className="text-[#FF0000]">*REQ</span>
                                      </label>
                                      <input 
                                        type="text" 
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-[#f4f4f5] border-2 border-black p-3 font-bold focus:outline-none focus:border-[#FF0000] focus:bg-white transition-all uppercase placeholder-gray-400"
                                        placeholder="Surname, First Name"
                                      />
                                  </div>
                                  <div>
                                      <label className="block text-xs font-black uppercase mb-1 tracking-widest flex justify-between">
                                          <span>Comms Channel</span>
                                          <span className="text-[#FF0000]">*REQ</span>
                                      </label>
                                      <input 
                                        type="email" 
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-[#f4f4f5] border-2 border-black p-3 font-bold focus:outline-none focus:border-[#FF0000] focus:bg-white transition-all uppercase placeholder-gray-400"
                                        placeholder="secure@email.com"
                                      />
                                  </div>
                                  <button 
                                    type="submit"
                                    className="w-full bg-black text-white font-black uppercase py-4 mt-2 hover:bg-[#FF0000] transition-colors shadow-[4px_4px_0px_0px_#808080] hover:shadow-[4px_4px_0px_0px_#000000] active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 group"
                                  >
                                    <span>Initiate Sequence</span>
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                  </button>
                              </form>
                          ) : (
                              <div className="text-center py-10 flex flex-col items-center">
                                  <div className="w-16 h-16 border-4 border-green-600 rounded-full flex items-center justify-center mb-4 text-green-600">
                                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                  </div>
                                  <h3 className="text-2xl font-black uppercase mb-2 tracking-tight">Clearance Granted</h3>
                                  <p className="text-sm font-medium opacity-80 max-w-[200px] leading-tight">
                                      Briefing details have been encrypted and sent to your comms channel.
                                  </p>
                              </div>
                          )}
                      </div>
                  </div>
              </div>
          </div>
       </div>
    </section>
  );
};