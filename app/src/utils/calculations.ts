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
 * Calculate EMI using the formula:
 * EMI = [P × r × (1+r)^n] / [(1+r)^n – 1]
 * 
 * Where:
 * P = Principal loan amount
 * r = Monthly interest rate (annual rate / 12 / 100)
 * n = Tenure in months
 */
export const calculateEMI = (
    principal: number,
    annualRate: number,
    tenureMonths: number
): EMIResult => {
    const monthlyRate = annualRate / 12 / 100;
    const powerTerm = Math.pow(1 + monthlyRate, tenureMonths);

    let monthlyEMI: number;

    if (annualRate === 0) {
        // If interest rate is 0, EMI is simply principal divided by tenure
        monthlyEMI = principal / tenureMonths;
    } else {
        monthlyEMI = (principal * monthlyRate * powerTerm) / (powerTerm - 1);
    }

    const totalPayment = monthlyEMI * tenureMonths;
    const totalInterest = totalPayment - principal;

    return {
        monthlyEMI: Math.round(monthlyEMI * 100) / 100,
        totalInterest: Math.round(totalInterest * 100) / 100,
        totalPayment: Math.round(totalPayment * 100) / 100,
        principal,
        interestRate: annualRate,
        tenure: tenureMonths,
    };
};

/**
 * Generate full amortization schedule
 */
export const generateAmortizationSchedule = (
    emiResult: EMIResult
): AmortizationRow[] => {
    const { principal, interestRate, tenure, monthlyEMI } = emiResult;
    const monthlyRate = interestRate / 12 / 100;

    const schedule: AmortizationRow[] = [];
    let balance = principal;

    for (let month = 1; month <= tenure; month++) {
        const interestPaid = balance * monthlyRate;
        const principalPaid = monthlyEMI - interestPaid;
        balance = balance - principalPaid;

        // Handle final month rounding
        if (month === tenure) {
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
export const formatCurrency = (amount: number, prefix: string = '$'): string => {
    return `${prefix}${Math.round(amount).toLocaleString()}`;
};

/**
 * Format percentage
 */
export const formatPercentage = (value: number): string => {
    return `${value.toFixed(1)}%`;
};
