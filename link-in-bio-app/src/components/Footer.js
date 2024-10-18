// src/components/Footer.js
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          {/* Platform Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="/pricing" className="hover:underline">Pricing</a></li>
              <li><a href="/feature-request" className="hover:underline">Feature Request</a></li>
              <li><a href="/whats-new" className="hover:underline">What's New</a></li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services Vs</h3>
            <ul className="space-y-2">
              <li><a href="/compare" className="hover:underline">Compare</a></li>
              <li><a href="/vs-linktree" className="hover:underline">Vs Linktree</a></li>
              <li><a href="/vs-beacons" className="hover:underline">Vs Beacons</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/instagram-course" className="hover:underline">Instagram Course</a></li>
              <li><a href="/social-media-templates" className="hover:underline">Social Media Templates</a></li>
              <li><a href="/magic-card" className="hover:underline">MagicCard</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about-us" className="hover:underline">About Us</a></li>
              <li><a href="/jobs" className="hover:underline">Jobs</a></li>
              <li><a href="/status" className="hover:underline">Current Status</a></li>
            </ul>
          </div>

          {/* Connect Section with Social Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 text-center border-t border-gray-700 pt-6">
          <p>&copy; 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;