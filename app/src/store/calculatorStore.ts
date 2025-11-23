import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CalculatorState {
    loanAmount: number;
    interestRate: number;
    tenureMonths: number;
    setLoanAmount: (amount: number) => void;
    setInterestRate: (rate: number) => void;
    setTenureMonths: (months: number) => void;
    reset: () => void;
}

export const useCalculatorStore = create<CalculatorState>()(
    persist(
        (set) => ({
            loanAmount: 25000,
            interestRate: 9,
            tenureMonths: 14,
            setLoanAmount: (amount) => set({ loanAmount: amount }),
            setInterestRate: (rate) => set({ interestRate: rate }),
            setTenureMonths: (months) => set({ tenureMonths: months }),
            reset: () => set({ loanAmount: 25000, interestRate: 9, tenureMonths: 14 }),
        }),
        {
            name: 'calculator-storage',
        }
    )
);
