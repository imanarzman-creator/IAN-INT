import React from 'react';

const credentials = [
  { label: "PHRi Certified", sub: "Professional in HR - International", icon: "🏆" },
  { label: "TTT Certified", sub: "Train The Trainer Certified", icon: "🎓" },
  { label: "15+ Years", sub: "Strategic HR Industry Experience", icon: "💼" },
  { label: "500+ Placements", sub: "Successful Career Transitions", icon: "🚀" }
];

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-brand-navy-light border-y border-white/5 relative z-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {credentials.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left group">
              <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
              <h4 className="text-white font-bold text-lg">{item.label}</h4>
              <p className="text-brand-text-muted text-xs uppercase tracking-wider mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};