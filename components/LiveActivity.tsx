import React, { useState, useEffect } from 'react';

const activities = [
  { text: "Ahmad F. from Johor just purchased Bedah Resume", time: "2 mins ago", type: "purchase" },
  { text: "5 people are currently viewing Circle 100 slots", time: "Live", type: "view" },
  { text: "New Mock Interview slot booked by Sarah T.", time: "Just now", type: "booking" },
  { text: "Wei Lin from Subang joined the Waitlist", time: "5 mins ago", type: "signup" },
  { text: "High demand: Only 3 Strategy Calls left this week", time: "Alert", type: "alert" },
  { text: "Ravindran from Ipoh purchased Career Roadmap", time: "10 mins ago", type: "purchase" },
  { text: "Someone from Singapore is viewing Mock Interview Details", time: "Live", type: "view" },
  { text: "Nurul I. from Shah Alam booked a Strategy Call", time: "1 min ago", type: "booking" },
  { text: "Jason K. from PJ just secured a Circle 100 seat", time: "Just now", type: "purchase" },
  { text: "Fatimah from Bangi pre-ordered 'JANGAN MINTA KERJA'", time: "15 mins ago", type: "purchase" },
  { text: "12 people are reading Client Testimonials right now", time: "Live", type: "view" },
  { text: "Someone from Kuching booked a Resume Review session", time: "8 mins ago", type: "booking" },
  { text: "Kamal from Cyberjaya joined the Circle 100 waitlist", time: "Just now", type: "signup" },
  { text: "Michelle Y. from KL Sentral purchased Mock Interview", time: "20 mins ago", type: "purchase" },
  { text: "Alert: Mock Interview slots for Saturday are filling up fast", time: "Alert", type: "alert" },
  { text: "Someone from London is viewing Career Strategy Services", time: "Live", type: "view" },
  { text: "Hafiz from Putrajaya booked an Urgent Consultation", time: "5 mins ago", type: "booking" },
  { text: "Priya from Klang just upgraded to the Premium Plan", time: "30 mins ago", type: "purchase" },
  { text: "Daniel L. from Melbourne is viewing your profile", time: "Live", type: "view" },
  { text: "Siti from Kota Bharu downloaded the Salary Guide", time: "12 mins ago", type: "signup" },
  { text: "New 5-Star Review received from Azlan M.", time: "Just now", type: "alert" },
  { text: "Kenneth from Damansara purchased Bedah Resume Express", time: "4 mins ago", type: "purchase" }
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
    }, 6000); // Change every 6 seconds for slightly faster rotation given the larger list

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
          <div className="w-10 h-10 rounded-full bg-brand-navy border border-white/10 flex items-center justify-center overflow-hidden text-lg">
             {currentActivity.type === 'purchase' && <span>💰</span>}
             {currentActivity.type === 'view' && <span>👀</span>}
             {currentActivity.type === 'booking' && <span>📅</span>}
             {currentActivity.type === 'signup' && <span>📝</span>}
             {currentActivity.type === 'alert' && <span>🔥</span>}
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