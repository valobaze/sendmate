
export type CardType = 'Virtual' | 'Physical';
export type CardSkin = 'yellow' | 'black' | 'white';

export interface Card {
  id: string;
  name: string;
  type: CardType;
  skin: CardSkin;
  number: string;
  expiry: string;
  limit: number;
  isFrozen: boolean;
  balance: number;
}

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: string;
  category: 'Shopping' | 'Food' | 'Transport' | 'Subscription' | 'Transfer';
  icon: string;
}

export enum NavigationTab {
  Home = 'Home',
  Cards = 'Cards',
  Activity = 'Activity',
  Settings = 'Settings',
  AI = 'AI',
  Bills = 'Bills',
  Crypto = 'Crypto',
  Profile = 'Profile',
  SendMoney = 'SendMoney'
}
