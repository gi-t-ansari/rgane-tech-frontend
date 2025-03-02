import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const BACKEND_URL = import.meta.env.VITE_API_BASE_URL;

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        JobConnect
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link to="/candidates" className="text-gray-700 hover:text-blue-600">
          Candidates
        </Link>
        <Link to="/profile" className="text-gray-700 hover:text-blue-600">
          Profile
        </Link>
      </div>

      {/* Login Button */}
      <a
        href={`${BACKEND_URL}/auth/linkedin`}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        <FaLinkedin size={20} />
        Login with LinkedIn
      </a>
    </nav>
  );
};

export default Navbar;
