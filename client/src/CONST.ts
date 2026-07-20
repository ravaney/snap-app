import type { ActivityProps } from "./features/transactions/Activity";

export const NEON_PINK = "#c139a0";
export const VIVID_BLUE = "#0D47A1";
export const PINK = "#c2185b";
export const PASTEL_BLUE = "#a8c4ed";
export const DARK_BLUE = "#0a3d7a";
export const COLORS = {
  neonPink: NEON_PINK,
  vividBlue: VIVID_BLUE,
  pink: PINK,
  pastelBlue: PASTEL_BLUE,
  darkBlue: DARK_BLUE,
};

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const MOCK: ActivityProps[] = [
  {
    id: "1",
    description: "Salary",
    amount: 3250.0,
    category: "Income",
    date: "2026-06-20",
    isIncome: true,
  },
  {
    id: "2",
    description: "Freelance project",
    amount: 450.0,
    category: "Income",
    date: "2026-06-20",
    isIncome: true,
  },
  {
    id: "3",
    description: "Spotify",
    amount: 12.99,
    category: "Subscription",
    date: "2026-06-20",
    isIncome: false,
  },
  {
    id: "4",
    description: "Dinner out",
    amount: 48.3,
    category: "Food",
    date: "2026-06-19",
    isIncome: false,
  },
  {
    id: "5",
    description: "Groceries",
    amount: 87.45,
    category: "Food",
    date: "2026-06-19",
    isIncome: false,
  },
  {
    id: "6",
    description: "Electric bill",
    amount: 73.2,
    category: "Bills",
    date: "2026-06-19",
    isIncome: false,
  },
  {
    id: "7",
    description: "Netflix",
    amount: 15.99,
    category: "Subscription",
    date: "2026-06-18",
    isIncome: false,
  },
  {
    id: "8",
    description: "Coffee shop",
    amount: 6.75,
    category: "Food",
    date: "2026-06-18",
    isIncome: false,
  },
  {
    id: "9",
    description: "Refund – Amazon",
    amount: 39.99,
    category: "Income",
    date: "2026-06-18",
    isIncome: true,
  },
  {
    id: "10",
    description: "Gym membership",
    amount: 29.0,
    category: "Subscription",
    date: "2026-06-17",
    isIncome: false,
  },
  {
    id: "11",
    description: "Lunch with team",
    amount: 24.5,
    category: "Food",
    date: "2026-06-17",
    isIncome: false,
  },
  {
    id: "12",
    description: "Transport – Uber",
    amount: 18.3,
    category: "Bills",
    date: "2026-06-17",
    isIncome: false,
  },
  {
    id: "13",
    description: "Bonus",
    amount: 1200.0,
    category: "Income",
    date: "2026-06-16",
    isIncome: true,
  },
  {
    id: "14",
    description: "Internet bill",
    amount: 65.0,
    category: "Bills",
    date: "2026-06-16",
    isIncome: false,
  },
  {
    id: "15",
    description: "Birthday gift",
    amount: 45.0,
    category: "Food",
    date: "2026-06-15",
    isIncome: false,
  },
  {
    id: "16",
    description: "Savings deposit",
    amount: 500.0,
    category: "Income",
    date: "2026-06-15",
    isIncome: true,
  },
  {
    id: "17",
    description: "Water bill",
    amount: 32.5,
    category: "Bills",
    date: "2026-06-14",
    isIncome: false,
  },
  {
    id: "18",
    description: "Cinema tickets",
    amount: 22.0,
    category: "Food",
    date: "2026-06-14",
    isIncome: false,
  },
  {
    id: "19",
    description: "Phone bill",
    amount: 48.0,
    category: "Bills",
    date: "2026-06-13",
    isIncome: false,
  },
  {
    id: "20",
    description: "Side hustle",
    amount: 275.5,
    category: "Income",
    date: "2026-06-13",
    isIncome: true,
  },
];
