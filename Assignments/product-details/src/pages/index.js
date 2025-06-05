import Card from '@/components/Card';

import HeroSection from '@/components/HeroSection';
import FeaturedCategories from '@/components/FeaturedCategories';
import Testimonials from '@/components/Testimonials';

import data from '@/utils/data';
import React from 'react';
import Head from 'next/head';

const Home = () => {


  return (
    
    <div>

       <Head>
        <title>Home | My Store</title>
        <meta name="description" content="Buy the best tech products from My Store" />
      </Head>
      
      <HeroSection />
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
      {/* <FeaturedCategories /> */}
      <Testimonials />
   
    </div>
  );
};

export default Home;