import React, { useState, useEffect, useRef } from 'react';

// Interactive Counter Component
const AnimatedCounter = () => {
  const [count, setCount] = useState(501);
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

    const min = 501;
    const max = 597;
    const duration = 3000; // Duration for one direction sweep (3 seconds)
    let startTime: number | null = null;
    let direction = 1; // 1 for up, -1 for down

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth sine easing for natural turnaround
      const ease = -(Math.cos(Math.PI * progress) - 1) / 2; 

      if (direction === 1) {
        // Counting Up
        setCount(Math.floor(min + (max - min) * ease));
      } else {
        // Counting Down
        setCount(Math.floor(max - (max - min) * ease));
      }

      // When animation cycle completes, reverse direction and reset timer
      if (progress >= 1) {
        startTime = timestamp;
        direction *= -1;
      }
      
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isVisible]);

  return <span ref={ref} className="tabular-nums inline-block min-w-[3ch] text-center">{count}</span>;
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
    label: <><AnimatedCounter /> Clients</>, 
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
                    <h4 className="text-white font-bold text-base leading-tight group-hover:text-brand-gold transition-colors flex items-center gap-1">{item.label}</h4>
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