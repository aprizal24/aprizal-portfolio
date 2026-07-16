'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Container from './Container';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 transition-all">
      <Container>
        <div className="flex justify-between items-center py-6">
          <a href="#hero" className="text-4xl font-bold tracking-tight" aria-label="Home">AT</a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-800 hover:text-gray-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-button"
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu - Slide Down */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
          }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-gray-800 hover:text-gray-600 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}
