import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { Slider } from '../components/common/Slider';
import { Button } from '../components/common/Button';
import './TVMHub.css';

export const TVMHub: React.FC = () => {
    const calculators = [
        {
            id: 'pv',
            name: 'Present Value',
            icon: '💰',
            description: 'Calculate the present value of a future sum',
            gradient: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
        },
        {
            id: 'fv',
            name: 'Future Value',
            icon: '📈',
            description: 'Calculate the future value of an investment',
            gradient: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)',
        },
        {
            id: 'annuity-pv',
            name: 'Annuity PV',
            icon: '💵',
            description: 'Present value of regular payments',
            gradient: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)',
        },
        {
            id: 'annuity-fv',
            name: 'Annuity FV',
            icon: '💸',
            description: 'Future value of regular payments',
            gradient: 'linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)',
        },
        {
            id: 'perpetuity',
            name: 'Perpetuity',
            icon: '♾️',
            description: 'Value of infinite payment stream',
            gradient: 'linear-gradient(135deg, #FA709A 0%, #FEE140 100%)',
        },
        {
            id: 'compound',
            name: 'Compound Interest',
            icon: '📊',
            description: 'Calculate compound interest growth',
            gradient: 'linear-gradient(135deg, #30CFD0 0%, #330867 100%)',
        },
    ];

    const [selectedCalc, setSelectedCalc] = useState<string | null>(null);

    const renderCalculator = () => {
        if (!selectedCalc) return null;

        switch (selectedCalc) {
            case 'pv':
                return <PresentValueCalculator onBack={() => setSelectedCalc(null)} />;
            case 'fv':
                return <FutureValueCalculator onBack={() => setSelectedCalc(null)} />;
            case 'annuity-pv':
                return <AnnuityPVCalculator onBack={() => setSelectedCalc(null)} />;
            case 'annuity-fv':
                return <AnnuityFVCalculator onBack={() => setSelectedCalc(null)} />;
            case 'perpetuity':
                return <PerpetuityCalculator onBack={() => setSelectedCalc(null)} />;
            case 'compound':
                return <CompoundInterestCalculator onBack={() => setSelectedCalc(null)} />;
            default:
                return null;
        }
    };

    if (selectedCalc) {
        return (
            <div className="tvm-page">
                <div className="container">
                    {renderCalculator()}
                </div>
            </div>
        );
    }

    return (
        <div className="tvm-page">
            <div className="container">
                <div className="tvm-content">
                    <h1 className="page-title heading-1">TVM Calculators</h1>
                    <p className="page-subtitle">Time Value of Money calculation tools</p>

                    <div className="calculator-grid">
                        {calculators.map((calc) => (
                            <Card
                                key={calc.id}
                                className="calculator-card"
                                hoverable
                                onClick={() => setSelectedCalc(calc.id)}
                                padding="large"
                                rounded="large"
                            >
                                <div className="card-gradient-bg" style={{ background: calc.gradient }} />
                                <div className="card-content">
                                    <span className="calc-icon">{calc.icon}</span>
                                    <h3 className="calc-name heading-3">{calc.name}</h3>
                                    <p className="calc-description">{calc.description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Present Value Calculator
const PresentValueCalculator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [futureValue, setFutureValue] = useState(10000);
    const [rate, setRate] = useState(5);
    const [periods, setPeriods] = useState(10);
    const [result, setResult] = useState(0);

    React.useEffect(() => {
        const r = rate / 100;
        const pv = futureValue / Math.pow(1 + r, periods);
        setResult(pv);
    }, [futureValue, rate, periods]);

    return (
        <div className="calculator-detail">
            <Button onClick={onBack} size="small">← Back</Button>

            <h2 className="heading-2" style={{ marginTop: '1rem' }}>Present Value Calculator</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                Calculate the present value of a future sum
            </p>

            <Card variant="gradient" rounded="large" style={{ marginTop: '2rem' }}>
                <h3 className="result-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Present Value</h3>
                <h1 className="display-1 numeric" style={{ color: '#fff', margin: '0.5rem 0' }}>
                    ${Math.round(result).toLocaleString()}
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
                    Formula: PV = FV / (1 + r)^n
                </p>
            </Card>

            <Card style={{ marginTop: '1rem' }}>
                <Slider
                    label="Future Value"
                    value={futureValue}
                    min={1000}
                    max={1000000}
                    step={1000}
                    prefix="$"
                    formatter={(val) => val.toLocaleString()}
                    onChange={setFutureValue}
                    showInput={true}
                />

                <Slider
                    label="Annual Interest Rate"
                    value={rate}
                    min={0.1}
                    max={30}
                    step={0.1}
                    suffix="%"
                    formatter={(val) => val.toFixed(1)}
                    onChange={setRate}
                />

                <Slider
                    label="Number of Periods (Years)"
                    value={periods}
                    min={1}
                    max={50}
                    step={1}
                    onChange={setPeriods}
                />
            </Card>

            <Card style={{ marginTop: '1rem', background: 'var(--color-bg-secondary)' }}>
                <h4 className="heading-4">💡 Explanation</h4>
                <p style={{ marginTop: '0.5rem', fontSize: '14px', lineHeight: '1.6' }}>
                    To have <strong>${futureValue.toLocaleString()}</strong> in{' '}
                    <strong>{periods} years</strong> at <strong>{rate}%</strong> annual interest,
                    you need to invest <strong>${Math.round(result).toLocaleString()}</strong> today.
                </p>
            </Card>
        </div>
    );
};

// Future Value Calculator
const FutureValueCalculator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [presentValue, setPresentValue] = useState(10000);
    const [rate, setRate] = useState(5);
    const [periods, setPeriods] = useState(10);
    const [result, setResult] = useState(0);

    React.useEffect(() => {
        const r = rate / 100;
        const fv = presentValue * Math.pow(1 + r, periods);
        setResult(fv);
    }, [presentValue, rate, periods]);

    return (
        <div className="calculator-detail">
            <Button onClick={onBack} size="small">← Back</Button>

            <h2 className="heading-2" style={{ marginTop: '1rem' }}>Future Value Calculator</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                Calculate the future value of an investment
            </p>

            <Card variant="gradient" rounded="large" style={{ marginTop: '2rem' }}>
                <h3 className="result-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Future Value</h3>
                <h1 className="display-1 numeric" style={{ color: '#fff', margin: '0.5rem 0' }}>
                    ${Math.round(result).toLocaleString()}
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
                    Formula: FV = PV × (1 + r)^n
                </p>
            </Card>

            <Card style={{ marginTop: '1rem' }}>
                <Slider
                    label="Present Value"
                    value={presentValue}
                    min={1000}
                    max={1000000}
                    step={1000}
                    prefix="$"
                    formatter={(val) => val.toLocaleString()}
                    onChange={setPresentValue}
                    showInput={true}
                />

                <Slider
                    label="Annual Interest Rate"
                    value={rate}
                    min={0.1}
                    max={30}
                    step={0.1}
                    suffix="%"
                    formatter={(val) => val.toFixed(1)}
                    onChange={setRate}
                />

                <Slider
                    label="Number of Periods (Years)"
                    value={periods}
                    min={1}
                    max={50}
                    step={1}
                    onChange={setPeriods}
                />
            </Card>

            <Card style={{ marginTop: '1rem', background: 'var(--color-bg-secondary)' }}>
                <h4 className="heading-4">💡 Explanation</h4>
                <p style={{ marginTop: '0.5rem', fontSize: '14px', lineHeight: '1.6' }}>
                    If you invest <strong>${presentValue.toLocaleString()}</strong> today at{' '}
                    <strong>{rate}%</strong> annual interest for <strong>{periods} years</strong>,
                    you will have <strong>${Math.round(result).toLocaleString()}</strong>.
                </p>
            </Card>
        </div>
    );
};

// Annuity PV Calculator
const AnnuityPVCalculator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [payment, setPayment] = useState(1000);
    const [rate, setRate] = useState(5);
    const [periods, setPeriods] = useState(10);
    const [result, setResult] = useState(0);

    React.useEffect(() => {
        const r = rate / 100;
        const pv = payment * ((1 - Math.pow(1 + r, -periods)) / r);
        setResult(pv);
    }, [payment, rate, periods]);

    return (
        <div className="calculator-detail">
            <Button onClick={onBack} size="small">← Back</Button>

            <h2 className="heading-2" style={{ marginTop: '1rem' }}>Annuity Present Value</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                Calculate present value of regular payments
            </p>

            <Card variant="gradient" rounded="large" style={{ marginTop: '2rem' }}>
                <h3 className="result-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Present Value</h3>
                <h1 className="display-1 numeric" style={{ color: '#fff', margin: '0.5rem 0' }}>
                    ${Math.round(result).toLocaleString()}
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
                    Formula: PV = PMT × [(1 - (1 + r)^-n) / r]
                </p>
            </Card>

            <Card style={{ marginTop: '1rem' }}>
                <Slider
                    label="Payment Amount"
                    value={payment}
                    min={100}
                    max={10000}
                    step={100}
                    prefix="$"
                    formatter={(val) => val.toLocaleString()}
                    onChange={setPayment}
                    showInput={true}
                />

                <Slider
                    label="Annual Interest Rate"
                    value={rate}
                    min={0.1}
                    max={30}
                    step={0.1}
                    suffix="%"
                    formatter={(val) => val.toFixed(1)}
                    onChange={setRate}
                />

                <Slider
                    label="Number of Periods (Years)"
                    value={periods}
                    min={1}
                    max={50}
                    step={1}
                    onChange={setPeriods}
                />
            </Card>

            <Card style={{ marginTop: '1rem', background: 'var(--color-bg-secondary)' }}>
                <h4 className="heading-4">💡 Explanation</h4>
                <p style={{ marginTop: '0.5rem', fontSize: '14px', lineHeight: '1.6' }}>
                    Receiving <strong>${payment.toLocaleString()}</strong> per year for{' '}
                    <strong>{periods} years</strong> at <strong>{rate}%</strong> discount rate
                    is worth <strong>${Math.round(result).toLocaleString()}</strong> today.
                </p>
            </Card>
        </div>
    );
};

// Annuity FV Calculator
const AnnuityFVCalculator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [payment, setPayment] = useState(1000);
    const [rate, setRate] = useState(5);
    const [periods, setPeriods] = useState(10);
    const [result, setResult] = useState(0);

    React.useEffect(() => {
        const r = rate / 100;
        const fv = payment * ((Math.pow(1 + r, periods) - 1) / r);
        setResult(fv);
    }, [payment, rate, periods]);

    return (
        <div className="calculator-detail">
            <Button onClick={onBack} size="small">← Back</Button>

            <h2 className="heading-2" style={{ marginTop: '1rem' }}>Annuity Future Value</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                Calculate future value of regular payments
            </p>

            <Card variant="gradient" rounded="large" style={{ marginTop: '2rem' }}>
                <h3 className="result-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Future Value</h3>
                <h1 className="display-1 numeric" style={{ color: '#fff', margin: '0.5rem 0' }}>
                    ${Math.round(result).toLocaleString()}
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
                    Formula: FV = PMT × [((1 + r)^n - 1) / r]
                </p>
            </Card>

            <Card style={{ marginTop: '1rem' }}>
                <Slider
                    label="Payment Amount"
                    value={payment}
                    min={100}
                    max={10000}
                    step={100}
                    prefix="$"
                    formatter={(val) => val.toLocaleString()}
                    onChange={setPayment}
                    showInput={true}
                />

                <Slider
                    label="Annual Interest Rate"
                    value={rate}
                    min={0.1}
                    max={30}
                    step={0.1}
                    suffix="%"
                    formatter={(val) => val.toFixed(1)}
                    onChange={setRate}
                />

                <Slider
                    label="Number of Periods (Years)"
                    value={periods}
                    min={1}
                    max={50}
                    step={1}
                    onChange={setPeriods}
                />
            </Card>

            <Card style={{ marginTop: '1rem', background: 'var(--color-bg-secondary)' }}>
                <h4 className="heading-4">💡 Explanation</h4>
                <p style={{ marginTop: '0.5rem', fontSize: '14px', lineHeight: '1.6' }}>
                    Investing <strong>${payment.toLocaleString()}</strong> per year for{' '}
                    <strong>{periods} years</strong> at <strong>{rate}%</strong> annual return
                    will grow to <strong>${Math.round(result).toLocaleString()}</strong>.
                </p>
            </Card>
        </div>
    );
};

// Perpetuity Calculator
const PerpetuityCalculator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [payment, setPayment] = useState(1000);
    const [rate, setRate] = useState(5);
    const [result, setResult] = useState(0);

    React.useEffect(() => {
        const r = rate / 100;
        const pv = payment / r;
        setResult(pv);
    }, [payment, rate]);

    return (
        <div className="calculator-detail">
            <Button onClick={onBack} size="small">← Back</Button>

            <h2 className="heading-2" style={{ marginTop: '1rem' }}>Perpetuity Calculator</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                Calculate value of infinite payment stream
            </p>

            <Card variant="gradient" rounded="large" style={{ marginTop: '2rem' }}>
                <h3 className="result-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Present Value</h3>
                <h1 className="display-1 numeric" style={{ color: '#fff', margin: '0.5rem 0' }}>
                    ${Math.round(result).toLocaleString()}
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
                    Formula: PV = PMT / r
                </p>
            </Card>

            <Card style={{ marginTop: '1rem' }}>
                <Slider
                    label="Annual Payment"
                    value={payment}
                    min={100}
                    max={100000}
                    step={100}
                    prefix="$"
                    formatter={(val) => val.toLocaleString()}
                    onChange={setPayment}
                    showInput={true}
                />

                <Slider
                    label="Annual Interest Rate"
                    value={rate}
                    min={0.1}
                    max={30}
                    step={0.1}
                    suffix="%"
                    formatter={(val) => val.toFixed(1)}
                    onChange={setRate}
                />
            </Card>

            <Card style={{ marginTop: '1rem', background: 'var(--color-bg-secondary)' }}>
                <h4 className="heading-4">💡 Explanation</h4>
                <p style={{ marginTop: '0.5rem', fontSize: '14px', lineHeight: '1.6' }}>
                    An infinite stream of <strong>${payment.toLocaleString()}</strong> per year
                    at <strong>{rate}%</strong> discount rate is worth{' '}
                    <strong>${Math.round(result).toLocaleString()}</strong> today.
                </p>
            </Card>
        </div>
    );
};

