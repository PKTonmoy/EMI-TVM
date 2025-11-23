import React from 'react';
import './Card.css';
import clsx from 'clsx';

interface CardProps {
    children: React.ReactNode;
    variant?: 'white' | 'gradient' | 'outlined' | 'glass';
    padding?: 'none' | 'small' | 'medium' | 'large';
    rounded?: 'small' | 'medium' | 'large' | 'xlarge';
    shadow?: 'none' | 'small' | 'medium' | 'large';
    hoverable?: boolean;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
    children,
    variant = 'white',
    padding = 'large',
    rounded = 'large',
    shadow = 'medium',
    hoverable = false,
    onClick,
    className,
    style,
}) => {
    return (
        <div
            onClick={onClick}
            style={style}
            className={clsx(
                'card',
                `card-${variant}`,
                `card-padding-${padding}`,
                `card-rounded-${rounded}`,
                `card-shadow-${shadow}`,
                {
                    'card-hoverable': hoverable || onClick,
                },
                className
            )}
        >
            {children}
        </div>
    );
};
