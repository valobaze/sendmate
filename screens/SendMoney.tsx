
import React, { useState } from 'react';

const SendMoney: React.FC = () => {
  const [amount, setAmount] = useState('125.00');

  return (
    <div className="flex flex-col h-full bg-[#181811] overflow-y-auto no-scrollbar pb-32">
      {/* Header */}
      <header className="flex items-center px-4 py-4 pt-12 pb-4 justify-between bg-[#181811] sticky top-0 z-20">
        <button className="text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Send Money</h2>
      </header>

      {/* Amount Section */}
      <div className="flex flex-col items-center justify-center px-6 py-6 space-y-2">
        <p className="text-[#baba9c] text-sm font-medium tracking-wide uppercase">Enter Amount</p>
        <div className="relative flex items-center justify-center">
          <span className="text-white text-5xl font-bold tracking-tight">$</span>
          <input 
            className="bg-transparent border-none text-center text-6xl font-extrabold text-white focus:ring-0 p-0 w-[240px] placeholder-gray-700 caret-primary" 
            placeholder="0.00" 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 bg-[#24241a]/50 px-3 py-1.5 rounded-full border border-white/5 mt-2">
          <span className="material-symbols-outlined text-[#baba9c] text-sm">account_balance_wallet</span>
          <p className="text-[#baba9c] text-xs font-semibold">Balance: $2,450.00</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-4 sticky top-[72px] z-10 bg-[#181811]">
        <label className="flex w-full items-center gap-3 rounded-xl bg-[#24241a] px-4 py-3 shadow-inner ring-1 ring-transparent focus-within:ring-primary transition-all duration-200">
          <span className="material-symbols-outlined text-[#baba9c]">search</span>
          <input className="w-full bg-transparent border-none p-0 text-base font-medium text-white placeholder-[#baba9c] focus:ring-0 focus:outline-none" placeholder="Name, @username, or phone" type="text"/>
        </label>
      </div>

      {/* Recent Contacts */}
      <div className="flex flex-col gap-3 px-4 py-2">
        <h3 className="text-white text-base font-bold leading-tight">Recent</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x">
          {/* Add New */}
          <div className="flex flex-col items-center gap-2 min-w-[72px] snap-start">
            <button className="size-16 rounded-full bg-[#24241a] border-2 border-dashed border-[#baba9c]/40 flex items-center justify-center text-primary hover:border-primary transition-colors">
              <span className="material-symbols-outlined">add</span>
            </button>
            <span className="text-xs font-medium text-[#baba9c] truncate w-full text-center">New</span>
          </div>
          {/* Contacts */}
          {[
            { name: 'Alice', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2iF5mRWIlIcUh5cVlPwZRAaHni3M2RknZpMk2OIeG6EpekgN2NYDuoAj9Aam35xuaf3P1L4-PWX6WxdflXXPqGk0pqZ3YJFtMPteE85w4r-kDtG63FeAaXeGpsrivVJtwRoeKxRx2WHnsN9UtXOGyfxsqmDy9vdfDfaa2aoMqMBF8i4SGMlBJqg79F8oDgEpcoYBBnyGEuykBnwXuKuBpd5oh6xfidaKfy8l7hemMcvpDtE5fY-pappJmyLHEjDfAxzp40kjGyCpL' },
            { name: 'Robert', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmPfWF_kZolKxEZkZRceKXt9TTyMxxVYmnwre9Fr_rP8e5pnO9PIKJb7ucCZq3Dt452ZnYQVci1KgchS-L2SBoZwgV26HctC0dOPk2smEjBn2oxKGnNyukPoFhCYMEFAEKn_FJOM61EpiswdtFMc0kPyHcb1KZYqZwN2aH1zO7uzxeS-cZfEcizYp-xL_sPWI2pSPLL_e3mAx602_m2AA58tyBOlJM8fTR06Luqm864s_JN2WlvKSAl2cH5XaeY10IueP8yyBUq9vF', active: true },
            { name: 'Marcus', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB-QFkzUbKMqj52zSfiyCG_MuFfyX9JRWP4RP9l_xWRFm7YFeRWsaReaUnLIgGdWlrNzMsxsV6ynDCwmwRMGkOuCuUFcz9JvgsUvBhqfDQ26XCcISbYU9OWz46ZWm4DbOSnjEtGVdUyeBTtcYVo8mNa4buoikcSjNXjCFaj19Xop0Lq7FaNRjSpfEDbHW2WYWtfX8FnMaHATAjVMylo452NtURt27t62a4pdtR4pSsdVq1V3obzC_D9NsnCf70e-XNs_5MjmB7vFTD' }
          ].map((c, i) => (
            <div key={i} className="flex flex-col items-center gap-2 min-w-[72px] snap-start group cursor-pointer">
              <div className="relative size-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all">
                <img alt={c.name} className="h-full w-full object-cover" src={c.img}/>
                {c.active && <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-[#181811]"></div>}
              </div>
              <span className="text-xs font-medium text-white truncate w-full text-center">{c.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* All Contacts List */}
      <div className="flex flex-col px-4 pt-2 pb-24 space-y-1">
        <h3 className="text-white text-base font-bold leading-tight mb-2">All Contacts</h3>
        <button className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group text-left w-full">
          <div className="relative size-12 rounded-full overflow-hidden shrink-0">
            <img alt="David" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEplA9vU9CMrajMXlBwXmMjwGJ-XWsJvaJYtpH_-sEXaeRfm4xY5GxPgyct7xQLe-g_tD9Er-2KvOxAFADWxELyidup_KWfAV6TCoc4QDJrjDFhX5OPn0yTObon73z0MKbyafyf_CioOoguse_W0iRfhP7SdfEUIPJufq7OjcVzR8DaDZPAfJu4kOsuqSuVejpwq924D08AW2vDSyaQq3SR8UMq_j1cun_RlxJD2BHXE0ZPDOCseW2bfIBXgx7YyfaiNYIdCoY6hBq"/>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white truncate">David Miller</p>
            <p className="text-xs text-[#baba9c] truncate">@davidm • +1 (555) 123-4567</p>
          </div>
          <span className="material-symbols-outlined text-[#baba9c] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
        </button>
        <button className="flex items-center gap-4 p-3 rounded-xl bg-primary/10 border border-primary/20 transition-colors group text-left w-full">
          <div className="relative size-12 rounded-full overflow-hidden shrink-0 ring-2 ring-primary ring-offset-2 ring-offset-[#181811]">
            <img alt="Sarah" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXPcmayvawHarvV9YPpQF0X-gYH523_e-O-nj_vR6NfpfVhJAYJNl3F-65sEtlpQNFXWgCiYvK4U3AePsFw0_RZNBS-wfKiLcB9Hhpmw7HK29WpQMNq9EMIi0jl2RI1qnWLMnk1APyGi4uqaZ4zisvK1R64yDbkUsAJWCJbJmnKBmIIMmCYdbGT8XEPbofAn-heOlRhCbKmAKVwsi4JyiyA3iLxKeX2QZWNlj5LAO6cBzOIkJUMLmgIU2aKBI7VO7jtMZexMVsVRlq"/>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white truncate">Sarah Connor</p>
            <p className="text-xs text-[#baba9c] truncate">@sarahc • +1 (555) 987-6543</p>
          </div>
          <div className="size-6 bg-primary rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-black text-sm font-bold">check</span>
          </div>
        </button>
      </div>

      {/* Floating CTA Button */}
      <div className="fixed bottom-[100px] left-0 right-0 px-4 z-30 max-w-md mx-auto">
        <button className="w-full bg-primary hover:bg-[#d9d900] active:scale-[0.98] transition-all text-black font-bold text-lg py-4 rounded-xl shadow-[0_4px_14px_rgba(242,242,13,0.4)] flex items-center justify-center gap-2">
          Review & Send <span className="material-symbols-outlined text-xl">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default SendMoney;
