import React from 'react';
import './Button.css';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'text' | 'gradient';
  glow?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
  size = 'medium',
  variant = 'primary',
  glow = false,
  type = 'button',
  className,
  style,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      style={style}
      className={clsx(
        'button',
        `button-${variant}`,
        `button-${size}`,
        {
          'button-glow': glow,
          'button-full-width': fullWidth,
          'button-loading': loading,
        },
        className
      )}
    >
      {loading ? null : children}
    </button>
  );
};
