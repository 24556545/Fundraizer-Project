import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              FundraiserApp
            </Link>
          </div>

          {/* Toggle button (for mobile view) */}
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none focus:text-indigo-600"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {/* Main Menu (for desktop view) */}
          <div className="hidden md:flex md:space-x-4">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/search" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Search
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
            <Link to="/register" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Register
            </Link>
            <Link to="/fundraisers" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Fundraisers
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link to="/search" className="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">
            Search
          </Link>
          <Link to="/fundraisers" className="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">
            Fundraisers
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
