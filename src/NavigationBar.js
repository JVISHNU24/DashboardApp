import React, { useState, useEffect } from "react";
import { FaBars, FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavigationBar = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
  const handleLogout = (e) => {
    e.preventDefault();
    console.log("Logout clicked");
    window.location.href = "/";
  };
  return (
    <header
      className={`h-20 flex justify-between items-center w-full transition duration-500 ${
        isNavbarFixed ? "fixed top-0 bg-gray-900 shadow-lg z-10" : "bg-gray-900"
      }`}
    >
      <div className="flex items-center">
        <div className="ml-4">
          <FaBars
            onClick={toggleSidebar}
            className="cursor-pointer text-white"
            aria-label="Toggle Sidebar"
            role="button"
          />
        </div>
        <div className="ml-8 text-xl font-bold hidden md:block text-white">
          Admin Dashboard
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
              className="w-10 h-10 rounded-full cursor-pointer text-white transition duration-300 transform hover:scale-110"
              aria-label="User Profile"
            />
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 z-10 rounded-lg shadow-lg">
              <Link
                to="/settings"
                className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300"
              >
                Settings
              </Link>
              <Link
                to="/"
                className="block w-full px-4 py-2 text-left text-white hover:bg-gray-700 transition duration-300"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default NavigationBar;
