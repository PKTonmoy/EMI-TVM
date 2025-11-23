import React from 'react';
import { Card } from '../components/common/Card';
import './Formulas.css';

export const Formulas: React.FC = () => {
    const formulas = [
        {
            category: 'EMI Calculation',
            items: [
                {
                    name: 'EMI (Equated Monthly Installment)',
                    formula: 'EMI = [P × r × (1+r)^n] / [(1+r)^n – 1]',
                    variables: [
                        { symbol: 'P', description: 'Principal loan amount' },
                        { symbol: 'r', description: 'Monthly interest rate (annual rate / 12 / 100)' },
                        { symbol: 'n', description: 'Tenure in months' },
                    ],
                    example: {
                        input: 'P = $25,000, Annual Rate = 9%, Tenure = 14 months',
                        calculation: 'r = 9/12/100 = 0.0075\n(1+r)^n = 1.1102\nEMI = (25000 × 0.0075 × 1.1102) / 0.1102',
                        result: 'EMI = $1,896.59',
                    },
                },
                {
                    name: 'Loan Principal (Present Value)',
                    formula: 'P = EMI × [((1 + r)^n - 1) / (r × (1 + r)^n)]',
                    variables: [
                        { symbol: 'EMI', description: 'Equated Monthly Installment' },
                        { symbol: 'r', description: 'Monthly interest rate (annual rate / 12 / 100)' },
                        { symbol: 'n', description: 'Tenure in months' },
                    ],
                    example: {
                        input: 'EMI = $1,896.59, Annual Rate = 9%, Tenure = 14 months',
                        calculation: 'r = 0.0075, n = 14\nP = 1896.59 × [(1.1102 - 1) / (0.0075 × 1.1102)]',
                        result: 'P = $25,000',
                    },
                },
            ],
        },
        {
            category: 'Time Value of Money',
            items: [
                {
                    name: 'Present Value (PV)',
                    formula: 'PV = FV / (1 + r)^n',
                    variables: [
                        { symbol: 'FV', description: 'Future Value' },
                        { symbol: 'r', description: 'Interest rate per period' },
                        { symbol: 'n', description: 'Number of periods' },
                    ],
                    example: {
                        input: 'FV = $10,000, r = 5%, n = 10 years',
                        calculation: 'PV = 10000 / (1.05)^10',
                        result: 'PV = $6,139',
                    },
                },
                {
                    name: 'Future Value (FV)',
                    formula: 'FV = PV × (1 + r)^n',
                    variables: [
                        { symbol: 'PV', description: 'Present Value' },
                        { symbol: 'r', description: 'Interest rate per period' },
                        { symbol: 'n', description: 'Number of periods' },
                    ],
                    example: {
                        input: 'PV = $10,000, r = 5%, n = 10 years',
                        calculation: 'FV = 10000 × (1.05)^10',
                        result: 'FV = $16,289',
                    },
                },
                {
                    name: 'Annuity PV',
                    formula: 'PV = PMT × [(1 - (1 + r)^-n) / r]',
                    variables: [
                        { symbol: 'PMT', description: 'Payment amount per period' },
                        { symbol: 'r', description: 'Interest rate per period' },
                        { symbol: 'n', description: 'Number of periods' },
                    ],
                    example: {
                        input: 'PMT = $1,000, r = 5%, n = 10 years',
                        calculation: 'PV = 1000 × [(1 - 1.05^-10) / 0.05]',
                        result: 'PV = $7,722',
                    },
                },
                {
                    name: 'Annuity FV',
                    formula: 'FV = PMT × [((1 + r)^n - 1) / r]',
                    variables: [
                        { symbol: 'PMT', description: 'Payment amount per period' },
                        { symbol: 'r', description: 'Interest rate per period' },
                        { symbol: 'n', description: 'Number of periods' },
                    ],
                    example: {
                        input: 'PMT = $1,000, r = 5%, n = 10 years',
                        calculation: 'FV = 1000 × [(1.05^10 - 1) / 0.05]',
                        result: 'FV = $12,578',
                    },
                },
                {
                    name: 'Perpetuity',
                    formula: 'PV = PMT / r',
                    variables: [
                        { symbol: 'PMT', description: 'Payment amount per period' },
                        { symbol: 'r', description: 'Interest rate per period' },
                    ],
                    example: {
                        input: 'PMT = $1,000, r = 5%',
                        calculation: 'PV = 1000 / 0.05',
                        result: 'PV = $20,000',
                    },
                },
            ],
        },
    ];

    return (
        <div className="formulas-page">
            <div className="container">
                <div className="formulas-content">
                    <h1 className="page-title heading-1">Formula Guide</h1>
                    <p className="page-subtitle">Financial calculation formulas with examples</p>

                    {formulas.map((category) => (
                        <div key={category.category} className="formula-category">
                            <h2 className="category-title heading-2">{category.category}</h2>

                            {category.items.map((item, index) => (
                                <Card key={index} className="formula-card slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                                    <div className="formula-header">
                                        <h3 className="formula-name heading-3">{item.name}</h3>
                                    </div>

                                    <div className="formula-box">
                                        <code className="formula-text">{item.formula}</code>
                                    </div>

                                    <div className="variables-section">
                                        <h4 className="section-title">Variables:</h4>
                                        <div className="variables-list">
                                            {item.variables.map((variable, vIndex) => (
                                                <div key={vIndex} className="variable-item">
                                                    <code className="variable-symbol">{variable.symbol}</code>
                                                    <span className="variable-description">{variable.description}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="example-section">
                                        <h4 className="section-title">Example:</h4>
                                        <div className="example-content">
                                            <div className="example-row">
                                                <strong>Given:</strong>
                                                <span>{item.example.input}</span>
                                            </div>
                                            <div className="example-row">
                                                <strong>Calculation:</strong>
                                                <pre className="calculation-steps">{item.example.calculation}</pre>
                                            </div>
                                            <div className="example-result">
                                                <strong>Result:</strong>
                                                <span className="result-value">{item.example.result}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
