// src/components/AdvancedLinkSection.js
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const AdvancedLinkSection = () => {
  return (
    <motion.div
      className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white"
      style={{
        background: `
          linear-gradient(180deg, #002244 0%, #000000 100%)
        `,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* White dots similar to the first section */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white opacity-20 rounded-full"></div>
      <div className="absolute top-1/3 left-3/4 w-2 h-2 bg-white opacity-20 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white opacity-20 rounded-full"></div>
      <div className="absolute top-3/4 left-1/5 w-2 h-2 bg-white opacity-15 rounded-full"></div>
      <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-white opacity-10 rounded-full"></div>

      {/* Large Bold Line Split into Two Lines */}
      <motion.h2
        className="text-6xl font-extrabold mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        The Most Advanced <br />
        <span className="text-blue-400 font-bold">Link-in-Bio. Ever.</span>
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="text-xl max-w-xl mx-auto mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
      >
        Everything you need to run your creator-business, in one place. It's quick, easy, and free to get started.
      </motion.p>
      
      {/* Get Started Button */}
      <motion.a
        href="/get-started"
        className="px-12 py-4 bg-red-600 text-white text-2xl font-bold rounded-xl shadow-lg flex items-center justify-center space-x-2 hover:bg-red-700 transition duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <span>Get Started</span>
        <FiArrowRight className="ml-2 text-white" />
      </motion.a>
    </motion.div>
  );
};

export default AdvancedLinkSection;