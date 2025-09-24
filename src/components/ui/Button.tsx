import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md transition duration-300 ease-in-out ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600 bg-blue-500 text-white'}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;