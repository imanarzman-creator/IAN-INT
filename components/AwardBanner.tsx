import React from 'react';

export const AwardBanner: React.FC = () => {
  return (
    <div className="bg-brand-gold relative overflow-hidden py-6">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left text-brand-navy">
            <div className="flex items-center gap-3 shrink-0">
                <div className="w-10 h-10 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center text-xl shadow-lg">
                    🏆
                </div>
                <span className="font-bold uppercase tracking-widest text-xs md:text-sm border-b-2 border-brand-navy pb-0.5">Achievement Unlocked</span>
            </div>
            
            <div className="h-8 w-px bg-brand-navy/20 hidden md:block"></div>
            
            <p className="font-serif font-medium text-lg md:text-xl max-w-3xl">
                <span className="font-bold">Finalist: HR Excellence Awards 2025</span>
                <span className="hidden md:inline mx-2">•</span>
                <span className="block md:inline italic opacity-90">Excellence in Total Rewards Strategy</span>
            </p>
        </div>
    </div>
  );
};