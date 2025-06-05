import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';

const ContactUsPage = () => {
  return (
    <div>
      
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8">
          <p className="mb-4 text-gray-700 text-center">We&#39;d love to hear from you! Please fill out the form below or contact us directly.</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea id="message" rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
              Send Message
            </button>
          </form>
          <div className="mt-6 text-center text-gray-600">
            <p>Or contact us directly:</p>
            <p>Email: <a href="mailto:info@mystore.com" className="hover:underline">info@mystore.com</a></p>
            <p>Phone: +92 300 1234567</p>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default ContactUsPage;