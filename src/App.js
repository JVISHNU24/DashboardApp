import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import RegisterPage from "./RegisterPage";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";
import LineGraph from "./LineGraph";
import ProductPage from "./ProductPage.js";
function App() {
  const [isLogin, setLogin] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSignIn = () => {
    setLogin(true);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Router>
      <div className="App">
        <div className="flex">
          {isLogin && <NavigationBar toggleSidebar={toggleSidebar} />}
          {isLogin && <Sidebar isOpen={isSidebarOpen} />}
        </div>
        <Routes>
          {!isLogin && (
            <>
              <Route path="/" element={<LoginPage onSignIn={handleSignIn} />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </>
          )}
          {isLogin && (
            <>
              <Route path="/dashboard" element={<LineGraph />} />
              <Route path="/products" element={<ProductPage />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}
export default App;