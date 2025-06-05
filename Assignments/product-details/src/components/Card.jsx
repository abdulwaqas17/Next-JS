import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-70">
        <Image src={product.image} alt={product.name} layout="fill"  className="rounded-t-lg" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.shortDisc}</p>
        <div className="flex items-center justify-between">
          <p className="text-blue-500 font-bold">${product.price}</p>
          <Link href={`/products/${product.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;