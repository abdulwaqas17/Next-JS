import Link from 'next/link';
import React from 'react';
import { FiShoppingCart, FiUser } from 'react-icons/fi'; // Example icons

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyStore
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600">
            Products
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">
            Contact Us
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative">
            <FiShoppingCart className="text-xl text-gray-700 hover:text-blue-600" />
            {/* Optional: Cart item count */}
            {/* <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span> */}
          </Link>
          <Link href="/login" className="text-gray-700 hover:text-blue-600">
            <FiUser className="text-xl" />
          </Link>
          {/* Mobile Menu Button (you'll need to add functionality with JavaScript) */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {/* Example Hamburger Icon */}
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;