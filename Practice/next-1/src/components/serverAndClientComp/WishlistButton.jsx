// app/products/WishlistButton.jsx

"use client";
import '@/app/globals.css'; // Import global styles
import { useState } from "react";

export default function WishlistButton({ product }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    // Simulate API or localStorage
    alert("Added to wishlist:", product.title);
    console.log("Added to wishlist:", product.title);

    setAdded(!added);
  };

  return (
    <button
      onClick={handleAdd}
      className={`mt-2 px-3 py-1 rounded ${
        added ? "bg-green-500" : "bg-blue-500"
      } text-white`}
    >
      {added ? "Added ✅" : "Add to Wishlist ❤️"}
    </button>
  );
}
