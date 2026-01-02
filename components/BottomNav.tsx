
import React from 'react';
import { NavigationTab } from '../types';

interface BottomNavProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#121212]/95 backdrop-blur-lg border-t border-white/5 pb-5 pt-3 px-6 z-50">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <button 
          onClick={() => onTabChange(NavigationTab.Home)}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === NavigationTab.Home ? 'text-primary' : 'text-[#baba9c] hover:text-white'}`}
        >
          <span className={`material-symbols-outlined text-[26px] ${activeTab === NavigationTab.Home ? 'font-variation-FILL' : ''}`}>home</span>
          <span className="text-[10px] font-bold">Home</span>
        </button>
        
        <button 
          onClick={() => onTabChange(NavigationTab.Cards)}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === NavigationTab.Cards ? 'text-primary' : 'text-[#baba9c] hover:text-white'}`}
        >
          <span className={`material-symbols-outlined text-[26px] ${activeTab === NavigationTab.Cards ? 'font-variation-FILL' : ''}`}>credit_card</span>
          <span className="text-[10px] font-bold">Cards</span>
        </button>

        {/* Central Button: Navigates to Bills */}
        <button 
          onClick={() => onTabChange(NavigationTab.Bills)}
          className={`relative -top-5 flex items-center justify-center size-14 rounded-full transition-all transform hover:scale-105 active:scale-90 ${activeTab === NavigationTab.Bills ? 'bg-primary text-black shadow-[0_0_20px_rgba(242,242,13,0.6)]' : 'bg-[#222219] text-[#baba9c] border border-white/10'}`}
        >
          <span className="material-symbols-outlined text-[28px] font-bold">payments</span>
        </button>

        <button 
          onClick={() => onTabChange(NavigationTab.Crypto)}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === NavigationTab.Crypto ? 'text-primary' : 'text-[#baba9c] hover:text-white'}`}
        >
          <span className={`material-symbols-outlined text-[26px] ${activeTab === NavigationTab.Crypto ? 'font-variation-FILL' : ''}`}>send</span>
          <span className="text-[10px] font-bold">Send</span>
        </button>

        {/* Highlighted Robot Icon mapping to Profile as per user request */}
        <button 
          onClick={() => onTabChange(NavigationTab.Profile)}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === NavigationTab.Profile ? 'text-primary' : 'text-[#baba9c] hover:text-white'}`}
        >
          <span className={`material-symbols-outlined text-[26px] ${activeTab === NavigationTab.Profile ? 'font-variation-FILL' : ''}`}>smart_toy</span>
          <span className="text-[10px] font-bold">AI</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
