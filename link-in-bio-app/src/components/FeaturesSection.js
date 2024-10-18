// src/components/FeaturesSection.js
import React from "react";
import FancyContainer from "./FancyContainer";

const FeaturesSection = () => {
  return (
    <div className="relative z-10 bg-gray-100 py-16 px-4">
      <div className="max-w-screen-lg mx-auto space-y-16">
        
        {/* AutoSync Feature */}
        <FancyContainer>
          <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Image */}
            <img
              src="https://via.placeholder.com/400x300"  // Placeholder image, replace with a real URL
              alt="AutoSync Feature"
              className="w-full lg:w-1/2 rounded-lg shadow-lg"
            />
            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4 text-red-600">AutoSync</h3>
              <p className="text-lg text-gray-700">
                Automatically sync all your links across various platforms with ease. No more manual updating—just set it up once and let AutoSync handle the rest.
              </p>
            </div>
          </div>
        </FancyContainer>

        {/* Organize Links Feature */}
        <FancyContainer>
          <div className="flex flex-col lg:flex-row-reverse items-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Image */}
            <img
              src="https://via.placeholder.com/400x300"  // Placeholder image, replace with a real URL
              alt="Organize Links Feature"
              className="w-full lg:w-1/2 rounded-lg shadow-lg"
            />
            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4 text-red-600">Organize Links</h3>
              <p className="text-lg text-gray-700">
                Keep your links organized in neat folders. Whether it's for different projects or social platforms, you can easily group and access your links.
              </p>
            </div>
          </div>
        </FancyContainer>

        {/* Publish Blog Posts Feature */}
        <FancyContainer>
          <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Image */}
            <img
              src="https://via.placeholder.com/400x300"  // Placeholder image, replace with a real URL
              alt="Publish Blog Posts Feature"
              className="w-full lg:w-1/2 rounded-lg shadow-lg"
            />
            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4 text-red-600">Publish Blog Posts</h3>
              <p className="text-lg text-gray-700">
                Easily create and publish blog posts to engage with your audience. Share insights, updates, and more—all from your bio link page.
              </p>
            </div>
          </div>
        </FancyContainer>

        {/* Collect Emails Feature */}
        <FancyContainer>
          <div className="flex flex-col lg:flex-row-reverse items-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Image */}
            <img
              src="https://via.placeholder.com/400x300"  // Placeholder image, replace with a real URL
              alt="Collect Emails Feature"
              className="w-full lg:w-1/2 rounded-lg shadow-lg"
            />
            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4 text-red-600">Collect Emails</h3>
              <p className="text-lg text-gray-700">
                Grow your mailing list by adding an email collection form to your bio link page. Keep your audience engaged and updated with newsletters.
              </p>
            </div>
          </div>
        </FancyContainer>

        {/* Custom Domains Feature */}
        <FancyContainer>
          <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Image */}
            <img
              src="https://via.placeholder.com/400x300"  // Placeholder image, replace with a real URL
              alt="Custom Domains Feature"
              className="w-full lg:w-1/2 rounded-lg shadow-lg"
            />
            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4 text-red-600">Custom Domains</h3>
              <p className="text-lg text-gray-700">
                Use your own custom domain for a more professional look. Make your bio link page truly yours with a personalized web address.
              </p>
            </div>
          </div>
        </FancyContainer>

        {/* Online Store Feature */}
        <FancyContainer>
          <div className="flex flex-col lg:flex-row-reverse items-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Image */}
            <img
              src="https://via.placeholder.com/400x300"  // Placeholder image, replace with a real URL
              alt="Online Store Feature"
              className="w-full lg:w-1/2 rounded-lg shadow-lg"
            />
            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4 text-red-600">Online Store</h3>
              <p className="text-lg text-gray-700">
                Sell products directly from your bio link page. Whether it's digital goods, merchandise, or services, set up your store with ease.
              </p>
            </div>
          </div>
        </FancyContainer>

      </div>
    </div>
  );
};

export default FeaturesSection;