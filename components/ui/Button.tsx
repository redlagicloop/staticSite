import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  className = '',
  onClick,
}) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 text-center inline-block';
  
  const variantClasses = {
    primary: 'bg-gray-800 hover:bg-black text-white shadow-md hover:shadow-lg',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white/10',
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;