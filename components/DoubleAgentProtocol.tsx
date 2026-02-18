import React from 'react';

export const DoubleAgentProtocol: React.FC = () => {
  const amazonUrl = "https://a.co/d/08i9aPuT";

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
          <div className="max-w-6xl mx-auto bg-white border-4 border-black p-8 md:p-12 shadow-[20px_20px_0px_0px_#000000] relative">
              
              {/* Classified Stamp */}
              <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 border-4 border-[#FF0000] rounded-full flex items-center justify-center -rotate-12 bg-white/95 backdrop-blur-sm z-20 shadow-lg pointer-events-none">
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
                      <p>Status: Live</p>
                      <p>Platform: Amazon Kindle/Print</p>
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

                      {/* Pricing/Amazon Block */}
                      <div className="flex items-center gap-6 bg-gray-100 p-4 border border-black/10 rounded-sm">
                           <div className="flex flex-col">
                               <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Available On</span>
                               <span className="text-xl font-bold">Amazon</span>
                           </div>
                           <div className="h-8 w-px bg-black/20"></div>
                           <div className="flex flex-col">
                               <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF0000] animate-pulse">Format</span>
                               <span className="text-lg font-black tracking-tight">Kindle & Print</span>
                           </div>
                      </div>

                      <a 
                        href={amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-black text-white font-black uppercase py-4 mt-2 hover:bg-[#FF0000] transition-colors shadow-[4px_4px_0px_0px_#808080] hover:shadow-[4px_4px_0px_0px_#000000] active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 group text-center"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M15.54 11.23c-.15-1.1-1.04-1.72-2.31-1.72-1.58 0-2.58 1.05-2.58 2.68 0 1.54.91 2.53 2.41 2.53 1.25 0 2.14-.64 2.37-1.56h1.99c-.27 1.83-1.89 3.06-4.32 3.06-2.58 0-4.52-1.78-4.52-4.14 0-2.34 2.06-4.22 4.75-4.22 2.39 0 4.14 1.35 4.39 3.37h-2.18zM12 21.6c4.95 0 9.25-2.84 11.28-6.97h-1.63c-1.81 3.25-5.28 5.47-9.3 5.47-5.91 0-10.7-4.79-10.7-10.7S6.39 4.3 12.3 4.3c4.01 0 7.49 2.22 9.3 5.47h1.63C21.25 5.64 16.95 2.8 12 2.8 6.48 2.8 2 7.28 2 12.8s4.48 10.8 10 10.8z"/></svg>
                        <span>Purchase Mission Brief</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                  </div>

                  {/* Right Column: Visual */}
                  <div className="flex justify-center items-center py-10 perspective-[2000px]">
                        {/* Book Container with Rotation */}
                        <a 
                          href={amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-[280px] md:w-[320px] aspect-[2/3] transform-style-3d hover:rotate-y-[-10deg] hover:rotate-x-[5deg] transition-transform duration-500 rotate-y-[-25deg] rotate-x-[10deg] shadow-2xl group cursor-pointer"
                        >
                          
                          {/* Front Cover */}
                          <div className="absolute inset-0 bg-[#000000] border-4 border-[#FF0000] flex flex-col justify-between p-6 text-center shadow-inner backface-hidden z-20 overflow-hidden">
                            {/* Texture Overlay */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                            
                            <div className="relative z-10 border-b-2 border-[#FF0000] pb-4 mb-4">
                                <div className="text-white font-black text-3xl leading-none uppercase tracking-tighter">
                                  Double<br/>Agent<br/>Protocol
                                </div>
                            </div>

                            <div className="relative z-10 flex-1 flex items-center justify-center">
                                <div className="w-24 h-24 border-2 border-white/20 rounded-full flex items-center justify-center">
                                     <svg className="w-12 h-12 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                </div>
                            </div>

                            <div className="relative z-10 pt-4 border-t-2 border-[#FF0000]">
                                <p className="text-white font-bold tracking-[0.2em] uppercase text-xs">Iman Arzman</p>
                                <p className="text-gray-400 text-[8px] uppercase tracking-widest mt-1">Classified Document</p>
                            </div>
                          </div>

                          {/* Spine */}
                          <div className="absolute top-0 bottom-0 left-0 w-[40px] bg-[#1a1a1a] border-l border-white/10 origin-left rotate-y-90 flex items-center justify-center">
                            <span className="text-[#FF0000] font-bold text-xs tracking-widest uppercase rotate-90 whitespace-nowrap">Double Agent Protocol</span>
                          </div>

                          {/* Pages (Thickness) */}
                          <div className="absolute top-1 bottom-1 right-2 w-[35px] bg-white rounded-r-sm origin-right translate-z-[-2px] translate-x-[-2px] rotate-y-90 bg-[linear-gradient(90deg,#fff_90%,#ccc_100%)]"></div>
                          <div className="absolute top-0 bottom-0 w-[275px] h-full bg-black transform translate-z-[-40px] rounded-l-md shadow-2xl"></div>
                        </a>
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
        .translate-z-[-40px] { transform: translateZ(-40px); }
      `}</style>
    </section>
  );
};