import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    // Primary: Gold bg, Navy text (High Conversion)
    primary: "bg-brand-gold text-brand-navy hover:bg-white hover:text-brand-navy border border-transparent font-bold shadow-lg hover:shadow-brand-gold/20",
    // Secondary: Navy Light bg, White text
    secondary: "bg-brand-navy-light text-white hover:bg-brand-navy-light/80 border border-transparent",
    // Outline: Transparent bg, Gold border/text
    outline: "bg-transparent text-white border border-white/20 hover:border-brand-gold hover:text-brand-gold",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};