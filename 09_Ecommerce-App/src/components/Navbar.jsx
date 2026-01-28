import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-semibold">Fstore</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/") ? "bg-blue-600 text-white" : "hover:bg-gray-100"
              }`}
            >
              <i className="bi bi-house-door mr-2"></i>
              Home
            </Link>

            <Link
              to="/add-product"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/add-product")
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <i className="bi bi-plus-circle mr-2"></i>
              Add Product
            </Link>

            <Link
              to="/sign-in"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/sign-in")
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <i className="bi bi-box-arrow-in-right mr-2"></i>
              Sign In
            </Link>

            <Link
              to="/sign-up"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/sign-up")
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <i className="bi bi-person-plus mr-2"></i>
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <i
              className={`${isMenuOpen ? "bi bi-x-lg" : "bi bi-list"} text-2xl`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-md text-base font-medium ${
                isActive("/") ? "bg-blue-600 text-white" : "hover:bg-gray-100"
              }`}
            >
              <i className="bi bi-house-door mr-2"></i>
              Home
            </Link>

            <Link
              to="/add-product"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-md text-base font-medium ${
                isActive("/add-product")
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <i className="bi bi-plus-circle mr-2"></i>
              Add Product
            </Link>

            <Link
              to="/sign-in"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-md text-base font-medium ${
                isActive("/sign-in")
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <i className="bi bi-box-arrow-in-right mr-2"></i>
              Sign In
            </Link>

            <Link
              to="/sign-up"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-md text-base font-medium ${
                isActive("/sign-up")
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <i className="bi bi-person-plus mr-2"></i>
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
