import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';

const AboutUsPage = () => {
  return (
    <div>
      
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
        <div className="prose max-w-2xl mx-auto">
          <p>Welcome to MyStore! We are passionate about providing high-quality products and exceptional customer service.</p>
          <p>Our journey began in [Year] with a vision to [Your Vision]. Since then, we have grown to serve customers worldwide, offering a wide range of [Your Product Categories].</p>
          <p>At MyStore, we believe in [Your Core Values]. We are committed to [Your Commitments, e.g., sustainability, ethical sourcing, customer satisfaction].</p>
          <h2>Our Team</h2>
          <p>We have a dedicated team of professionals who are passionate about what they do. From our product development team to our customer support specialists, everyone at MyStore is committed to providing you with the best possible experience.</p>
          <h2>Our Mission</h2>
          <p>Our mission is to [Your Mission Statement].</p>
          <h2>Our Vision</h2>
          <p>Our vision is to [Your Vision Statement].</p>
          <p>Thank you for being a part of the MyStore community!</p>
        </div>
      </div>
    
    </div>
  );
};

export default AboutUsPage;