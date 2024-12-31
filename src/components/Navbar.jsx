import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-orange-400 text-white">
      {/* <div></div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">Logo</span>
            </div>
            <span className="text-2xl font-serif italic ">Feane</span>
          </div>
          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-7">
              
            <Link to="/" className="hover:text-yellow-500">Home
            </Link>
            <Link to="/menu" className="hover:text-yellow-500">
              Menu
            </Link>
            <Link to="/about" className="hover:text-yellow-500">
              About
            </Link>
            <Link to="/booktable" className="hover:text-yellow-500">
              Booktable
            </Link>
            {/* <button className='bg-blue-800 text-white px-4 py-2 rounded-md'>Login</button> */}
          </div>
          {/* Icons and Order Button */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-yellow-500">
              <i className="fas fa-user"></i>
            </button>
            <button className="text-white hover:text-yellow-500">
              <i className="fas fa-shopping-cart"></i>
            </button>
            <button className="text-white hover:text-yellow-500">
              <i className="fas fa-search"></i>
            </button>
            <a
              href="#"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium"
            >
              Order Online
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
