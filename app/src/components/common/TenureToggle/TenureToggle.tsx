import React from 'react';
import './TenureToggle.css';

export type TenureUnit = 'months' | 'years';

interface TenureToggleProps {
    value: TenureUnit;
    onChange: (unit: TenureUnit) => void;
}

export const TenureToggle: React.FC<TenureToggleProps> = ({ value, onChange }) => {
    return (
        <div className="tenure-toggle">
            <button
                type="button"
                className={`tenure-toggle-btn ${value === 'years' ? 'active' : ''}`}
                onClick={() => onChange('years')}
            >
                Yr
            </button>
            <button
                type="button"
                className={`tenure-toggle-btn ${value === 'months' ? 'active' : ''}`}
                onClick={() => onChange('months')}
            >
                Mo
            </button>
        </div>
    );
};
