"use client";
// src/pages/ContactPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  const inputClasses =
    "w-full p-3 sm:p-4 rounded-md bg-gray-700 border border-gray-600 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 text-white shadow-inner-3d transition-all duration-300 ease-in-out text-sm sm:text-base"; // Adjusted padding and text size
  const labelClasses =
    "block text-base sm:text-lg font-medium text-gray-300 mb-1 sm:mb-2"; // Adjusted text size and margin

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4 sm:p-8 text-white">
      {" "}
      {/* Adjusted padding */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 text-purple-400 drop-shadow-lg">
        Get in Touch
      </h1>{" "}
      {/* Adjusted text size and margin */}
      <motion.form
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 sm:p-10 rounded-lg shadow-3d-dark max-w-md sm:max-w-xl w-full transform hover:scale-102 transition-all duration-300 ease-in-out" // Adjusted padding and max-width
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="mb-4 sm:mb-6">
          {" "}
          {/* Adjusted margin */}
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>
        <div className="mb-4 sm:mb-6">
          {" "}
          {/* Adjusted margin */}
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>
        <div className="mb-6 sm:mb-8">
          {" "}
          {/* Adjusted margin */}
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4" // Adjusted rows for smaller screens
            className={`${inputClasses} resize-y`}
            required
          ></textarea>
        </div>
        <motion.button
          whileHover={{
            scale: 1.05,
            rotateX: 3,
            rotateY: 3,
            boxShadow: "0 0 25px rgba(128, 0, 128, 0.6)",
          }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 sm:py-4 rounded-md text-lg sm:text-xl shadow-3d-light transition-all duration-300 ease-in-out relative overflow-hidden" // Adjusted padding and text size
          style={{ transformStyle: "preserve-3d" }}
        >
          <span className="relative z-10">Send Message</span>
          <div className="absolute inset-0 bg-purple-700 opacity-20"></div>
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactPage;
