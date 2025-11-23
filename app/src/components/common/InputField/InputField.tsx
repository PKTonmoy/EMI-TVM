import React from 'react';
import './InputField.css';

interface InputFieldProps {
    label: string;
    value: string | number;
    onChange: (value: string) => void;
    type?: 'text' | 'number';
    prefix?: string;
    suffix?: string | React.ReactNode;
    placeholder?: string;
    min?: number;
    max?: number;
    step?: number;
}

export const InputField: React.FC<InputFieldProps> = ({
    label,
    value,
    onChange,
    type = 'text',
    prefix,
    suffix,
    placeholder,
    min,
    max,
    step,
}) => {
    return (
        <div className="input-field">
            <label className="input-field-label">{label}</label>
            <div className="input-field-wrapper">
                {prefix && <span className="input-field-prefix">{prefix}</span>}
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    min={min}
                    max={max}
                    step={step}
                    className="input-field-input"
                />
                {suffix && (
                    <span className="input-field-suffix">
                        {typeof suffix === 'string' ? suffix : suffix}
                    </span>
                )}
            </div>
        </div>
    );
};
