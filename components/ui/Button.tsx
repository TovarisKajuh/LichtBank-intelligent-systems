import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  withArrow?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  withArrow = false,
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "relative group overflow-hidden font-semibold transition-all duration-300 ease-out rounded-xl flex items-center justify-center gap-2 px-8 py-4 text-lg transform hover:-translate-y-0.5 active:translate-y-0";
  
  const variants = {
    primary: "bg-solar-dark text-white shadow-xl hover:shadow-2xl hover:shadow-solar-orange/20 border border-transparent hover:border-solar-orange/50",
    secondary: "bg-solar-gradient text-solar-dark shadow-lg shadow-solar-orange/30 hover:shadow-solar-orange/50",
    outline: "bg-transparent border-2 border-solar-dark/10 text-solar-dark hover:border-solar-dark hover:bg-white",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {/* Subtle glow effect for primary buttons */}
      {variant === 'primary' && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      )}
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {withArrow && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
      </span>
    </button>
  );
};