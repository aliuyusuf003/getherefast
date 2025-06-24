// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Logout } from "../App";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
        
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          GetThereFast
        </Link>
        <nav className="space-x-4 hidden md:block">
          <Link to="/rides" className="text-gray-700 hover:text-blue-600">Rides</Link>
          <Link to="/drivers" className="text-gray-700 hover:text-blue-600">Drivers</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        </nav>
        <div className="flex items-center space-x-4">
            <Link
        to="/logout"
        className="hidden md:inline-block text-sm bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
        Logout
    </Link>
          {/* <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-800" />
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
