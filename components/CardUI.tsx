
import React from 'react';
import { CardSkin } from '../types';

interface CardUIProps {
  skin: CardSkin;
  number: string;
  name: string;
  isSmall?: boolean;
}

const CardUI: React.FC<CardUIProps> = ({ skin, number, name, isSmall = false }) => {
  const getSkinStyles = () => {
    switch (skin) {
      case 'yellow':
        return 'bg-primary text-black';
      case 'black':
        return 'bg-[#0a0a0a] border border-white/10 text-white';
      case 'white':
        return 'bg-white text-gray-900 shadow-xl shadow-white/5';
      default:
        return 'bg-primary text-black';
    }
  };

  return (
    <div 
      className={`relative shrink-0 rounded-2xl p-5 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 ${getSkinStyles()} ${isSmall ? 'w-[280px] h-[176px]' : 'w-full aspect-[1.6/1]'}`}
    >
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="cardPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cardPattern)" />
        </svg>
      </div>

      <div className="relative z-10 flex justify-between items-start">
        <span className="font-extrabold tracking-widest text-xs opacity-70 uppercase">FINFLEX</span>
        <span className="material-symbols-outlined text-3xl opacity-80">contactless</span>
      </div>

      <div className="relative z-10">
        <div className="flex gap-3 mb-6">
          <div className={`w-12 h-8 rounded-md bg-current opacity-20`}></div>
        </div>
        <p className="font-mono text-xl tracking-[0.2em] mb-4 truncate">
          {number}
        </p>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[10px] font-bold uppercase opacity-60 mb-0.5 tracking-tighter">Card Holder</p>
            <p className="font-bold text-sm tracking-tight">{name}</p>
          </div>
          <span className="font-black text-2xl italic tracking-tighter">VISA</span>
        </div>
      </div>
    </div>
  );
};

export default CardUI;
