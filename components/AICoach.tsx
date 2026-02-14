import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToIan } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AICoach: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello. I am IAN (Intelligence Advisor Network). How can I assist with your career strategy today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await sendMessageToIan(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Connection interrupted. Please retry.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-coach" className="py-24 bg-brand-navy border-b border-white/5 relative overflow-hidden scroll-mt-28">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-navy-light/30 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left Side: Context */}
        <div className="lg:col-span-4 space-y-8 pt-8">
            <div className="inline-block px-3 py-1 border border-brand-gold/30 rounded-full text-brand-gold text-[10px] font-mono uppercase tracking-widest">
                Beta Feature
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white font-bold">Consult <span className="text-brand-gold">IAN</span></h2>
            <div className="h-1 w-20 bg-brand-gold"></div>
            <p className="text-brand-text-muted leading-relaxed text-lg">
              Experience the precision of my methodology before you book. IAN is trained on my 15 years of HR data to give you instant strategic feedback.
            </p>
            <ul className="space-y-6 pt-4">
                {[
                  "Critique my resume summary",
                  "What salary should I ask for?",
                  "How to explain a career gap"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group cursor-default">
                    <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs font-mono text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                      0{i+1}
                    </span>
                    <span className="text-white/80 group-hover:text-white transition-colors font-light">{item}</span>
                  </li>
                ))}
            </ul>
        </div>

        {/* Right Side: Interface */}
        <div className="lg:col-span-8">
          <div className="bg-brand-navy-light border border-white/10 h-[600px] flex flex-col relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-xl overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-[#0f1218] p-4 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
                 <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-text-muted">IAN_INTELLIGENCE_NODE</span>
              </div>
              <div className="flex gap-1.5 opacity-50">
                 <div className="w-2 h-2 rounded-full bg-white/20"></div>
                 <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 font-mono text-sm scrollbar-thin scrollbar-thumb-brand-gold/20 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`
                      max-w-[85%] md:max-w-[70%] p-5 rounded-lg relative shadow-md
                      ${msg.role === 'user' 
                        ? 'bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-right rounded-tr-none' 
                        : 'bg-[#0f1218] border border-white/5 text-gray-300 rounded-tl-none'
                      }
                      ${msg.isError ? 'border-red-500/30 text-red-400' : ''}
                    `}
                  >
                    {msg.role === 'model' && (
                       <span className="absolute -top-3 left-0 bg-brand-gold text-brand-navy px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-sm">IAN</span>
                    )}
                    <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#0f1218] border border-white/5 p-4 rounded-lg rounded-tl-none flex items-center gap-3 text-xs text-brand-gold font-mono">
                    <span className="animate-pulse">Processing HR Data</span>
                    <span className="flex gap-1">
                      <span className="w-1 h-1 bg-brand-gold rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                      <span className="w-1 h-1 bg-brand-gold rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                      <span className="w-1 h-1 bg-brand-gold rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-[#0f1218] border-t border-white/5">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a career question..."
                  className="flex-1 bg-brand-navy border border-white/10 px-4 py-3 rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-brand-gold transition-colors font-mono text-sm"
                  autoComplete="off"
                />
                <button 
                  type="submit" 
                  disabled={isLoading} 
                  className="px-6 py-2 bg-brand-gold text-brand-navy rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(251,191,36,0.1)]"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};