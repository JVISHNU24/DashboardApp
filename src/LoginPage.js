import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiLock } from "react-icons/fi";
function LoginPage({ onSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const registrationData = JSON.parse(
      sessionStorage.getItem("registrationData")
    );
    if (
      registrationData &&
      registrationData.email === email &&
      registrationData.password === password
    ) {
      onSignIn();
    } else {
      setError("Invalid email or password");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <img
          src="tailadmin.png"
          className="mx-auto h-12 w-auto"
          alt="Tailadmin"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          TailAdmin
        </h2>
        <h2 className="mt-2 text-center text-xl font-semibold text-gray-900">
          Sign in to your account
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm">
            <input
              id="email-address"
              name="email"
              type="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4 rounded-md shadow-sm">
            <input
              id="password"
              name="password"
              type="password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <div className="flex items-center justify-between mt-4">
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </Link>
            <p className="text-sm font-medium text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Register
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="w-full mt-6 py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm font-medium text-gray-600">
            Or continue with social media
          </p>
          <div className="flex justify-center mt-2">
            <button className="mr-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
              Facebook
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full">
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
