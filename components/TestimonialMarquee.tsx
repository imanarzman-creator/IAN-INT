import React from 'react';
import { motion } from 'framer-motion';

const GOOGLE_REVIEW_LINK = "https://share.google/0ogIPTcF7tLjXbnKq";

interface Review {
  id: string;
  name: string;
  role: string;
  quote: string;
  stars: number;
}

const reviews: Review[] = [
  {
    id: '1',
    name: "Danial Hilmie",
    role: "1st Class Graduate",
    quote: "Iman's expertise goes beyond the ordinary. The resume review was unlike anything I had come across. I was genuinely amazed by the depth of knowledge.",
    stars: 5
  },
  {
    id: '2',
    name: "Thiam Chun Ong",
    role: "Manager, Utama Turbine",
    quote: "Iman has a keen eye for detail. He crafts resumes that don't just list skills but resonate with hiring managers. A true engineer's approach to HR.",
    stars: 5
  },
  {
    id: '3',
    name: "Mugilen Maniam",
    role: "Head of Integrity, CGC",
    quote: "Instrumental in strengthening our Total Rewards framework. His work enhanced clarity and aligned KPIs effectively with organizational goals.",
    stars: 5
  },
  {
    id: '4',
    name: "Shaun Fook",
    role: "Mathematics Olympiad Winner",
    quote: "Iman's precision and mentorship have always been top-tier. He turns complex problems into clear strategies.",
    stars: 5
  },
  {
    id: '5',
    name: "Sarah Jenkins",
    role: "Software Engineer",
    quote: "I landed 3 interviews within a week of applying the strategies from the Bedah Resume session. The ROI is undeniable.",
    stars: 5
  },
  {
    id: '6',
    name: "Michael Chen",
    role: "Finance Director",
    quote: "The mock interview simulation was intense but necessary. It completely changed how I approach executive salary negotiations.",
    stars: 5
  }
];

const StarIcon = () => (
  <svg className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="w-[350px] md:w-[400px] shrink-0 bg-white rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 mx-4 select-none hover:scale-[1.02] transition-transform duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-1">
        {[...Array(review.stars)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <div className="opacity-80">
        <GoogleIcon />
      </div>
    </div>
    
    <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium line-clamp-4 min-h-[5rem]">
      "{review.quote}"
    </p>
    
    <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
      <img 
        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=random&color=fff&rounded=true&bold=true`} 
        alt={review.name}
        className="w-10 h-10 rounded-full bg-slate-100" 
      />
      <div>
        <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
        <p className="text-xs text-slate-500 font-medium">{review.role}</p>
      </div>
    </div>
  </div>
);

export const TestimonialMarquee: React.FC = () => {
  return (
    <section id="testimonials" className="bg-brand-navy py-24 border-b border-white/5 scroll-mt-28 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 mb-16 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold text-xs font-mono uppercase tracking-widest mb-6">
                 <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                 Verified Results
             </div>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-6">
               Don't just take <br/>
               <span className="text-brand-text-muted italic">my word for it.</span>
             </h2>
             <a 
              href={GOOGLE_REVIEW_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-text-muted hover:text-white transition-colors group text-sm border-b border-white/10 pb-1"
            >
              <GoogleIcon />
              <span className="font-bold">5.0 Star Rating</span>
              <span className="font-light opacity-70">on Google Reviews</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
        </div>
      </motion.div>

      {/* Marquee Container */}
      <div className="relative z-10 w-full overflow-hidden space-y-8">
        
        {/* Row 1 - Moves Left */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex items-center justify-center md:justify-start animate-marquee hover:[animation-play-state:paused]">
                {/* Original Set */}
                {reviews.map((review) => (
                    <ReviewCard key={`r1-${review.id}`} review={review} />
                ))}
                {/* Duplicate Set for Loop */}
                {reviews.map((review) => (
                    <ReviewCard key={`r1-dup-${review.id}`} review={review} />
                ))}
            </div>
        </div>

        {/* Row 2 - Moves Right (Hidden on mobile) */}
        <div className="hidden md:block w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex items-center justify-start animate-marquee-reverse hover:[animation-play-state:paused]">
                {/* Original Set (Reversed for visual variety) */}
                {[...reviews].reverse().map((review) => (
                    <ReviewCard key={`r2-${review.id}`} review={review} />
                ))}
                {/* Duplicate Set */}
                {[...reviews].reverse().map((review) => (
                    <ReviewCard key={`r2-dup-${review.id}`} review={review} />
                ))}
            </div>
        </div>
        
      </div>
    </section>
  );
};