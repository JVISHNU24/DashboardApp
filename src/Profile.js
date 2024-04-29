import React from "react";
import { FaUser, FaEnvelope, FaUserClock } from "react-icons/fa";
const Profile = () => {
  const registrationData = JSON.parse(
    sessionStorage.getItem("registrationData")
  );
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-lg">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
        </div>
        {registrationData && (
          <div className="mt-8 space-y-4">
            <div className="bg-gray-200 rounded-lg p-4 shadow-md flex items-center">
              <FaUser className="text-gray-600 mr-2" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Username
                </h3>
                <p className="text-gray-700">{registrationData.username}</p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-4 shadow-md flex items-center">
              <FaEnvelope className="text-gray-600 mr-2" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-700">{registrationData.email}</p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-4 shadow-md flex items-center">
              <FaUserClock className="text-gray-600 mr-2" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Age</h3>
                <p className="text-gray-700">{registrationData.age}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Profile;
