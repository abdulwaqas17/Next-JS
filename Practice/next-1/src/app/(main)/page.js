'use client';

import { motion } from "framer-motion";



const HomePage = () => {


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4 sm:p-8">
      {" "}
      {/* Adjusted padding */}
      <motion.h1
        initial={{ opacity: 0, y: -50, rotateX: 90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6 text-center drop-shadow-lg leading-tight" // Adjusted text sizes and leading
      >
        Welcome to Our <span className="text-purple-500">VIP</span> World
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50, rotateX: -90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 text-center max-w-sm sm:max-w-xl md:max-w-2xl leading-relaxed px-4" // Adjusted text sizes and max-width
      >
        Experience unparalleled design and innovation. We craft digital
        experiences that stand out.
      </motion.p>
      <motion.button
        whileHover={{
          scale: 1.1,
          rotateX: 5,
          rotateY: 5,
          boxShadow: "0 0 30px rgba(128, 0, 128, 0.7)",
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-md sm:text-lg shadow-3d-light transition-all duration-300 ease-in-out relative overflow-hidden" // Adjusted button padding and text size
        style={{ transformStyle: "preserve-3d" }}
      >
        <span className="relative z-10">Explore Our Services</span>
        <div
          className="absolute inset-0 bg-purple-700 opacity-20"
          style={{ transform: "translateZ(-10px)" }}
        ></div>
      </motion.button>
    </div>
  );
};

export default HomePage;
