'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-pink-100">
      <nav className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Clickable Logo that routes to Home */}
          <Link 
            href="/" 
            className="text-xl sm:text-2xl font-bold text-pink-600 hover:text-pink-700 transition-colors duration-300 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Kundan ❤️ Zoya
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium text-sm lg:text-base">
              Home
            </Link>
            <Link href="/memories" className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium text-sm lg:text-base">
              Memories
            </Link>
            <Link href="/proposal" className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium text-sm lg:text-base">
              Proposal
            </Link>
            <Link href="/message" className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium text-sm lg:text-base">
              Message
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-pink-100 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-pink-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/memories" 
                className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-pink-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Memories
              </Link>
              <Link 
                href="/proposal" 
                className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-pink-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Proposal
              </Link>
              <Link 
                href="/message" 
                className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-pink-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Message
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;