// Compound Interest Calculator
const CompoundInterestCalculator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [principal, setPrincipal] = useState(10000);
    const [rate, setRate] = useState(5);
    const [years, setYears] = useState(10);
    const [frequency, setFrequency] = useState(12); // Monthly
    const [result, setResult] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    React.useEffect(() => {
        const r = rate / 100;
        const n = frequency;
        const t = years;
        const fv = principal * Math.pow(1 + r / n, n * t);
        setResult(fv);
        setTotalInterest(fv - principal);
    }, [principal, rate, years, frequency]);

    return (
        <div className="calculator-detail">
            <Button onClick={onBack} size="small">← Back</Button>

            <h2 className="heading-2" style={{ marginTop: '1rem' }}>Compound Interest Calculator</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                Calculate compound interest growth
            </p>

            <Card variant="gradient" rounded="large" style={{ marginTop: '2rem' }}>
                <h3 className="result-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Future Value</h3>
                <h1 className="display-1 numeric" style={{ color: '#fff', margin: '0.5rem 0' }}>
                    ${Math.round(result).toLocaleString()}
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginTop: '0.5rem' }}>
                    Interest Earned: ${Math.round(totalInterest).toLocaleString()}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', marginTop: '0.5rem' }}>
                    Formula: FV = P × (1 + r/n)^(n×t)
                </p>
            </Card>

            <Card style={{ marginTop: '1rem' }}>
                <Slider
                    label="Principal Amount"
                    value={principal}
                    min={1000}
                    max={1000000}
                    step={1000}
                    prefix="$"
                    formatter={(val) => val.toLocaleString()}
                    onChange={setPrincipal}
                    showInput={true}
                />

                <Slider
                    label="Annual Interest Rate"
                    value={rate}
                    min={0.1}
                    max={30}
                    step={0.1}
                    suffix="%"
                    formatter={(val) => val.toFixed(1)}
                    onChange={setRate}
                />

                <Slider
                    label="Time Period (Years)"
                    value={years}
                    min={1}
                    max={50}
                    step={1}
                    onChange={setYears}
                />

                <div style={{ marginTop: '1rem' }}>
                    <label style={{ fontSize: '14px', fontWeight: '500', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '8px' }}>
                        Compounding Frequency
                    </label>
                    <select
                        value={frequency}
                        onChange={(e) => setFrequency(Number(e.target.value))}
                        style={{
                            width: '100%',
                            height: '48px',
                            padding: '0 12px',
                            fontSize: '16px',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-md)',
                            background: 'var(--color-bg-primary)',
                            color: 'var(--color-text-primary)'
                        }}
                    >
                        <option value={1}>Annually</option>
                        <option value={2}>Semi-Annually</option>
                        <option value={4}>Quarterly</option>
                        <option value={12}>Monthly</option>
                        <option value={365}>Daily</option>
                    </select>
                </div>
            </Card>

            <Card style={{ marginTop: '1rem', background: 'var(--color-bg-secondary)' }}>
                <h4 className="heading-4">💡 Explanation</h4>
                <p style={{ marginTop: '0.5rem', fontSize: '14px', lineHeight: '1.6' }}>
                    Investing <strong>${principal.toLocaleString()}</strong> at{' '}
                    <strong>{rate}%</strong> annual interest, compounded{' '}
                    <strong>{frequency === 1 ? 'annually' : frequency === 12 ? 'monthly' : frequency === 365 ? 'daily' : `${frequency} times per year`}</strong> for{' '}
                    <strong>{years} years</strong>, will grow to{' '}
                    <strong>${Math.round(result).toLocaleString()}</strong>.
                </p>
            </Card>
        </div>
    );
};
