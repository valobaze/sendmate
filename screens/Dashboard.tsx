
import React from 'react';
import { NavigationTab } from '../types';

interface DashboardProps {
  onTabChange?: (tab: NavigationTab) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onTabChange }) => {
  return (
    <div className="flex flex-col h-full bg-[#121212] overflow-y-auto no-scrollbar pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-[#121212]/80 backdrop-blur-md px-4 pt-4 pb-2 border-b border-white/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div 
                className="bg-center bg-no-repeat bg-cover rounded-full size-10 border border-white/10" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHkLf9aItLGha274rF1E7wAWjWR2Uuqjylz_ai7nafwr-R7ayT-DZFIky--T_xvDUrKcuNTYGTeU_1rx11CLQRhBXWRicjPwembLRcy5Ykl8E3Ofe6C2xQiPo10GB2TRLo98g2Ev1ZY-7QyljZcYWzkNwQ2EpSh5Pzf4X4VvT3PbNSNymgyuk98thDGNcw_AQB1Hh_jTzkWx5gI_6nzYgCPrph0-olE2s2xoS9VMZQ4VyeLJnhTe0C2TFzP7L48AXiBJv478zcGWds")' }}
              />
              <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-[#121212]"></div>
            </div>
            <div>
              <p className="text-[#baba9c] text-xs font-medium uppercase tracking-tight">Welcome back</p>
              <h2 className="text-white text-base font-bold leading-tight">Alex Morgan</h2>
            </div>
          </div>
          <button className="flex size-10 items-center justify-center rounded-full bg-[#1E1E1E] text-white hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-[24px]">notifications</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col px-4 pt-6 gap-6">
        
        {/* Total Balance Card */}
        <div className="relative overflow-hidden rounded-2xl bg-[#1E1E1E] p-6 shadow-lg group">
          {/* Abstract Background Patterns */}
          <div className="absolute -right-10 -top-10 size-40 rounded-full bg-primary/20 blur-[60px]"></div>
          <div className="absolute -left-10 -bottom-10 size-32 rounded-full bg-primary/10 blur-[50px]"></div>
          
          <div className="relative z-10 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <p className="text-[#baba9c] text-sm font-medium">Total Balance</p>
              <div className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 backdrop-blur-sm">
                <span className="material-symbols-outlined text-green-400 text-[16px]">trending_up</span>
                <span className="text-green-400 text-xs font-bold">+2.4%</span>
              </div>
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-white text-4xl font-extrabold tracking-tight">$24,500</span>
              <span className="text-[#baba9c] text-2xl font-bold">.50</span>
            </div>
            <div className="mt-6 flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-primary text-black font-bold text-sm hover:brightness-110 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-[20px]">add</span>
                Top Up
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-white/10 text-white font-bold text-sm border border-white/5 hover:bg-white/15 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-[20px]">swap_horiz</span>
                Exchange
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: 'Send', icon: 'send', tab: NavigationTab.SendMoney },
              { label: 'Request', icon: 'call_received' },
              { label: 'Scan', icon: 'qr_code_scanner' },
              { label: 'More', icon: 'more_horiz' },
            ].map((action, i) => (
              <button 
                key={i} 
                onClick={() => action.tab && onTabChange?.(action.tab)}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="size-14 rounded-2xl bg-[#1E1E1E] flex items-center justify-center border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <span className="material-symbols-outlined text-white text-[28px] group-hover:text-primary transition-colors">
                    {action.icon}
                  </span>
                </div>
                <span className="text-xs text-[#baba9c] font-medium group-hover:text-white transition-colors">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Promo Panel */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-[#1E1E1E] p-4 relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent"></div>
            <div className="flex items-center gap-4 z-10">
              <div className="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined">savings</span>
              </div>
              <div>
                <p className="text-white text-sm font-bold leading-tight">Savings Goal Reached!</p>
                <p className="text-[#baba9c] text-xs mt-1">You hit your $5k target.</p>
              </div>
            </div>
            <button className="z-10 flex h-8 px-4 items-center justify-center rounded-lg bg-primary text-black text-xs font-bold hover:bg-primary/90 transition-colors whitespace-nowrap">
              View Details
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white text-lg font-bold">Recent Activity</h4>
            <button className="text-primary text-sm font-bold hover:underline">See All</button>
          </div>
          <div className="flex flex-col gap-3">
            {/* Netflix */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#1E1E1E] hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-[#E50914] flex items-center justify-center text-white font-bold text-xs shrink-0">N</div>
                <div className="flex flex-col">
                  <p className="text-white font-bold text-sm">Netflix Subscription</p>
                  <p className="text-[#baba9c] text-xs">Today, 9:41 AM</p>
                </div>
              </div>
              <p className="text-white font-bold text-sm group-hover:text-red-400 transition-colors">-$15.99</p>
            </div>
            {/* Starbucks */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#1E1E1E] hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-[#006241] flex items-center justify-center text-white font-bold text-xs shrink-0">
                  <span className="material-symbols-outlined text-[20px]">coffee</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-white font-bold text-sm">Starbucks Coffee</p>
                  <p className="text-[#baba9c] text-xs">Yesterday, 8:30 AM</p>
                </div>
              </div>
              <p className="text-white font-bold text-sm group-hover:text-red-400 transition-colors">-$5.40</p>
            </div>
            {/* Salary */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#1E1E1E] hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                  <span className="material-symbols-outlined text-[20px]">work</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-white font-bold text-sm">Salary Deposit</p>
                  <p className="text-[#baba9c] text-xs">Oct 24, 10:00 AM</p>
                </div>
              </div>
              <p className="text-primary font-bold text-sm">+$3,200.00</p>
            </div>
            {/* Electric Bill */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#1E1E1E] hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
                  <span className="material-symbols-outlined text-[20px]">electric_bolt</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-white font-bold text-sm">Electric Bill</p>
                  <p className="text-[#baba9c] text-xs">Oct 22, 2:15 PM</p>
                </div>
              </div>
              <p className="text-white font-bold text-sm group-hover:text-red-400 transition-colors">-$124.50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
