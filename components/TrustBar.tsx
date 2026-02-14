import React, { useState, useEffect, useRef } from 'react';

// Interactive Counter Component
const AnimatedCounter = () => {
  const [count, setCount] = useState(500);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const end = 589;
    const start = 500;
    const duration = 2500;
    let startTime: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing: easeOutExpo for smooth deceleration
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(start + (end - start) * ease));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  return <span ref={ref} className="tabular-nums inline-block">{count}</span>;
};

const credentials = [
  { 
    label: "PHRi™ Certified", 
    sub: "Professional in HR - International", 
    image: "https://images.credly.com/size/680x680/images/26afd916-40e7-44f3-9de5-b5524245a781/blob",
    link: "https://www.credly.com/badges/fb83c073-f009-4140-8651-f6d014d19c54/linked_in_profile"
  },
  { 
    label: "Certified Trainer", 
    sub: "HRD Corp", 
    icon: "🎓" 
  },
  { 
    label: "15+ Years", 
    sub: "HR Industry Experience", 
    icon: "💼" 
  },
  { 
    label: <><AnimatedCounter />+ Clients</>, 
    sub: "Successful Placements", 
    icon: "🚀" 
  }
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
              {item.link ? (
                <a 
                   href={item.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="w-12 h-12 rounded-full bg-brand-navy border border-white/10 flex items-center justify-center text-xl group-hover:scale-110 group-hover:border-brand-gold/50 transition-all duration-300 shadow-lg overflow-hidden p-0.5 relative z-10 cursor-pointer"
                   title="Verify Credential on Credly"
                >
                  {item.image ? (
                    <img src={item.image} alt={typeof item.label === 'string' ? item.label : 'Credential'} className="w-full h-full object-contain" />
                  ) : (
                    item.icon
                  )}
                </a>
              ) : (
                <div className="w-12 h-12 rounded-full bg-brand-navy border border-white/10 flex items-center justify-center text-xl group-hover:scale-110 group-hover:border-brand-gold/50 transition-all duration-300 shadow-lg overflow-hidden p-0.5">
                    {item.image ? (
                      <img src={item.image} alt={typeof item.label === 'string' ? item.label : 'Credential'} className="w-full h-full object-contain" />
                    ) : (
                      item.icon
                    )}
                </div>
              )}
              
              <div className="flex flex-col text-left">
                 {item.link ? (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white font-bold text-base leading-tight group-hover:text-brand-gold transition-colors hover:underline decoration-brand-gold/50"
                    >
                      {item.label} <span className="inline-block text-[10px] align-top text-brand-gold ml-1">↗</span>
                    </a>
                 ) : (
                    <h4 className="text-white font-bold text-base leading-tight group-hover:text-brand-gold transition-colors">{item.label}</h4>
                 )}
                 <p className="text-brand-text-muted text-[10px] uppercase tracking-wider font-mono mt-1">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};