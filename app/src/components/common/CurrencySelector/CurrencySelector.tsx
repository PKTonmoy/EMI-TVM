import React, { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useCurrencyStore, CURRENCIES, type Currency } from '../../../store/currencyStore';
import './CurrencySelector.css';

export const CurrencySelector: React.FC = () => {
    const { selectedCurrency, setCurrency } = useCurrencyStore();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (currency: Currency) => {
        setCurrency(currency);
        setIsOpen(false);
    };

    return (
        <div className="currency-selector" ref={dropdownRef}>
            <button
                className="currency-button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Select currency"
            >
                <Globe size={18} />
                <span className="currency-code">{selectedCurrency.code}</span>
            </button>

            {isOpen && (
                <div className="currency-dropdown">
                    {CURRENCIES.map((currency) => (
                        <button
                            key={currency.code}
                            className={`currency-option ${currency.code === selectedCurrency.code ? 'active' : ''}`}
                            onClick={() => handleSelect(currency)}
                        >
                            <span className="currency-symbol">{currency.symbol}</span>
                            <div className="currency-info">
                                <span className="currency-option-code">{currency.code}</span>
                                <span className="currency-name">{currency.name}</span>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
