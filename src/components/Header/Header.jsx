import React, { useState, useEffect } from 'react';

const Header = ({ activeLink, onNavLinkClick }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#experience', text: 'Experience' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' },
  ];

  const handleLinkClick = (e) => {
    onNavLinkClick(e);
    setMobileMenuOpen(false); // Close mobile menu on link click
  };

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, link.href.substring(1))}
              className="text-3xl font-bold gradient-text"
            >
              JMuks
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onNavLinkClick}
                className={`nav-link font-medium ${
                  activeLink === link.href.substring(1)
                    ? 'active-nav text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.text}
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-button"
              className="text-gray-500 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-white shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeLink === link.href.substring(1)
                  ? 'text-gray-900 bg-gray-100'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
