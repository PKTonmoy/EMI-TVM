import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { RingChart } from '../components/charts/RingChart';
import { calculateEMI, generateAmortizationSchedule, formatCurrency } from '../utils/calculations';
import { exportAmortizationPDF } from '../utils/pdfExport';
import { useCalculatorStore } from '../store/calculatorStore';
import { useCurrencyStore } from '../store/currencyStore';
import type { EMIResult, AmortizationRow } from '../utils/calculations';
import './Breakdown.css';

export const Breakdown: React.FC = () => {
    const navigate = useNavigate();
    const { loanAmount, interestRate, tenureMonths } = useCalculatorStore();
    const { selectedCurrency } = useCurrencyStore();

    const [emiResult, setEmiResult] = useState<EMIResult | null>(null);
    const [schedule, setSchedule] = useState<AmortizationRow[]>([]);

    useEffect(() => {
        const result = calculateEMI(loanAmount, interestRate, tenureMonths);
        setEmiResult(result);
        setSchedule(generateAmortizationSchedule(result));
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

    const handleDownloadPDF = () => {
        exportAmortizationPDF(emiResult);
    };

    return (
        <div className="breakdown-page">
            <div className="container">
                <div className="breakdown-header">
                    <Button
                        variant="text"
                        size="small"
                        onClick={() => navigate(-1)}
                        className="back-button"
                    >
                        <ArrowLeft size={20} />
                        <span>Back</span>
                    </Button>
                </div>

                <div className="breakdown-content">
                    <h1 className="page-title heading-1">EMI Breakdown</h1>

                    {/* Summary Card */}
                    <Card className="summary-card slide-up">
                        <div className="summary-header">
                            <div>
                                <h3 className="result-label">Your EMI is</h3>
                                <h2 className="result-amount heading-1 numeric">
                                    {formatCurrency(emiResult.monthlyEMI, selectedCurrency.symbol)}
                                </h2>
                                <p className="result-sublabel">per month</p>
                            </div>
                        </div>

                        <div className="summary-chart">
                            <RingChart
                                data={chartData}
                                size={200}
                                centerContent={
                                    <>
                                        <div className="chart-center-value numeric">
                                            {formatCurrency(emiResult.monthlyEMI, selectedCurrency.symbol)}
                                        </div>
                                        <div className="chart-center-label">per month</div>
                                    </>
                                }
                            />
                        </div>

                        <div className="summary-details">
                            <div className="detail-row">
                                <span>Total Payment</span>
                                <strong className="numeric">{formatCurrency(emiResult.totalPayment, selectedCurrency.symbol)}</strong>
                            </div>
                        </div>
                    </Card>

                    {/* Amortization Table */}
                    <Card className="table-card slide-up" style={{ animationDelay: '0.1s' }}>
                        <div className="table-header">
                            <h3 className="heading-3">Amortization Schedule</h3>
                            <Button onClick={handleDownloadPDF} size="small">
                                📥 Download PDF
                            </Button>
                        </div>

                        <div className="table-wrapper">
                            <table className="amortization-table">
                                <thead>
                                    <tr>
                                        <th>Month</th>
                                        <th>Payment</th>
                                        <th>Principal</th>
                                        <th>Interest</th>
                                        <th>Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {schedule.map((row) => (
                                        <tr key={row.month}>
                                            <td className="text-center">{row.month}</td>
                                            <td className="text-right numeric">{formatCurrency(row.payment, selectedCurrency.symbol)}</td>
                                            <td className="text-right numeric">{formatCurrency(row.principalPaid, selectedCurrency.symbol)}</td>
                                            <td className="text-right numeric">{formatCurrency(row.interestPaid, selectedCurrency.symbol)}</td>
                                            <td className="text-right numeric">{formatCurrency(row.balance, selectedCurrency.symbol)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};
