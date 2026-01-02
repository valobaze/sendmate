
import React, { useState } from 'react';
import { NavigationTab } from './types';
import BottomNav from './components/BottomNav';
import Dashboard from './screens/Dashboard';
import CardsManager from './screens/CardsManager';
import Activity from './screens/Activity';
import AIScreen from './screens/AIScreen';
import Bills from './screens/Bills';
import SendCrypto from './screens/SendCrypto';
import Profile from './screens/Profile';
import SendMoney from './screens/SendMoney';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>(NavigationTab.Home);

  const renderContent = () => {
    switch (activeTab) {
      case NavigationTab.Home:
        return <Dashboard onTabChange={setActiveTab} />;
      case NavigationTab.Cards:
        return <CardsManager />;
      case NavigationTab.Activity:
        return <Activity />;
      case NavigationTab.Bills:
        return <Bills />;
      case NavigationTab.Crypto:
        return <SendCrypto />;
      case NavigationTab.Profile:
        return <Profile />;
      case NavigationTab.SendMoney:
        return <SendMoney />;
      case NavigationTab.AI:
        return <AIScreen />;
      case NavigationTab.Settings:
        return (
          <div className="flex flex-col items-center justify-center h-full px-6 text-center space-y-4 bg-[#121212]">
            <span className="material-symbols-outlined text-6xl text-[#baba9c]">settings</span>
            <h1 className="text-2xl font-black text-white">Settings</h1>
            <p className="text-[#baba9c]">Manage your security, limits, and personal information here.</p>
            <button className="bg-[#1E1E1E] border border-white/10 px-8 py-3 rounded-2xl font-bold text-white hover:bg-white/5 transition-colors">Log Out</button>
          </div>
        );
      default:
        return <Dashboard onTabChange={setActiveTab} />;
    }
  };

  return (
    <div className="max-w-md mx-auto h-screen w-full relative bg-[#121212] shadow-2xl flex flex-col overflow-hidden">
      {/* Dynamic Content */}
      <main className="flex-1 overflow-hidden relative">
        {renderContent()}
      </main>

      {/* Persistent Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
