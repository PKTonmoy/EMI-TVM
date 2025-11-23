import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { RingChart } from '../components/charts/RingChart';
import { TenureToggle, type TenureUnit } from '../components/common/TenureToggle';
import { InputField } from '../components/common/InputField';
import { CurrencySelector } from '../components/common/CurrencySelector';
import { calculateEMI, formatCompactCurrency } from '../utils/calculations';
import { useCurrencyStore } from '../store/currencyStore';
import { useCalculatorStore } from '../store/calculatorStore';
import type { EMIResult } from '../utils/calculations';
import './Home.css';

export const Home: React.FC = () => {
    const navigate = useNavigate();
    const [view, setView] = useState<'input' | 'results'>('input');
    const [loanAmount, setLoanAmount] = useState('5000000');
    const [tenure, setTenure] = useState('10');
    const [tenureUnit, setTenureUnit] = useState<TenureUnit>('years');
    const [interestRate, setInterestRate] = useState('9.5');
    const [emiResult, setEmiResult] = useState<EMIResult | null>(null);

    const { selectedCurrency } = useCurrencyStore();
    const { setLoanAmount: setStoreLoanAmount, setTenureMonths, setInterestRate: setStoreInterestRate } = useCalculatorStore();

    const handleCalculate = () => {
        const amount = parseFloat(loanAmount) || 0;
        const rate = parseFloat(interestRate) || 0;
        const tenureValue = parseFloat(tenure) || 0;
        const tenureMonths = tenureUnit === 'years' ? tenureValue * 12 : tenureValue;

        // Update calculator store for breakdown page
        setStoreLoanAmount(amount);
        setTenureMonths(tenureMonths);
        setStoreInterestRate(rate);

        // Calculate and set result
        const result = calculateEMI(amount, rate, tenureMonths);
        setEmiResult(result);
        setView('results');
    };

    const handleBack = () => {
        setView('input');
    };

    const handleViewBreakdown = () => {
        navigate('/breakdown');
    };

    if (view === 'input') {
        return (
            <div className="home-page">
                <div className="home-content">
                    <h1 className="page-title">Loan<br />EMI Calculator</h1>

                    <Card>
                        <CurrencySelector />

                        <InputField
                            label="Loan Amount"
                            value={loanAmount}
                            onChange={setLoanAmount}
                            type="number"
                            prefix={selectedCurrency.symbol}
                        />

                        <div className="tenure-input-group">
                            <InputField
                                label="Loan Tenure"
                                value={tenure}
                                onChange={setTenure}
                                type="number"
                                suffix={<TenureToggle value={tenureUnit} onChange={setTenureUnit} />}
                            />
                        </div>

                        <InputField
                            label="Interest Rate"
                            value={interestRate}
                            onChange={setInterestRate}
                            type="number"
                            suffix="%"
                            step="0.1"
                        />

                        <Button
                            variant="primary"
                            size="large"
                            fullWidth
                            onClick={handleCalculate}
                        >
                            Calculate EMI
                        </Button>
                    </Card>
                </div>
            </div>
        );
    }

    // Results View
    if (!emiResult) return null;

    const chartData = [
        {
            name: 'Principal Amount',
            value: emiResult.principal,
            color: '#0A2463',
        },
        {
            name: 'Interest Payable',
            value: emiResult.totalInterest,
            color: '#60A5FA',
        },
    ];

    return (
        <div className="home-page">
            <div className="home-content">
                <button className="back-button-simple" onClick={handleBack}>
                    ← Back
                </button>

                <Card>
                    <div className="result-chart-container">
                        <RingChart
                            data={chartData}
                            centerContent={
                                <div className="chart-center">
                                    <div className="chart-center-label">Your EMI is</div>
                                    <div className="chart-center-value">
                                        {formatCompactCurrency(emiResult.monthlyEMI, selectedCurrency.symbol)}
                                    </div>
                                    <div className="chart-center-sublabel">per Month</div>
                                </div>
                            }
                        />
                    </div>

                    <div className="result-breakdown">
                        <div className="breakdown-item">
                            <span className="breakdown-label">Principal Amount</span>
                            <span className="breakdown-value">
                                {formatCompactCurrency(emiResult.principal, selectedCurrency.symbol)}
                            </span>
                        </div>
                        <div className="breakdown-item">
                            <span className="breakdown-label">Total Interest</span>
                            <span className="breakdown-value">
                                {formatCompactCurrency(emiResult.totalInterest, selectedCurrency.symbol)}
                            </span>
                        </div>
                        <div className="breakdown-item">
                            <span className="breakdown-label">Total Payment</span>
                            <span className="breakdown-value">
                                {formatCompactCurrency(emiResult.totalPayment, selectedCurrency.symbol)}
                            </span>
                        </div>
                    </div>
                </Card>

                <Button
                    variant="secondary"
                    size="large"
                    fullWidth
                    onClick={handleViewBreakdown}
                >
                    View Full Breakdown
                </Button>

                <Button
                    variant="text"
                    size="medium"
                    fullWidth
                    onClick={() => setView('input')}
                >
                    Recalculate
                </Button>
            </div>
        </div>
    );
};

