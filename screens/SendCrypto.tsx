
import React, { useState } from 'react';

const SendCrypto: React.FC = () => {
  const [amount, setAmount] = useState('0.05');

  return (
    <div className="flex flex-col h-full bg-[#0a0a0a] overflow-y-auto no-scrollbar pb-32 text-white">
      {/* Top App Bar */}
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-[#0a0a0a]/90 backdrop-blur-md">
        <button className="flex items-center justify-center size-10 rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold tracking-tight">Send Crypto</h2>
        <button className="flex items-center justify-center size-10 rounded-full hover:bg-white/10 transition-colors group">
          <span className="material-symbols-outlined group-hover:text-primary transition-colors">qr_code_scanner</span>
        </button>
      </header>

      {/* Asset Selection */}
      <section className="px-4 mt-2">
        <div className="flex items-center justify-between bg-[#161616] rounded-xl p-3 border border-white/5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center size-10 rounded-full bg-orange-500/20 text-orange-500">
              <span className="material-symbols-outlined fill-current">currency_bitcoin</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 cursor-pointer group">
                <span className="text-base font-bold text-white">Bitcoin</span>
                <span className="material-symbols-outlined text-gray-400 text-sm group-hover:text-primary transition-colors">expand_more</span>
              </div>
              <span className="text-xs text-gray-400">Balance: 0.45 BTC</span>
            </div>
          </div>
          <div className="text-right">
            <span className="block text-sm font-medium text-white">$12,450.00</span>
            <span className="block text-xs text-green-500">+2.4%</span>
          </div>
        </div>
      </section>

      {/* Amount Input Display */}
      <section className="flex flex-col items-center justify-center py-8">
        <div className="relative flex items-baseline justify-center w-full px-4">
          <span className="text-4xl font-bold text-gray-600 mr-2 select-none">BTC</span>
          <input 
            className="bg-transparent text-center text-6xl font-bold text-white outline-none w-full max-w-[280px] caret-primary p-0 border-none focus:ring-0 placeholder-gray-700" 
            placeholder="0.00" 
            type="text" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <p className="text-gray-400 font-medium mt-2 text-lg">≈ $1,350.25 USD</p>
        
        {/* Percentage Chips */}
        <div className="flex gap-3 mt-6">
          <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all">
            <span className="text-sm font-semibold text-white">25%</span>
          </button>
          <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all">
            <span className="text-sm font-semibold text-white">50%</span>
          </button>
          <button className="px-4 py-2 rounded-lg bg-primary hover:bg-yellow-400 transition-all shadow-[0_0_15px_rgba(242,242,13,0.3)]">
            <span className="text-sm font-bold text-black">MAX</span>
          </button>
        </div>
      </section>

      {/* Recipient & Details Form */}
      <section className="flex-1 bg-[#161616] rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] p-6 mt-4 flex flex-col gap-6">
        {/* Recipient Input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-400 ml-1">To Recipient</label>
          <div className="relative flex items-center">
            <input 
              className="w-full h-14 pl-4 pr-20 bg-[#262626] rounded-xl border-none text-white focus:ring-2 focus:ring-primary font-medium placeholder-gray-500" 
              placeholder="Wallet Address or ENS" 
              type="text"
            />
            <button className="absolute right-2 px-3 py-1.5 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Paste</span>
            </button>
          </div>
        </div>

        {/* Transaction Details Card */}
        <div className="rounded-xl border border-dashed border-white/10 bg-white/5 p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">Network Fee</span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-500 text-sm">local_gas_station</span>
              <span className="text-sm font-medium text-white">0.0002 BTC</span>
              <span className="text-xs text-gray-500">($5.40)</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">Estimated Arrival</span>
            <span className="text-sm font-medium text-white">~ 10 mins</span>
          </div>
          <div className="h-px bg-white/10 my-2"></div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-white">Total</span>
            <span className="text-lg font-bold text-white">0.0502 BTC</span>
          </div>
        </div>

        {/* Slide to Confirm */}
        <div className="mt-auto pt-4 pb-2">
          <div className="relative h-16 w-full bg-black rounded-full overflow-hidden flex items-center p-1 group cursor-pointer border border-white/10">
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <span className="text-white/40 font-semibold animate-pulse">Slide to send</span>
            </div>
            {/* Slider Thumb */}
            <div className="relative z-10 h-14 w-14 bg-primary rounded-full shadow-lg flex items-center justify-center transform transition-transform translate-x-0 group-active:translate-x-[260px] duration-500 ease-in-out">
              <span className="material-symbols-outlined text-black group-active:hidden">arrow_forward</span>
              <span className="material-symbols-outlined text-black hidden group-active:block animate-spin">progress_activity</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SendCrypto;
