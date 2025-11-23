import React, { useState, useRef, useEffect } from 'react';
import './Slider.css';

interface SliderProps {
    label: string;
    value: number;
    min: number;
    max: number;
    step?: number;
    suffix?: string;
    prefix?: string;
    onChange: (value: number) => void;
    formatter?: (value: number) => string;
    disabled?: boolean;
    showInput?: boolean;
}

export const Slider: React.FC<SliderProps> = ({
    label,
    value,
    min,
    max,
    step = 1,
    suffix = '',
    prefix = '',
    onChange,
    formatter,
    disabled = false,
    showInput = false,
}) => {
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    const formatValue = (val: number): string => {
        if (formatter) return formatter(val);
        return `${prefix}${val.toLocaleString()}${suffix}`;
    };

    const percentage = ((value - min) / (max - min)) * 100;

    const handleMouseDown = (e: React.MouseEvent) => {
        if (disabled) return;
        setIsDragging(true);
        updateValue(e.clientX);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (disabled) return;
        setIsDragging(true);
        updateValue(e.touches[0].clientX);
    };

    const updateValue = (clientX: number) => {
        if (!sliderRef.current) return;

        const rect = sliderRef.current.getBoundingClientRect();
        const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const rawValue = min + percentage * (max - min);
        const steppedValue = Math.round(rawValue / step) * step;
        const clampedValue = Math.max(min, Math.min(max, steppedValue));

        onChange(clampedValue);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging) {
                updateValue(e.clientX);
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (isDragging) {
                updateValue(e.touches[0].clientX);
            }
        };

        const handleEnd = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleEnd);
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchend', handleEnd);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleEnd);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseFloat(e.target.value);
        if (!isNaN(val)) {
            // Only enforce max value, allow any value above 0
            onChange(Math.min(max, Math.max(0, val)));
        }
    };

    return (
        <div className={`slider-container ${disabled ? 'slider-disabled' : ''}`}>
            <div className="slider-header">
                <label className="slider-label">{label}</label>
                {showInput ? (
                    <input
                        type="number"
                        className="slider-input"
                        value={value}
                        onChange={handleInputChange}
                        max={max}
                        step={step}
                        disabled={disabled}
                    />
                ) : (
                    <span className="slider-value numeric">{formatValue(value)}</span>
                )}
            </div>

            <div
                ref={sliderRef}
                className="slider-track-container"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                <div className="slider-track">
                    <div
                        className="slider-fill"
                        style={{ width: `${percentage}%` }}
                    />
                </div>
                <div
                    className={`slider-thumb ${isDragging ? 'slider-thumb-active' : ''}`}
                    style={{ left: `${percentage}%` }}
                />
            </div>
        </div>
    );
};
