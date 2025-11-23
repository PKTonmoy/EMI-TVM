import React from 'react';
import { Home, User, Car } from 'lucide-react';
import './LoanTypeSelector.css';

export type LoanType = 'home' | 'personal' | 'car';

interface LoanTypeSelectorProps {
    value: LoanType;
    onChange: (type: LoanType) => void;
}

export const LoanTypeSelector: React.FC<LoanTypeSelectorProps> = ({ value, onChange }) => {
    const types = [
        { id: 'home' as LoanType, label: 'Home', icon: Home },
        { id: 'personal' as LoanType, label: 'Personal', icon: User },
        { id: 'car' as LoanType, label: 'Car', icon: Car },
    ];

    return (
        <div className="loan-type-selector">
            <label className="loan-type-label">Loan Type</label>
            <div className="loan-type-options">
                {types.map((type) => (
                    <button
                        key={type.id}
                        type="button"
                        className={`loan-type-option ${value === type.id ? 'active' : ''}`}
                        onClick={() => onChange(type.id)}
                    >
                        <type.icon size={24} />
                        <span>{type.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};
