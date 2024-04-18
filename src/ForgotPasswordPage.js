import React, { useState } from "react";
import { Link } from "react-router-dom";
function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            src="tailadmin.png"
            className="mx-auto h-12 w-auto"
            alt="Tailadmin"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
            TailAdmin{" "}
          </h2>
          <h2 className="mt-2 text-center text-xl font-semibold text-gray-100">
            Forgot Your Password?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Please enter your email address and we'll send you instructions on
            how to reset your password.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-800 text-white"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset Password
            </button>
          </div>
          <div className="text-center text-sm text-gray-300">
            <Link to="/" className="mt-3 block hover:text-white">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ForgotPasswordPage;
