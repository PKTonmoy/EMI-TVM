import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Slider } from '../components/common/Slider';
import { RingChart } from '../components/charts/RingChart';
import { CurrencySelector } from '../components/common/CurrencySelector';
import { calculateEMI, formatCurrency } from '../utils/calculations';
import { useCalculatorStore } from '../store/calculatorStore';
import { useCurrencyStore } from '../store/currencyStore';
import type { EMIResult } from '../utils/calculations';
import './Home.css';

export const Home: React.FC = () => {
    const navigate = useNavigate();
    const {
        loanAmount,
        interestRate,
        tenureMonths,
        setLoanAmount,
        setInterestRate,
        setTenureMonths,
        reset
    } = useCalculatorStore();

    const { selectedCurrency } = useCurrencyStore();

    const [emiResult, setEmiResult] = useState<EMIResult | null>(null);

    useEffect(() => {
        const result = calculateEMI(loanAmount, interestRate, tenureMonths);
        setEmiResult(result);
    }, [loanAmount, interestRate, tenureMonths]);

    if (!emiResult) return null;

    const chartData = [
        {
            name: 'Principal Amount',
            value: emiResult.principal,
            color: '#2D6E3E',
        },
        {
            name: 'Interest Payable',
            value: emiResult.totalInterest,
            color: '#A8E6CF',
        },
    ];

    return (
        <div className="home-page">
            <div className="container">
                <div className="home-header">
                    <Button
                        variant="text"
                        size="small"
                        onClick={() => navigate(-1)}
                        className="back-button"
                    >
                        <ArrowLeft size={20} />
                        <span>Back</span>
                    </Button>
                    <h1 className="page-title-small">EMI Calculator</h1>
                    <div className="header-actions">
                        <CurrencySelector />
                        <Button
                            variant="text"
                            size="small"
                            onClick={reset}
                            className="reset-button"
                        >
                            <RefreshCw size={18} />
                        </Button>
                    </div>
                </div>

                <div className="home-content">
                    {/* Result Card */}
                    <Card variant="gradient" rounded="xlarge" shadow="large" className="result-card slide-up">
                        <div className="result-header">
                            <div className="result-icon-wrapper">
                                <span className="result-icon-text" style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
                                    {selectedCurrency.symbol}
                                </span>
                            </div>
                            <div className="result-info">
                                <h3 className="result-label">Your EMI is</h3>
                                <h1 className="result-amount display-1 numeric count-up">
                                    {formatCurrency(emiResult.monthlyEMI, selectedCurrency.symbol)}
                                </h1>
                                <p className="result-sublabel">per month</p>
                            </div>
                        </div>

                        <div className="result-divider" />

                        <div className="result-breakdown">
                            <div className="breakdown-row">
                                <div className="breakdown-item">
                                    <span className="breakdown-label">Principal Amount</span>
                                    <strong className="breakdown-value numeric">
                                        {formatCurrency(emiResult.principal, selectedCurrency.symbol)}
                                    </strong>
                                </div>
                                <div className="breakdown-item">
                                    <span className="breakdown-label">Interest Payable</span>
                                    <strong className="breakdown-value numeric">
                                        {formatCurrency(emiResult.totalInterest, selectedCurrency.symbol)}
                                    </strong>
                                </div>
                            </div>

                            <div className="breakdown-total">
                                <span className="breakdown-label">Total Payment</span>
                                <strong className="breakdown-value numeric">
                                    {formatCurrency(emiResult.totalPayment, selectedCurrency.symbol)}
                                </strong>
                            </div>
                        </div>

                        <div className="result-chart">
                            <RingChart
                                data={chartData}
                                size={160}
                                centerContent={
                                    <>
                                        <div className="chart-center-value numeric">
                                            {formatCurrency(emiResult.monthlyEMI, selectedCurrency.symbol)}
                                        </div>
                                        <div className="chart-center-label">per month</div>
                                    </>
                                }
                                showLegend={false}
                            />
                        </div>
                    </Card>

                    {/* Input Card */}
                    <Card className="input-card slide-up" style={{ animationDelay: '0.1s' }}>
                        <Slider
                            label="Loan Amount"
                            value={loanAmount}
                            min={1000}
                            max={10000000}
                            step={1000}
                            prefix={selectedCurrency.symbol}
                            formatter={(val) => val.toLocaleString()}
                            onChange={setLoanAmount}
                            showInput={true}
                        />

                        <Slider
                            label="Interest Rate"
                            value={interestRate}
                            min={0.1}
                            max={30}
                            step={0.1}
                            suffix="%"
                            formatter={(val) => val.toFixed(1)}
                            onChange={setInterestRate}
                            showInput={true}
                        />

                        <Slider
                            label="Loan Tenure (Months)"
                            value={tenureMonths}
                            min={1}
                            max={360}
                            step={1}
                            onChange={setTenureMonths}
                            showInput={true}
                        />
                    </Card>

                    {/* Action Buttons */}
                    <div className="action-buttons slide-up" style={{ animationDelay: '0.2s' }}>
                        <Button
                            fullWidth
                            size="large"
                            glow
                            onClick={() => alert('Application submitted!')}
                        >
                            Apply
                        </Button>

                        <a
                            href="/breakdown"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate('/breakdown');
                            }}
                            className="link-button"
                        >
                            View Full Breakdown →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
