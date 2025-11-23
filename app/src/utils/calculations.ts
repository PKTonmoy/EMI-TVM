export interface EMIResult {
    monthlyEMI: number;
    principal: number;
    totalInterest: number;
    totalPayment: number;
    interestRate: number;
    tenureMonths: number;
}

export interface AmortizationRow {
    month: number;
    payment: number;
    principalPaid: number;
    interestPaid: number;
    balance: number;
}

/**
 * Calculate EMI using the Standard EMI Formula (Global):
 * EMI = [P × r × (1+r)^n] / [(1+r)^n – 1]
 * 
 * Where:
 * P = Loan Principal
 * r = Monthly interest rate (Annual rate / 12)
 * n = Number of months
 */
export const calculateEMI = (
    principal: number,
    annualRate: number,
    tenureMonths: number
): EMIResult => {
    // P = Loan Principal
    const P = principal;

    // r = Monthly interest rate (Annual rate ÷ 12)
    // We divide by 100 because input is in percentage (e.g. 10%)
    const r = annualRate / 12 / 100;

    // n = Number of months
    const n = tenureMonths;

    let emi: number;

    if (annualRate === 0) {
        // Special case: 0% interest
        emi = P / n;
    } else {
        // Formula: EMI = [P × r × (1+r)^n] / [(1+r)^n – 1]
        const powerTerm = Math.pow(1 + r, n);
        emi = (P * r * powerTerm) / (powerTerm - 1);
    }

    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    return {
        monthlyEMI: Math.round(emi * 100) / 100,
        totalInterest: Math.round(totalInterest * 100) / 100,
        totalPayment: Math.round(totalPayment * 100) / 100,
        principal: P,
        interestRate: annualRate,
        tenureMonths: n,
    };
};

/**
 * Generate full amortization schedule using the Universal Method
 * 
 * Calculation logic per month:
 * Step 1 -> Interest = Remaining Principal × r
 * Step 2 -> Principal portion = EMI – Interest
 * Step 3 -> New balance = Old balance – Principal portion
 */
export const generateAmortizationSchedule = (
    emiResult: EMIResult
): AmortizationRow[] => {
    const { principal, interestRate, tenureMonths, monthlyEMI } = emiResult;
    const r = interestRate / 12 / 100;

    const schedule: AmortizationRow[] = [];
    let balance = principal;

    for (let month = 1; month <= tenureMonths; month++) {
        // Step 1 -> Interest = Remaining Principal × r
        const interestPaid = balance * r;

        // Step 2 -> Principal portion = EMI – Interest
        const principalPaid = monthlyEMI - interestPaid;

        // Step 3 -> New balance = Old balance – Principal portion
        balance = balance - principalPaid;

        // Handle final month rounding to ensure balance is exactly 0
        if (month === tenureMonths) {
            balance = 0;
        }

        schedule.push({
            month,
            payment: Math.round(monthlyEMI * 100) / 100,
            principalPaid: Math.round(principalPaid * 100) / 100,
            interestPaid: Math.round(interestPaid * 100) / 100,
            balance: Math.max(0, Math.round(balance * 100) / 100),
        });
    }

    return schedule;
};

/**
 * Format currency for display
 */
export const formatCurrency = (amount: number, currency = '₹'): string => {
    return `${currency}${Math.round(amount).toLocaleString('en-IN')}`;
};

/**
 * Format currency with compact notation (M for millions, B for billions, T for trillions)
 * Rules:
 * - Less than 1,000,000: show normally
 * - 1,000,000 to 999,999,999: divide by 1,000,000 and show with M (Million)
 * - 1,000,000,000 to 999,999,999,999: divide by 1,000,000,000 and show with B (Billion)
 * - 1,000,000,000,000 or more: divide by 1,000,000,000,000 and show with T (Trillion)
 * Always keeps 2 decimal places for M, B, T
 * 
 * @param amount - The amount to format
 * @param currency - Currency symbol (default: ₹)
 * @returns Formatted string with M, B, or T suffix for large numbers
 * 
 * Examples:
 * - 1,850,000 → ₹1.85M
 * - 4,450,000,000 → ₹4.45B
 * - 8,700,000,000,000 → ₹8.70T
 */
export const formatCompactCurrency = (amount: number, currency = '₹'): string => {
    const absAmount = Math.abs(amount);

    if (absAmount >= 1_000_000_000_000) {
        // Trillions
        const trillions = amount / 1_000_000_000_000;
        return `${currency}${trillions.toFixed(2)}T`;
    } else if (absAmount >= 1_000_000_000) {
        // Billions
        const billions = amount / 1_000_000_000;
        return `${currency}${billions.toFixed(2)}B`;
    } else if (absAmount >= 1_000_000) {
        // Millions
        const millions = amount / 1_000_000;
        return `${currency}${millions.toFixed(2)}M`;
    } else {
        // Below million, show full number
        return `${currency}${Math.round(amount).toLocaleString('en-IN')}`;
    }
};

/**
 * Format percentage
 */
export const formatPercentage = (value: number): string => {
    return `${value.toFixed(2)}%`;
};

/**
 * Calculate Present Value (PV)
 * PV = FV / (1 + r)^n
 * 
 * Where:
 * FV = Future Value
 * r = Rate per period
 * n = Number of periods
 */
export const calculatePV = (
    futureValue: number,
    rate: number,
    n: number
): number => {
    return futureValue / Math.pow(1 + rate, n);
};
