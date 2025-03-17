import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-600 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">MyWebsite</h2>
          <p className="mt-2 text-gray-400">
            Your go-to platform for amazing services. Stay connected with us!
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-green-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-green-400 transition">About</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Social Media Links with SVG Icons */}
        <div>
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition">
              {/* Facebook Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 5.02 3.66 9.18 8.44 9.92V15.1H7.9v-3.03h2.54V9.77c0-2.52 1.5-3.92 3.78-3.92 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.62.77-1.62 1.56v1.9h2.77l-.44 3.03h-2.33v6.89C18.34 21.25 22 17.1 22 12.07z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
              {/* Twitter Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.8 10.8 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.19 9.19 0 01-2.9 1.1A4.52 4.52 0 0016.56 2c-2.48 0-4.5 2-4.5 4.47 0 .34.04.67.12 1A12.9 12.9 0 013 3.88a4.49 4.49 0 001.39 6 4.51 4.51 0 01-2-.55v.06a4.52 4.52 0 003.62 4.4 4.49 4.49 0 01-2 .08 4.51 4.51 0 004.2 3.12A9.1 9.1 0 012 18.57 12.9 12.9 0 008.29 20c8.3 0 12.83-6.88 12.83-12.84v-.6A9.4 9.4 0 0023 3z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition">
              {/* Instagram Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm4.5 4a4 4 0 100 8 4 4 0 000-8zm0 6.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm6-6.9a1 1 0 10-2 0 1 1 0 002 0z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-700 transition">
              {/* LinkedIn Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.45 3H3.55A2.54 2.54 0 001 5.5v13A2.54 2.54 0 003.55 21h16.9A2.54 2.54 0 0023 18.5v-13A2.54 2.54 0 0020.45 3zM7.5 17h-3V9.5h3V17zm-1.5-9.2a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4zm13.5 9.2h-3V13c0-1-.5-1.5-1.25-1.5S13 12 13 13v4h-3V9.5h3v1.2a3 3 0 012.5-1.2c1.75 0 3 1.25 3 3.5V17z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
