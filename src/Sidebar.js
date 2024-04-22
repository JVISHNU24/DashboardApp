import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCalendar, FaUser, FaTasks, FaWpforms } from "react-icons/fa";
const Sidebar = ({ isOpen = true, toggleSidebar }) => {
  return (
    <nav
      className={`fixed top-10 z-40 bg-gray-800 w-64 py-4 h-full transition duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <h3 className="text-white text-lg mb-4">Menu</h3>
      <ul>
        <li className="flex items-center mb-4">
          <FaHome className="text-white mr-2" />
          <Link to="/dashboard" className="text-white">
            Dashboard
          </Link>
        </li>
        <li className="flex items-center mb-4">
          <FaCalendar className="text-white mr-2" />
          <Link to="/calendar" className="text-white">
            Calendar
          </Link>
        </li>
        <li className="flex items-center mb-4">
          <FaUser className="text-white mr-2" />
          <Link to="/profile" className="text-white">
            Profile
          </Link>
        </li>
        <li className="flex items-center mb-4">
          <FaTasks className="text-white mr-2" />
          <Link to="/products" className="text-white">
            Tasks
          </Link>
        </li>
        <li className="flex items-center mb-4">
          <FaWpforms className="text-white mr-2" />
          <Link to="/forms" className="text-white">
            Forms
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Sidebar;