
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIScreen: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: "Hello! I'm your FinFlex AI assistant. How can I help you optimize your finances today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are a world-class financial advisor for FinFlex, a premium fintech app. Provide concise, smart, and professional advice about spending, savings, and card benefits. Use emojis sparingly. Focus on helpfulness and modern wealth management.",
        }
      });

      const aiResponse = response.text || "I'm having a bit of trouble connecting to my brain right now. Please try again.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error. Please ensure your environment is set up correctly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-background overflow-hidden pb-32">
      <header className="px-6 pt-12 pb-6 flex items-center gap-3">
        <div className="size-10 rounded-2xl bg-primary flex items-center justify-center text-black">
          <span className="material-symbols-outlined">smart_toy</span>
        </div>
        <div>
          <h1 className="text-xl font-extrabold tracking-tight leading-none">FinFlex AI</h1>
          <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Active Insight Engine</span>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 no-scrollbar">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-5 py-3.5 rounded-3xl text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-primary text-black font-bold rounded-tr-none shadow-lg shadow-primary/10' 
                : 'bg-surface text-white font-medium rounded-tl-none border border-white/5'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-surface px-5 py-3 rounded-2xl border border-white/5 flex gap-1.5">
              <div className="size-1.5 bg-primary rounded-full animate-bounce" />
              <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      <div className="px-6 py-4 bg-background/80 backdrop-blur-xl border-t border-white/5 absolute bottom-20 left-0 right-0">
        <div className="flex gap-2">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about your spending..."
            className="flex-1 bg-surface border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-primary transition-all"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="size-12 rounded-2xl bg-primary text-black flex items-center justify-center shadow-lg shadow-primary/20 disabled:opacity-50 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined font-bold">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIScreen;
