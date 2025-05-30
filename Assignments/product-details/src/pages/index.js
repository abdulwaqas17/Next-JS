import Card from '@/components/Card';
import Navbar from '@/components/Navbar'; // Import the new Navbar
import data from '@/utils/data';
import React from 'react';

export default function Home() {
  return (
    <div>
    
      <div className="container mx-auto py-8">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Our Modern Store</h1>
          <p className="text-gray-600">Discover high-quality products with a seamless shopping experience.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}