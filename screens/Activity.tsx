
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { COLORS } from '../constants';

const data = [
  { name: 'Mon', amount: 450 },
  { name: 'Tue', amount: 320 },
  { name: 'Wed', amount: 840 },
  { name: 'Thu', amount: 150 },
  { name: 'Fri', amount: 620 },
  { name: 'Sat', amount: 950 },
  { name: 'Sun', amount: 200 },
];

const Activity: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-background overflow-y-auto no-scrollbar pb-32 px-6">
      <header className="pt-12 pb-8 flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold tracking-tight">Activity</h1>
        <p className="text-muted font-medium">Spending analytics for this week</p>
      </header>

      <section className="bg-surface rounded-3xl p-6 border border-white/5 mb-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-xs font-bold uppercase text-muted tracking-tighter mb-1">Total Spent</p>
            <h2 className="text-3xl font-black text-white">$3,530.00</h2>
          </div>
          <div className="bg-primary/10 px-3 py-1.5 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
            <span className="text-primary text-xs font-bold">+12%</span>
          </div>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#baba9c', fontSize: 12, fontWeight: 700 }} 
                dy={10}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                contentStyle={{ 
                  backgroundColor: '#222219', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  fontWeight: 'bold'
                }}
              />
              <Bar dataKey="amount" radius={[8, 8, 8, 8]} barSize={32}>
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.amount > 600 ? COLORS.primary : '#3a3a2a'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-extrabold text-lg mb-4">Spending by Category</h3>
        {[
          { category: 'Shopping', amount: 1540.20, percent: 45, icon: 'shopping_bag', color: 'bg-primary' },
          { category: 'Entertainment', amount: 890.00, percent: 25, icon: 'sports_esports', color: 'bg-orange-500' },
          { category: 'Utilities', amount: 450.50, percent: 18, icon: 'bolt', color: 'bg-blue-500' },
          { category: 'Dining', amount: 240.00, percent: 12, icon: 'restaurant', color: 'bg-green-500' },
        ].map((item, idx) => (
          <div key={idx} className="bg-surface/40 p-5 rounded-2xl border border-white/5 space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className={`size-10 rounded-xl ${item.color} flex items-center justify-center text-black`}>
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{item.category}</p>
                  <p className="text-xs text-muted font-bold">${item.amount.toFixed(2)}</p>
                </div>
              </div>
              <span className="text-white font-black text-sm">{item.percent}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className={`h-full ${item.color}`} style={{ width: `${item.percent}%` }} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Activity;
