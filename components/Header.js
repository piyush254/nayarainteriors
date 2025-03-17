import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-green-600">
          MyLogo
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-green-600 transition">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition">
            Contact
          </a>
        </nav>

        {/* Call to Action */}
        <button className="hidden md:block bg-green-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-700 transition">
          Get Started
        </button>

        {/* Mobile Menu (Hamburger Icon) */}
        <button className="md:hidden p-2 text-gray-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
