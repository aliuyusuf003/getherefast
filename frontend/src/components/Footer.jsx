// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} GetThereFast. All rights reserved.</p>
        <p className="mt-1">Built with ❤️ using Django + React</p>
      </div>
    </footer>
  );
};

export default Footer;
