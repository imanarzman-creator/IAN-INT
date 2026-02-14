import React, { useState, useEffect } from 'react';

const activities = [
  { text: "Someone from Kuala Lumpur just purchased Bedah Resume", time: "2 mins ago", type: "purchase" },
  { text: "5 people are currently viewing Circle 100 slots", time: "Live", type: "view" },
  { text: "New Mock Interview slot booked by Sarah T.", time: "Just now", type: "booking" },
  { text: "Someone from Penang joined the Waitlist", time: "5 mins ago", type: "signup" },
  { text: "High demand: Only 3 Strategy Calls left this week", time: "Alert", type: "alert" }
];

export const LiveActivity: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initial delay
    const initialTimeout = setTimeout(() => setIsVisible(true), 3000);

    const cycleInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % activities.length);
        setIsVisible(true);
      }, 500); // Wait for fade out before changing text and fading in
    }, 8000); // Change every 8 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(cycleInterval);
    };
  }, []);

  const currentActivity = activities[currentIndex];

  return (
    <div 
      className={`fixed top-24 right-6 md:right-10 z-40 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-brand-navy-light/90 backdrop-blur-md border border-brand-gold/30 p-3 rounded-lg shadow-2xl flex items-center gap-3 max-w-xs md:max-w-sm">
        <div className="relative shrink-0">
          <div className="w-10 h-10 rounded-full bg-brand-navy border border-white/10 flex items-center justify-center overflow-hidden">
             {currentActivity.type === 'purchase' && <span className="text-lg">💰</span>}
             {currentActivity.type === 'view' && <span className="text-lg">👀</span>}
             {currentActivity.type === 'booking' && <span className="text-lg">📅</span>}
             {currentActivity.type === 'signup' && <span className="text-lg">📝</span>}
             {currentActivity.type === 'alert' && <span className="text-lg">🔥</span>}
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-brand-navy-light animate-pulse"></div>
        </div>
        
        <div className="flex flex-col">
          <p className="text-xs font-bold text-white leading-tight">
            {currentActivity.text}
          </p>
          <p className="text-[10px] text-brand-text-muted font-mono mt-0.5 uppercase tracking-wide">
            {currentActivity.time}
          </p>
        </div>

        <button 
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-5 h-5 bg-brand-navy border border-white/20 rounded-full text-white text-xs flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  );
};