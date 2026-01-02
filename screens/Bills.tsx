
import React from 'react';

const Bills: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#181811] overflow-y-auto no-scrollbar pb-32">
      {/* Top App Bar */}
      <div className="sticky top-0 z-50 bg-[#181811]/95 backdrop-blur-sm p-4 flex items-center justify-between border-b border-white/5">
        <button className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-2 text-white">Pay Bills</h1>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-2xl text-white">settings</span>
        </button>
      </div>

      {/* Hero Section: Total Due */}
      <div className="px-6 pt-6 pb-2">
        <p className="text-sm font-medium text-gray-400 mb-1">Total due this month</p>
        <div className="flex items-baseline gap-2">
          <h2 className="text-4xl font-extrabold tracking-tight text-white">$450.00</h2>
          <span className="px-2 py-1 rounded-full bg-red-900/30 text-red-400 text-xs font-bold uppercase tracking-tighter">3 Pending</span>
        </div>
      </div>

      {/* Quick Pay Section */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-6 mb-3">
          <h3 className="text-lg font-bold text-white">Quick Pay</h3>
          <button className="text-xs font-bold text-primary hover:opacity-80">View All</button>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-4 px-6 pb-4">
          {/* Add New */}
          <button className="flex flex-col items-center gap-2 min-w-[72px]">
            <div className="size-16 rounded-full border-2 border-dashed border-gray-700 flex items-center justify-center bg-transparent text-gray-500 hover:border-primary hover:text-primary transition-colors">
              <span className="material-symbols-outlined">add</span>
            </div>
            <span className="text-xs font-medium text-center truncate w-full text-gray-400">Add New</span>
          </button>
          {/* Sarah M. */}
          <button className="flex flex-col items-center gap-2 min-w-[72px]">
            <div className="size-16 rounded-full bg-surface-dark relative overflow-hidden ring-2 ring-transparent hover:ring-primary transition-all">
              <img alt="Sarah" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpEi-SBY6wBeUd2vCeYC1KRKgyvmNZnKq1XtnCdH6Hty07UrZHyHqLmym92UUvWbt7QD23ylvIymUfz_GPmTQ-huWA8zZrbAXYFqSYn1mPySZIA7rNmzi86BA_FlkpBdk1jvFhyU48tNBKoOisgZGjIV3xiUhlYC_thD5cwopruNb6fAAectiCLkT7zi7t1gdQlYfeNVF2FBpGhyK6ZrbldtyRR_B8ubMG6wHliHEtnGxTTkDErCngn4SmgP8tZgHpqXWwLCPbk70e"/>
            </div>
            <span className="text-xs font-medium text-center truncate w-full text-white">Sarah M.</span>
          </button>
          {/* Apple One */}
          <button className="flex flex-col items-center gap-2 min-w-[72px]">
            <div className="size-16 rounded-full bg-white relative overflow-hidden ring-2 ring-transparent hover:ring-primary transition-all flex items-center justify-center p-3">
              <img alt="Apple" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVzvPQ7jctB86JLghenL_Kkh8mbsebxpemMLVK1nyrMt3nuZKSjRQo2Pl81eF4pQnnhJN8n1vbYjFikbxRl94-RddfwZnO4VJZxonAL9sKfcAXdO8kMkQRfLbL9qc2Rijp_zCYMrYFsq1ptyE4-VYfL6bJumJ50eZrj_FpyMegaarV966I-A_yx2xX02j7wbGT7i9YJvHWBpK4t7tmb9aSnOVsCjWV7nRj9jBXjgzbe6V58B2KSfFvEcPn67lKvRto1U0bUiux_YUA"/>
            </div>
            <span className="text-xs font-medium text-center truncate w-full text-white">Apple One</span>
          </button>
          {/* David K. */}
          <button className="flex flex-col items-center gap-2 min-w-[72px]">
            <div className="size-16 rounded-full bg-surface-dark relative overflow-hidden ring-2 ring-transparent hover:ring-primary transition-all">
              <img alt="David" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGr-dldmKM8ZPFq2Nahw8Ixavpi0VeQp1Fn4X2IPd_etnrvrQtwHmiNsyCCPmy1b3CzOxGjTDppJ-RAWgBFPJBAI8MxhzVwwLDdt2zVaSODQGCekbNp8Q43VKxHQT3IOtiOaLiC2UyzufhVD-EjeaayO8IDE25i5uKQHexnR4R8rfqw_G4_BN9WspIoEMUSvlQUzV71Nf57FrWOtKcauri0mNaQC4znRLrSzCjiIIM5FdWld6BHPLM9mDfMt9tVM5k-Xlw2XcwWDzM"/>
            </div>
            <span className="text-xs font-medium text-center truncate w-full text-white">David K.</span>
          </button>
          {/* Netflix */}
          <button className="flex flex-col items-center gap-2 min-w-[72px]">
            <div className="size-16 rounded-full bg-blue-600 relative overflow-hidden ring-2 ring-transparent hover:ring-primary transition-all flex items-center justify-center text-white font-bold text-xl">
              N
            </div>
            <span className="text-xs font-medium text-center truncate w-full text-white">Netflix</span>
          </button>
        </div>
      </div>

      {/* Upcoming Due Card */}
      <div className="mt-4 px-4">
        <h3 className="text-lg font-bold px-2 mb-3 text-white">Upcoming Due</h3>
        <div className="bg-[#222219] rounded-xl p-4 border border-white/5">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-white/5 flex-shrink-0 flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-3xl text-primary">bolt</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-base font-bold text-white leading-tight">Electric Co.</h4>
                  <p className="text-sm text-gray-400 mt-1">Utility Bill #4902</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-white">$124.50</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-primary bg-primary/10 px-2 py-1 rounded text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span>Due Tomorrow</span>
                </div>
                <button className="bg-primary text-black hover:bg-yellow-300 active:scale-95 transition-all rounded-lg px-4 py-2 text-sm font-bold flex items-center gap-2">
                  Pay Now
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Billers List */}
      <div className="mt-8 px-4">
        <h3 className="text-lg font-bold px-2 mb-3 text-white">All Billers</h3>
        <div className="flex flex-col gap-2">
          {/* Internet */}
          <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400">
                <span className="material-symbols-outlined">wifi</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">Internet Provider</p>
                <p className="text-xs text-gray-500">Monthly • Due Oct 28</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-white">$65.00</p>
              <span className="text-[10px] text-gray-500">Unpaid</span>
            </div>
          </div>
          {/* Water */}
          <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                <span className="material-symbols-outlined">water_drop</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">City Water</p>
                <p className="text-xs text-gray-500">Monthly • Due Nov 01</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-white">$42.30</p>
              <span className="text-[10px] text-green-400">Auto-pay on</span>
            </div>
          </div>
          {/* Rent */}
          <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group opacity-60">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-green-900/30 flex items-center justify-center text-green-400">
                <span className="material-symbols-outlined">home</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">Rent</p>
                <p className="text-xs text-gray-500">Paid Oct 01</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-white line-through decoration-gray-500">$1,200.00</p>
              <span className="text-[10px] text-gray-500">Paid</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-24 right-4 z-40">
        <button className="bg-primary hover:bg-yellow-300 text-black shadow-lg shadow-primary/20 rounded-full size-14 flex items-center justify-center transition-transform hover:scale-105 active:scale-95">
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>
      </div>
    </div>
  );
};

export default Bills;
