'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#what-we-do', label: 'What We Do' },
    { href: '#experience', label: 'Experience' },
    { href: '#philosophy', label: 'Philosophy' },
    { href: '#engagement', label: 'Engagement' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-sm border-b border-white/50'
          : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:text-primary-dark font-medium transition-all duration-300 relative group rounded-lg hover:bg-white/40 flex items-center gap-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#engagement"
              className="ml-4 px-6 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-medium flex items-center gap-2"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl hover:bg-white/50 transition-all duration-300 text-gray-800"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40 animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-cream md:hidden z-50 animate-slide-in-right shadow-2xl border-l border-white/50">
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/50 text-gray-600 transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex-1 flex flex-col justify-start px-6 pt-4 space-y-2">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center gap-4 px-4 py-3 rounded-xl text-gray-800 hover:text-primary-dark hover:bg-white/50 font-medium text-lg transition-all duration-300"
                  >
                    <span className="flex-1">{link.label}</span>
                  </Link>
                ))}
              </div>

              {/* Bottom Section */}
              <div className="p-6 space-y-6 border-t border-gray-200/50">
                <Link
                  href="#engagement"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full px-8 py-4 bg-gray-800 text-white rounded-xl hover:shadow-lg hover:bg-primary-dark transition-all duration-300 font-semibold text-center"
                >
                  Contact Us
                </Link>

                {/* Social Icons - Simplified */}
                <div className="flex justify-center gap-4 text-gray-500">
                  <a href="#" className="hover:text-primary-dark transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-primary-dark transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
