import React, { useState } from "react";
import { Link } from "react-router-dom";
function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleRegister = (e) => {
    e.preventDefault();
    sessionStorage.setItem("registrationData", JSON.stringify(formData));
    console.log("Registration data saved temporarily:", formData);
    setFormData({
      username: "",
      email: "",
      password: "",
      age: "",
    });
  };
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-lg">
        <div className="text-center">
          <img
            src="tailadmin.png"
            className="mx-auto h-12 w-auto"
            alt="Tailadmin"
          />
          <h2 className="mt-2 text-xl font-semibold text-gray-900">
            TailAdmin
          </h2>
          <h2 className="mt-2 text-lg font-semibold text-gray-700">
            Create an Account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div className="mt-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="input-style"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="input-style"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="input-style"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              required
              className="input-style"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="mt-6">
            <button type="submit" className="btn-style">
              Register
            </button>
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="block text-sm text-gray-600 hover:text-gray-400"
            >
              Already have an account? Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RegisterPage;