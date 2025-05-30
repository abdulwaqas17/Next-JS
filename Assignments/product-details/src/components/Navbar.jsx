import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          My Awesome Store
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-blue-200">
              Products
            </Link>
          </li>
          {/* Add more navigation links here */}
        </ul>
        {/* Optional: Add a search bar or user icon here */}
      </div>
    </nav>
  );
};

export default Navbar;