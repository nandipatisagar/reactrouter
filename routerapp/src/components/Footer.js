import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Copyright Text */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>

        {/* Register Button */}
        <div>
          <a 
            href="/register" 
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            Register for Free
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
