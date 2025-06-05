import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alice Johnson',
      quote: 'Great products and excellent customer service! I highly recommend this store.',
      image: '/images/avatar1.jpg', // Replace with your image
    },
    {
      name: 'Bob Williams',
      quote: 'Fast shipping and high-quality items. I will definitely be a returning customer.',
      image: '/images/avatar2.jpg', // Replace with your image
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img src={testimonial.image} alt={testimonial.name} className="object-cover w-full h-full" />
                </div>
              </div>
              <p className="text-gray-700 italic mb-3">"{testimonial.quote}"</p>
              <p className="text-gray-600 font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;