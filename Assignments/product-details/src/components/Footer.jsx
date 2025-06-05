import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-2">Information</h4>
          <ul>
            <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
            <li><Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-gray-300">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Customer Service</h4>
          <ul>
            <li><Link href="/faq" className="hover:text-gray-300">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-gray-300">Shipping & Returns</Link></li>
            <li><Link href="/payment" className="hover:text-gray-300">Secure Payments</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
          <p className="text-gray-400">123 Main Street, Karachi, Pakistan</p>
          <p className="text-gray-400">Email: info@mystore.com</p>
          <p className="text-gray-400">Phone: +92 300 1234567</p>
          {/* Add social media icons here */}
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;