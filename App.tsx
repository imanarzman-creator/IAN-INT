import React, { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AwardBanner } from './components/AwardBanner';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { AICoach } from './components/AICoach';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { BookLeadMagnet } from './components/BookLeadMagnet';
import { CorporateTraining } from './components/CorporateTraining';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LiveActivity } from './components/LiveActivity';

export const App: React.FC = () => {
  useEffect(() => {
    // Ensure the page starts at the top on load/refresh, overriding browser scroll memory
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-brand-navy min-h-screen text-white selection:bg-brand-gold selection:text-brand-navy font-sans">
      <Navigation />
      <main>
        <Hero />
        <AwardBanner />
        <TrustBar />
        <About />
        <AICoach />
        <Services />
        <Testimonials />
        <BookLeadMagnet />
        
        {/* Final CTA Section - Authority Driven */}
        <section className="py-32 px-6 text-center border-t border-white/5 bg-brand-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,transparent_70%)] opacity-30"></div>
          <div className="max-w-4xl mx-auto relative z-10">
             <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-white">Your Success is <span className="text-brand-gold">Predictable.</span></h2>
             <p className="text-brand-text-muted text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
               Don't leave your career to chance. Leverage 15 years of HR expertise to position yourself exactly where you want to be.
             </p>
             <button 
               onClick={() => window.open('https://cal.com/iman-arzman-gcqwj7/career-strategy-consultation', '_blank')}
               className="px-12 py-5 bg-brand-gold text-brand-navy font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-xl rounded-full"
             >
               Start Your Strategy Call
             </button>
          </div>
        </section>

        <CorporateTraining />
      </main>
      <Footer />
      <WhatsAppButton />
      <LiveActivity />
    </div>
  );
};