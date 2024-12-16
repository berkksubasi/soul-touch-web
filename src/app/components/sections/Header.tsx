'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-indigo-700 shadow-lg' : 'bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500'
      } text-white`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-1">
          <Image src="/icon.png" alt="Soul Touch Icon Logo" width={40} height={40} className="rounded-full" />
          <h1 className="text-2xl font-bold tracking-wide">SoulTouch</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="hover:text-yellow-400 transition">Hizmetler</a>
          <a href="#meditation" className="hover:text-yellow-400 transition">Meditasyon</a>
          <a href="#numerology" className="hover:text-yellow-400 transition">Numeroloji</a>
          <a href="#testimonials" className="hover:text-yellow-400 transition">Yorumlar</a>
          <a href="#cta" className="hover:text-yellow-400 transition">İndir</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-indigo-800 text-white p-4 space-y-4">
          <a href="#services" className="block hover:text-yellow-400 transition">Hizmetler</a>
          <a href="#meditation" className="block hover:text-yellow-400 transition">Meditasyon</a>
          <a href="#numerology" className="block hover:text-yellow-400 transition">Numeroloji</a>
          <a href="#testimonials" className="block hover:text-yellow-400 transition">Yorumlar</a>
          <a href="#cta" className="block hover:text-yellow-400 transition">İndir</a>
        </nav>
      )}
    </header>
  );
}
