import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-blue-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Discover Amazing Products Online
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Your one-stop shop for quality goods and exceptional service.
        </p>
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
