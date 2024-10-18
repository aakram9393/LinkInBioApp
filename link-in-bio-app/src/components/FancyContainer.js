// src/components/FancyContainer.js
import React from "react";
import { motion } from "framer-motion";

function FancyContainer({ children, className }) {
  return (
    <motion.div
      className={`bg-white shadow-lg rounded-lg ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        border: '1px solid #ccc', // Slight border for separation
        boxSizing: 'border-box',   // To make padding/border not affect width
        padding: '20px',           // Padding inside the container
      }}
    >
      <div className="text-center">
        {children}
      </div>
    </motion.div>
  );
}

export default FancyContainer;