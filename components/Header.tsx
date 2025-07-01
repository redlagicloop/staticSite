"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp, Brain } from 'lucide-react';
import NavLink from './ui/NavLink';
import DropdownMenu from './ui/DropdownMenu';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
  }`;

  const logoClasses = `flex items-center gap-2 text-xl font-bold ${
    isScrolled ? 'text-black' : 'text-white'
  }`;

  const navLinkClasses = `transition-colors duration-200 ${
    isScrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-200'
  }`;

  const mobileMenuClasses = `md:hidden fixed inset-0 bg-black bg-opacity-95 z-50 transform transition-transform duration-300 ease-in-out ${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  }`;

  const agenticAIItems = [
    { label: 'Text to SQL', href: '#text-to-sql' },
    { label: 'Unstructured Chatbot', href: '#chatbot' },
    { label: 'Web Scraping', href: '#web-scraping' },
  ];

  const advancedAIItems = [
    { label: 'Content Engineering', href: '#content-engineering' },
    { label: 'Semantic Search Engine', href: '#semantic-search' },
  ];

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className={logoClasses}>
          <Brain className="h-8 w-8" />
          <span>MagicKubes</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="#" className={navLinkClasses}>
            Home
          </NavLink>
          
          <div className="relative group">
            <button
              className={`flex items-center gap-1 ${navLinkClasses}`}
              onClick={toggleDropdown}
            >
              <span>Agentic AI</span>
              {dropdownOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            <DropdownMenu items={agenticAIItems} isOpen={dropdownOpen} />
          </div>
          
          <div className="relative group">
            <button className={`flex items-center gap-1 ${navLinkClasses}`}>
              <span>Advanced AI</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <DropdownMenu items={advancedAIItems} isOpen={false} />
          </div>
          
          <NavLink href="#blog" className={navLinkClasses}>
            Blog
          </NavLink>
          
          <NavLink href="#contact" className={navLinkClasses}>
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <Menu className={`h-6 w-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={mobileMenuClasses}>
        <div className="flex justify-end p-4">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center space-y-6 text-white text-xl">
            <NavLink href="#" className="text-white hover:text-gray-200">
              Home
            </NavLink>
            
            <div className="relative">
              <button
                className="flex items-center gap-1 text-white hover:text-gray-200"
                onClick={toggleDropdown}
              >
                <span>Agentic AI</span>
                {dropdownOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              {dropdownOpen && (
                <div className="flex flex-col items-center space-y-4 mt-4">
                  {agenticAIItems.map((item) => (
                    <NavLink key={item.href} href={item.href} className="text-gray-200 hover:text-white text-base">
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
            
            <NavLink href="#advanced-ai" className="text-white hover:text-gray-200">
              Advanced AI
            </NavLink>
            
            <NavLink href="#blog" className="text-white hover:text-gray-200">
              Blog
            </NavLink>
            
            <NavLink href="#contact" className="text-white hover:text-gray-200">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;