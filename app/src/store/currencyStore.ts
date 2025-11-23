import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Currency {
    code: string;
    symbol: string;
    name: string;
}

export const CURRENCIES: Currency[] = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'BDT', symbol: '৳', name: 'Bangladeshi Taka' },
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
    { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' },
    { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
    { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
    { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc' },
    { code: 'PKR', symbol: '₨', name: 'Pakistani Rupee' },
    { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal' },
    { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham' },
];

interface CurrencyStore {
    selectedCurrency: Currency;
    setCurrency: (currency: Currency) => void;
}

export const useCurrencyStore = create<CurrencyStore>()(
    persist(
        (set) => ({
            selectedCurrency: CURRENCIES[0], // Default to USD
            setCurrency: (currency) => set({ selectedCurrency: currency }),
        }),
        {
            name: 'currency-storage',
        }
    )
);
