import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const handleInstagramDM = () => {
    // Replace with your actual Instagram URL
    window.open('https://instagram.com/your_username', '_blank');
  };

  const handleWhatsAppDM = () => {
    const phoneNumber = '601155515608';
    const message = 'Hi, I saw your website and I am interested to know more about your career coaching.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
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
                onClick={() => window.open('https://forms.gle/jALhB4Aqb1pfVepK8', '_blank')}
                className="px-8 py-4 text-base"
              >
                Book Bedah Resume
              </Button>
              {/* Secondary CTA */}
              <button 
                onClick={handleInstagramDM}
                className="px-8 py-4 text-base font-bold text-white border-2 border-white/20 rounded-full hover:bg-white hover:text-brand-navy hover:border-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Follow on Instagram</span>
              </button>
            </div>
            
            <div className="flex items-center gap-6 pt-8 border-t border-white/5 mt-8">
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
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-3/4 lg:w-full mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-2xl group bg-white">
              {/* 
                  IMPORTANT: Ensure 'ian-logo.png' is placed in the public directory.
              */}
              <img 
                src="/ian-logo.png"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="IAN Intelligence Network Logo"
                onError={(e) => {
                  // Fallback to a tech/abstract image if local logo not found
                  e.currentTarget.src = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-60"></div>
              
              {/* DM SEKARANG Banner - Matches the visual reference */}
              <div 
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={handleWhatsAppDM}
              >
                  <div className="bg-[#25D366] text-white p-4 rounded-xl shadow-2xl border border-white/20 flex flex-col items-center text-center relative overflow-hidden">
                      {/* Shine effect */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                      
                      <div className="flex items-center gap-2 mb-1 relative z-10">
                        <span className="text-2xl font-bold uppercase tracking-tight">DM SEKARANG</span>
                        <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </div>
                      <p className="text-sm font-medium opacity-90 relative z-10">untuk maklumat lanjut!</p>
                      
                      {/* WhatsApp Icon Badge */}
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-20">
                        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-white" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                  </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="hidden md:block absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-brand-gold/30 rounded-tr-2xl"></div>
            <div className="hidden md:block absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-brand-gold/30 rounded-bl-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};