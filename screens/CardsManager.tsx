
import React, { useState } from 'react';
import { CardType, CardSkin } from '../types';
import CardUI from '../components/CardUI';

const CardsManager: React.FC = () => {
  const [cardType, setCardType] = useState<CardType>('Virtual');
  const [cardSkin, setCardSkin] = useState<CardSkin>('yellow');
  const [cardName, setCardName] = useState('Standard Yellow');
  const [limit, setLimit] = useState(1000);
  const [freeze, setFreeze] = useState(false);

  return (
    <div className="flex flex-col h-full bg-background overflow-y-auto no-scrollbar pb-32">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-6">
        <button className="size-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold tracking-tight">Add New Card</h2>
        <div className="size-10"></div>
      </header>

      {/* Card Preview Carousel Mock */}
      <div className="w-full pt-4 pb-8">
        <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory px-8 gap-4 items-center">
          <div className="snap-center shrink-0 w-[280px] scale-100 transition-transform">
            <CardUI skin={cardSkin} number="•••• •••• •••• 4291" name={cardName} />
          </div>
          <div className="snap-center shrink-0 w-[280px] opacity-40 scale-90 transition-all">
             <CardUI skin="black" number="•••• •••• •••• 8832" name="Premium Black" />
          </div>
        </div>
        <div className="flex justify-center gap-1.5 mt-6">
          <div className={`w-1.5 h-1.5 rounded-full ${cardSkin === 'yellow' ? 'bg-primary' : 'bg-gray-700'}`}></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
        </div>
      </div>

      {/* Toggle Selector */}
      <div className="px-6 mb-8">
        <div className="flex h-12 w-full items-center justify-center rounded-2xl bg-surface p-1.5 border border-white/5">
          <button 
            onClick={() => setCardType('Virtual')}
            className={`flex-1 h-full rounded-xl text-sm font-bold transition-all ${cardType === 'Virtual' ? 'bg-primary text-black shadow-lg shadow-primary/20' : 'text-muted'}`}
          >
            Virtual Card
          </button>
          <button 
            onClick={() => setCardType('Physical')}
            className={`flex-1 h-full rounded-xl text-sm font-bold transition-all ${cardType === 'Physical' ? 'bg-primary text-black shadow-lg shadow-primary/20' : 'text-muted'}`}
          >
            Physical Card
          </button>
        </div>
        <p className="text-xs text-muted mt-3 text-center">
          {cardType === 'Virtual' ? 'Virtual cards are instantly available and free.' : 'Physical cards arrive within 3-5 business days.'}
        </p>
      </div>

      <div className="px-6 space-y-8">
        {/* Input Field */}
        <div className="flex flex-col gap-2.5">
          <label className="text-sm font-bold text-white/90">Card Name</label>
          <div className="relative group">
            <input 
              type="text" 
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className="w-full bg-surface border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-muted/50 focus:outline-none focus:border-primary transition-all pr-12"
              placeholder="Give your card a name"
            />
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-primary">edit</span>
          </div>
        </div>

        {/* Skin Selection */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-bold text-white/90">Card Skin</label>
          <div className="flex gap-5">
            {[
              { id: 'yellow', color: 'bg-primary' },
              { id: 'black', color: 'bg-[#1a1a1a]' },
              { id: 'white', color: 'bg-white' },
            ].map((skin) => (
              <button 
                key={skin.id}
                onClick={() => setCardSkin(skin.id as any)}
                className={`size-12 rounded-full ${skin.color} border-4 transition-all ${cardSkin === skin.id ? 'border-primary ring-4 ring-primary/20 scale-110' : 'border-transparent opacity-60'}`}
              />
            ))}
          </div>
        </div>

        {/* Slider Component */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <label className="text-sm font-bold text-white/90">Monthly Spending Limit</label>
            <span className="text-primary font-black text-xl font-mono">${limit.toLocaleString()}</span>
          </div>
          <div className="relative h-8 flex items-center group">
            <input 
              type="range" 
              min="0" 
              max="5000" 
              step="100"
              value={limit}
              onChange={(e) => setLimit(parseInt(e.target.value))}
              className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-primary border border-white/5"
            />
          </div>
          <div className="flex justify-between text-[10px] font-bold text-muted uppercase tracking-widest">
            <span>$0</span>
            <span>$5,000</span>
          </div>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-between py-4 border-y border-white/5">
          <div className="flex flex-col">
            <span className="text-white text-sm font-bold">Freeze card immediately</span>
            <span className="text-muted text-xs font-medium">Card will be inactive upon creation</span>
          </div>
          <button 
            onClick={() => setFreeze(!freeze)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-200 focus:outline-none ${freeze ? 'bg-primary' : 'bg-surface border border-white/10'}`}
          >
            <div className={`absolute top-1 left-1 size-5 rounded-full transition-transform duration-200 ${freeze ? 'translate-x-7 bg-black' : 'translate-x-0 bg-muted'}`} />
          </button>
        </div>

        {/* Create Button */}
        <button className="w-full bg-primary hover:bg-yellow-400 text-black font-black text-lg py-5 rounded-3xl shadow-2xl shadow-primary/20 transition-all active:scale-[0.97] flex items-center justify-center gap-3 mt-4">
          Create Card
          <span className="material-symbols-outlined font-bold">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default CardsManager;
