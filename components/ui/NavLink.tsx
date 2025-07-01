import React from 'react';

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, className = '', children, onClick }) => {
  return (
    <a 
      href={href} 
      className={`font-medium transition-colors duration-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default NavLink;