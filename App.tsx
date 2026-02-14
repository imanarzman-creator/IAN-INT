import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AICoach } from './components/AICoach';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen text-white selection:bg-brand-accent selection:text-black font-sans">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <AICoach />
        <Testimonials />
        
        {/* Final CTA Section */}
        <section className="py-32 px-6 text-center border-t border-white/10 bg-brand-black">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-5xl md:text-7xl font-serif mb-8 text-white">Ready to Ascend?</h2>
             <p className="text-brand-text-muted text-xl mb-12 max-w-2xl mx-auto font-light">
               Join the top 1% of professionals who have unlocked their true career potential with IAN Intelligence.
             </p>
             <button 
               onClick={() => window.open('https://forms.gle/7mHDrHwQKd23AxUg8', '_blank')}
               className="px-10 py-5 bg-brand-accent text-black font-bold text-lg hover:bg-white transition-all duration-300"
             >
               Start Your Transformation
             </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;