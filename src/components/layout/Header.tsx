'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const mainNavItems = [
    { href: '/ausbildung', label: 'Ausbildung Programs', featured: true },
    { href: '/study-visa', label: 'Study Visa', featured: true },
    { href: '/work-permit', label: 'Work Permit', featured: true },
    { href: '/consultation', label: 'Free Consultation', featured: true },
  ];

  const secondaryNavItems = [
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-primary text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>{process.env.NEXT_PUBLIC_CONTACT_PHONE || '+49 1556 0354545'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>{process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@bildungvisa.de'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>{process.env.NEXT_PUBLIC_OFFICE_ADDRESS || 'Frankfurt, Germany'}</span>
              </div>
            </div>
            <div className="text-sm font-medium">
              🇩🇪 Your Gateway to Germany 🌟
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="group">
              <Logo size="large" showText={true} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Main Navigation */}
              <div className="flex items-center space-x-1 mr-8">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                      item.featured
                        ? 'bg-gradient-primary text-white shadow-medium hover:shadow-large'
                        : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Secondary Navigation */}
              <div className="flex items-center space-x-4 border-l border-gray-200 pl-8">
                {secondaryNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </nav>



            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-primary-500 hover:bg-gray-50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in">
              <nav className="flex flex-col space-y-2">
                {/* Featured Items */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-4">
                    Main Services
                  </p>
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-gray-900 hover:bg-gradient-primary hover:text-white font-medium transition-all duration-300 rounded-lg mx-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Secondary Items */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-4">
                    More Info
                  </p>
                  {secondaryNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 font-medium transition-all duration-300 rounded-lg mx-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>


              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}