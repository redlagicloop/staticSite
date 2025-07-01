import React from 'react';
import NavLink from './NavLink';

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  isOpen: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, isOpen }) => {
  return (
    <div
      className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-200 transform origin-top-left ${
        isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
      }`}
    >
      <div className="py-2">
        {items.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;