'use client';

import { motion } from 'framer-motion';

const AboutPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -30 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 sm:p-8 text-white"> {/* Adjusted padding */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 text-purple-400 drop-shadow-lg">About Us</h1> {/* Adjusted text size and margin */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl lg:max-w-6xl mx-auto"> {/* Changed here */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-3d-dark transform hover:rotateY(5deg) hover:rotateX(2deg) transition-all duration-300 ease-in-out" // Adjusted padding
          style={{ transformStyle: 'preserve-3d' }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 text-purple-300">Our Vision</h2> {/* Adjusted text size and margin */}
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed"> {/* Adjusted text size */}
            To redefine digital experiences through cutting-edge design and innovative technology. We believe in creating
            immersive and memorable interactions that leave a lasting impression. Our commitment is to excellence and pushing
            the boundaries of what's possible in the digital realm.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, ...cardVariants.visible.transition }}
          className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-3d-dark transform hover:rotateY(-5deg) hover:rotateX(-2deg) transition-all duration-300 ease-in-out" // Adjusted padding
          style={{ transformStyle: 'preserve-3d' }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 text-purple-300">Our Team</h2> {/* Adjusted text size and margin */}
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed"> {/* Adjusted text size */}
            Comprised of visionary designers, expert developers, and strategic thinkers, our team is passionate about bringing
            your ideas to life. We foster a collaborative environment where creativity thrives and challenges are met with
            innovative solutions. Together, we build the future.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4, ...cardVariants.visible.transition }}
        className="mt-8 sm:mt-12 bg-gray-800 p-6 sm:p-8 rounded-lg shadow-3d-dark max-w-xl md:max-w-4xl mx-auto transform hover:scale-105 transition-all duration-300 ease-in-out" // Adjusted margin, padding, max-width
        style={{ transformStyle: 'preserve-3d' }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 text-purple-300 text-center">Our Philosophy</h2> {/* Adjusted text size and margin */}
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center"> {/* Adjusted text size */}
          At VIP Studio, we combine aesthetics with functionality, creating designs that are not only beautiful but also
          highly effective. We prioritize user experience, ensuring every interaction is seamless and intuitive.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutPage;