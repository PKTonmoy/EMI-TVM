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
  variant?: 'primary' | 'secondary' | 'text';
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
        'btn',
        `btn-${variant}`,
        `btn-${size}`,
        {
          'btn-glow': glow && variant === 'primary',
          'btn-full-width': fullWidth,
          'btn-loading': loading,
        },
        className
      )}
    >
      {loading ? (
        <span className="btn-spinner" />
      ) : (
        children
      )}
    </button>
  );
};
