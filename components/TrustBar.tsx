import React from 'react';

const credentials = [
  { label: "PHRi Certified", sub: "Professional in HR - International", icon: "🏆" },
  { label: "TTT Certified", sub: "Train The Trainer", icon: "🎓" },
  { label: "15+ Years", sub: "HR Industry Experience", icon: "💼" },
  { label: "500+ Clients", sub: "Successful Placements", icon: "🚀" }
];

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-brand-navy-light border-y border-white/5 relative z-20 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-brand-gold/5 pointer-events-none"></div>

      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 group justify-center lg:justify-start">
              <div className="w-12 h-12 rounded-full bg-brand-navy border border-white/10 flex items-center justify-center text-xl group-hover:scale-110 group-hover:border-brand-gold/50 transition-all duration-300 shadow-lg">
                  {item.icon}
              </div>
              <div className="flex flex-col text-left">
                 <h4 className="text-white font-bold text-base leading-tight group-hover:text-brand-gold transition-colors">{item.label}</h4>
                 <p className="text-brand-text-muted text-[10px] uppercase tracking-wider font-mono mt-1">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};