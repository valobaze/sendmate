
import React, { useState } from 'react';

const Profile: React.FC = () => {
  const [faceIdEnabled, setFaceIdEnabled] = useState(true);

  return (
    <div className="flex flex-col h-full bg-[#121212] overflow-y-auto no-scrollbar pb-32">
      {/* Top App Bar */}
      <div className="flex items-center px-4 pt-12 pb-2 justify-between shrink-0">
        <button className="text-white p-2 hover:bg-white/5 rounded-full transition-colors">
          <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
        </button>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Profile</h2>
        <button className="text-white p-2 hover:bg-white/5 rounded-full transition-colors">
          <span className="material-symbols-outlined text-[24px]">more_horiz</span>
        </button>
      </div>

      {/* Profile Header */}
      <div className="flex flex-col items-center px-6 pt-6 pb-8">
        <div className="relative">
          <div 
            className="bg-center bg-no-repeat bg-cover rounded-full h-28 w-28 ring-4 ring-[#2C2C2C]" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1SKKtVQySrXephRksVwP03cKwh5drIQp9i2mWif-lmUB-ip_qbUOFGL367EnB9UXsfp8lrmrgGZAnLblOLv-7TUToXFECoLSsdclg2iFhszUyTbdUdc8nvIFcDuNEwYi__YsA1n4pqLIg1jk9seErKa_4ovCk66jgiP3cFzbfjtwBEOcWpVS3EMEI9CAFJyCbIE5M5MnFEX8KFhmmkGgI_A5YfaHJqD4L5kLg14RjFQ0sLn2hpjWrH8jGYVIxB1nxolH7iehQWO0A")' }}
          />
          <button className="absolute bottom-0 right-0 bg-primary text-black p-1.5 rounded-full border-2 border-[#121212] flex items-center justify-center hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[16px] font-bold">edit</span>
          </button>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <h1 className="text-white text-2xl font-bold tracking-tight">Alex Johnson</h1>
          <p className="text-gray-400 text-sm mt-1">ID: 982374 • Member Since 2021</p>
          <div className="mt-3 bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-primary/30">
            Pro Member
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-3 gap-3 px-4 mb-8">
        {[
          { label: 'My Cards', icon: 'credit_card' },
          { label: 'Statements', icon: 'description' },
          { label: 'Support', icon: 'headset_mic' },
        ].map((item, idx) => (
          <button key={idx} className="flex flex-col items-center justify-center gap-2 rounded-xl bg-[#1E1E1E] p-4 active:scale-95 transition-all border border-white/5 hover:border-white/10">
            <span className="material-symbols-outlined text-white text-[28px]">{item.icon}</span>
            <span className="text-white text-[10px] font-bold uppercase tracking-tight">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Account Settings Section */}
      <div className="px-4 mb-6">
        <h3 className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3 ml-2">Account</h3>
        <div className="flex flex-col bg-[#1E1E1E] rounded-xl overflow-hidden border border-white/5">
          <button className="flex items-center justify-between p-4 border-b border-[#2C2C2C] active:bg-[#2C2C2C] transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2C2C2C] text-white">
                <span className="material-symbols-outlined text-[20px]">person</span>
              </div>
              <span className="text-white text-base font-medium">Personal Details</span>
            </div>
            <span className="material-symbols-outlined text-gray-500 text-[20px]">chevron_right</span>
          </button>
          <button className="flex items-center justify-between p-4 border-b border-[#2C2C2C] active:bg-[#2C2C2C] transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2C2C2C] text-white">
                <span className="material-symbols-outlined text-[20px]">notifications</span>
              </div>
              <span className="text-white text-base font-medium">Notifications</span>
            </div>
            <span className="material-symbols-outlined text-gray-500 text-[20px]">chevron_right</span>
          </button>
          <button className="flex items-center justify-between p-4 active:bg-[#2C2C2C] transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-[20px]">card_giftcard</span>
              </div>
              <span className="text-white text-base font-medium">Refer a Friend</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded">Earn $50</span>
              <span className="material-symbols-outlined text-gray-500 text-[20px]">chevron_right</span>
            </div>
          </button>
        </div>
      </div>

      {/* Security Section */}
      <div className="px-4 mb-6">
        <h3 className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3 ml-2">Security</h3>
        <div className="flex flex-col bg-[#1E1E1E] rounded-xl overflow-hidden border border-white/5">
          <button className="flex items-center justify-between p-4 border-b border-[#2C2C2C] active:bg-[#2C2C2C] transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2C2C2C] text-white">
                <span className="material-symbols-outlined text-[20px]">lock</span>
              </div>
              <span className="text-white text-base font-medium">Change PIN</span>
            </div>
            <span className="material-symbols-outlined text-gray-500 text-[20px]">chevron_right</span>
          </button>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2C2C2C] text-white">
                <span className="material-symbols-outlined text-[20px]">face</span>
              </div>
              <span className="text-white text-base font-medium">Face ID Login</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={faceIdEnabled}
                onChange={() => setFaceIdEnabled(!faceIdEnabled)}
              />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-4 mb-8">
        <button className="w-full py-4 rounded-xl border border-red-500/30 text-red-500 hover:bg-red-500/10 active:bg-red-500/20 font-bold transition-all">
          Log Out
        </button>
        <p className="text-center text-gray-500 text-[10px] mt-4 font-bold tracking-widest uppercase opacity-50">App Version 2.4.1</p>
      </div>
    </div>
  );
};

export default Profile;
