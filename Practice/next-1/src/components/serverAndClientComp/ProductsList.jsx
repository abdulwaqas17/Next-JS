import '@/app/globals.css'; // Import global styles
// app/products/ProductsList.jsx
export default async function ProductsList() {
  const res = await fetch('https://fakestoreapi.com/products?limit=5');
  const products = await res.json();

  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4">
          <h2 className="font-bold">{product.title}</h2>
          <p>${product.price}</p>

          {/* Pass product to client component */}
          <WishlistButton product={product} />
        </div>
      ))}
    </div>
  );
}

import WishlistButton from './WishlistButton'; // Important
