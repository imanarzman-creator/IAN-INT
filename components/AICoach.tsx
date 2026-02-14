import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToIan } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AICoach: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello. I am IAN. How can I accelerate your career trajectory today?" }
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
    <section id="ai-coach" className="py-24 bg-brand-gray relative border-b border-white/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left Side: Context */}
        <div className="lg:col-span-4 space-y-8 pt-8">
            <h2 className="text-4xl md:text-5xl font-serif text-white">Consult Intelligence</h2>
            <div className="h-px w-20 bg-brand-accent"></div>
            <p className="text-brand-text-muted leading-relaxed text-lg">
              Experience the precision of our methodology. Ask IAN about:
            </p>
            <ul className="space-y-6">
                {[
                  "Resume impact analysis",
                  "Salary market positioning",
                  "Interview objection handling"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group cursor-default">
                    <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-mono text-brand-accent group-hover:border-brand-accent transition-colors">
                      0{i+1}
                    </span>
                    <span className="text-white/80 group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
            </ul>
        </div>

        {/* Right Side: Interface */}
        <div className="lg:col-span-8">
          <div className="bg-[#050505] border border-white/10 h-[600px] flex flex-col relative shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-white/[0.02] p-4 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                 <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">IAN_V1.0_ONLINE</span>
              </div>
              <div className="flex gap-1.5 opacity-50">
                 <div className="w-2 h-2 rounded-full border border-white/20"></div>
                 <div className="w-2 h-2 rounded-full border border-white/20"></div>
                 <div className="w-2 h-2 rounded-full border border-white/20"></div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 font-mono text-sm scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`
                      max-w-[85%] md:max-w-[70%] p-5 border relative
                      ${msg.role === 'user' 
                        ? 'bg-brand-accent/5 border-brand-accent/20 text-brand-accent text-right' 
                        : 'bg-white/5 border-white/10 text-gray-300'
                      }
                      ${msg.isError ? 'border-red-500/30 text-red-400' : ''}
                    `}
                  >
                    {msg.role === 'model' && (
                       <span className="absolute -top-3 left-4 bg-[#050505] px-2 text-[10px] text-white/30 uppercase tracking-widest border border-white/10">IAN</span>
                    )}
                    <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-4 flex items-center gap-2 text-xs text-brand-accent font-mono">
                    <span className="animate-pulse">Analyzing</span>
                    <span className="flex gap-0.5">
                      <span className="w-1 h-1 bg-brand-accent rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                      <span className="w-1 h-1 bg-brand-accent rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                      <span className="w-1 h-1 bg-brand-accent rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-white/[0.02] border-t border-white/10">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter your career query here..."
                  className="flex-1 bg-transparent border-b border-white/20 px-2 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-accent transition-colors font-mono text-sm"
                  autoComplete="off"
                />
                <button 
                  type="submit" 
                  disabled={isLoading} 
                  className="px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Execute
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};