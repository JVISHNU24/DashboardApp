import React, { useState, useEffect } from "react";
import { FaBars, FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavigationBar = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () => {
    console.log("Logout clicked");
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`flex justify-between items-center w-full ${
        isNavbarFixed ? "fixed top-0 bg-gray-900 shadow-lg z-10" : "bg-gray-900"
      }`}
    >
      <div className="flex items-center">
        <div className="mr-4">
          <FaBars
            onClick={toggleSidebar}
            className="cursor-pointer text-white"
            aria-label="Toggle Sidebar"
            role="button"
          />
        </div>
        <div className="mr-4">
          <img className="w-10 h-10" src="tailadmin.png" alt="TailAdmin Logo" />
        </div>
        <div className="mr-4 text-xl font-bold hidden md:block text-white">
          Admin Dashboard
        </div>
        <div className="mr-4">
          <input
            className="px-2 py-1 rounded border border-gray-600 text-white focus:outline-none hidden md:block bg-gray-800"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <FaBell aria-label="Notifications" className="text-white" />
        </div>
        <div className="mr-4">
          <FaEnvelope aria-label="Messages" className="text-white" />
        </div>
        <div className="mr-4 text-white">Vishnu</div>
        <div className="relative mr-4">
          <div onClick={toggleDropdown} role="button" aria-label="User Profile">
            <FaUserCircle
              className="w-10 h-10 rounded-full cursor-pointer text-white"
              aria-label="User Profile"
            />
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 z-10">
              <Link
                to="/settings"
                className="block px-4 py-2 text-white hover:bg-gray-700"
              >
                Settings
              </Link>
              <button
                type="button"
                className="block w-full px-4 py-2 text-left text-white hover:bg-gray-700"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default NavigationBar;

