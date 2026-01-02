
import React from 'react';

export const COLORS = {
  primary: '#f2f20d',
  background: '#181811',
  surface: '#222219',
  muted: '#baba9c',
};

export const MOCK_CARDS = [
  {
    id: '1',
    name: 'Main Spending',
    type: 'Physical',
    skin: 'yellow',
    number: '•••• •••• •••• 4291',
    expiry: '12/28',
    limit: 5000,
    isFrozen: false,
    balance: 1450.20,
  },
  {
    id: '2',
    name: 'Subscription Card',
    type: 'Virtual',
    skin: 'black',
    number: '•••• •••• •••• 8832',
    expiry: '05/27',
    limit: 1000,
    isFrozen: false,
    balance: 82.15,
  }
];

export const MOCK_TRANSACTIONS = [
  {
    id: 't1',
    title: 'Apple Store',
    amount: -1299.00,
    date: 'Today',
    category: 'Shopping',
    icon: 'shopping_bag',
  },
  {
    id: 't2',
    title: 'Uber Eats',
    amount: -42.50,
    date: 'Yesterday',
    category: 'Food',
    icon: 'restaurant',
  },
  {
    id: 't3',
    title: 'Subscription Pay',
    amount: -15.99,
    date: 'Yesterday',
    category: 'Subscription',
    icon: 'auto_renew',
  },
  {
    id: 't4',
    title: 'Salary Deposit',
    amount: 4500.00,
    date: 'Oct 25',
    category: 'Transfer',
    icon: 'payments',
  },
];
