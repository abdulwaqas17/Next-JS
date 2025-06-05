import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Install react-icons for social media icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 shadow-inner-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Copyright Section */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm sm:text-base text-gray-400">&copy; {new Date().getFullYear()} VIP Studio. All rights reserved.</p>
          </div>

          {/* Navigation Links */}
          <div className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4 sm:space-x-6 text-sm sm:text-base">
              <li><a href="/" className="hover:text-purple-400 transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-purple-400 transition-colors duration-300">About</a></li>
              <li><a href="/contact" className="hover:text-purple-400 transition-colors duration-300">Contact</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;