import React from "react";
import { Calendar } from "antd";
import { FiCalendar } from "react-icons/fi";
const Calender = ({ isOpen }) => {
  return (
    <div className={` ${isOpen ? "ml-64 lg:w-4/5" : "w-full"}`}>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-semibold">Calendar</span>
          <FiCalendar className="text-gray-500 h-6 w-6" />
        </div>
        <div className="animate-fadeIn">
          <Calendar fullscreen={false} />
        </div>
      </div>
    </div>
  );
};
export default Calender;
