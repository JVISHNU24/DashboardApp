import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaCalendar, FaUser, FaTasks, FaWpforms } from "react-icons/fa";
const Sidebar = ({ isOpen = true, toggleSidebar }) => {
  const location = useLocation();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    };
  }, [isOpen]);
  const isActive = (path) => {
    return location.pathname === path ? "bg-gray-900" : "";
  };
  const handleLinkClick = () => {
    if (window.innerWidth < 640) {
      toggleSidebar();
    }
  };
  return (
    <nav
      className={`fixed left-0 top-20 z-40 bg-gray-800 w-full md:w-64 h-full transition duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <h3 className="text-white text-lg mb-4 pl-16"></h3>
      <ul>
        <li className={`flex items-center pl-4 mb-4 ${isActive("/dashboard")}`}>
          <FaHome className="text-white mr-2 text-2xl " />
          <Link
            to="/dashboard"
            className="text-white pl-2 py-5"
            style={{ paddingLeft: "0.5rem" }}
            onClick={handleLinkClick}
          >
            Dashboard
          </Link>
        </li>
        <li className={`flex items-center pl-4 mb-4 ${isActive("/calendar")}`}>
          <FaCalendar className="text-white text-2xl mr-2" />
          <Link
            to="/calendar"
            className="text-white pl-2 py-5"
            style={{ paddingLeft: "0.5rem" }}
            onClick={handleLinkClick}
          >
            Calendar
          </Link>
        </li>
        <li className={`flex items-center pl-4 mb-4 ${isActive("/profile")}`}>
          <FaUser className="text-white text-2xl mr-2" />
          <Link
            to="/profile"
            className="text-white pl-2 py-5"
            style={{ paddingLeft: "0.5rem" }}
            onClick={handleLinkClick}
          >
            Profile
          </Link>
        </li>
        <li className={`flex items-center pl-4 mb-4 ${isActive("/products")}`}>
          <FaTasks className="text-white text-2xl mr-2" />
          <Link
            to="/products"
            className="text-white pl-2 py-5"
            style={{ paddingLeft: "0.5rem" }}
            onClick={handleLinkClick}
          >
            Tasks
          </Link>
        </li>
        <li className={`flex items-center pl-4 mb-4 ${isActive("/forms")}`}>
          <FaWpforms className="text-white text-2xl mr-2" />
          <Link
            to="/forms"
            className="text-white pl-2 py-5"
            style={{ paddingLeft: "0.5rem" }}
            onClick={handleLinkClick}
          >
            Forms
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Sidebar;
