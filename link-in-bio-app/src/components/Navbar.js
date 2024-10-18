import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-black shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Left: YourWebsite (Logo in the left corner, bigger size) */}
        <div className="text-2xl font-bold text-red-500">
          <Link to="/">Zaap Like</Link>
        </div>

        {/* Center: Navigation Links (Bigger size) */}
        <div className="hidden md:flex space-x-10 text-white font-semibold text-xl">
          <Link to="/features" className="hover:text-gray-300">Features</Link>
          <Link to="/gallery" className="hover:text-gray-300">Gallery</Link>
          <Link to="/pricing" className="hover:text-gray-300">Pricing</Link>
          <Link to="/support" className="hover:text-gray-300">Support</Link>
        </div>

        {/* Right: Login and Sign Up (Bigger buttons) */}
        <div className="flex items-center space-x-8">
          <Link to="/login" className="text-xl text-white font-semibold hover:underline">
            Login
          </Link>
          <Link
            to="/register"
            className="px-8 py-3 text-xl border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;