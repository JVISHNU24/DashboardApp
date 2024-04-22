import React, { useState } from "react";
import { Link } from "react-router-dom";
function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <div className="text-center mb-8">
          <img src="tailadmin.png" className="mx-auto h-12" alt="TailAdmin" />
          <h2 className="mt-2 text-2xl font-semibold text-gray-900">
            Forgot Your Password?
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Please enter your email address and we'll send you instructions on
            how to reset your password.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset Password
            </button>
          </div>
          <div className="mt-4 text-center text-sm text-gray-700">
            <Link to="/" className="block hover:text-indigo-600">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ForgotPasswordPage;
