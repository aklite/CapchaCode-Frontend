// import all essential modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import all essential styles
import "flowbite";
import "@mui/material";
import "@emotion/react";
import "@emotion/styled";

// import all essential components & pages
import Homepage from "./Pages/Home/HomePage"; // Importing the Homepage
import NotFound from "./Pages/Home/404"; // Importing the 404 Page
import SignupPage from "./Pages/Auth/SignupPage"; // Importing the Signup Page
import LoginPage from "./Pages/Auth/LoginPage"; // Importing the Login Page
import Forget_PasswordPage from "./Pages/Auth/Forget Password Page"; // Importing the Forget Password Page
import Dashboard from "./Pages/Dashboard/Dashboard"; // Importing the Dashboard Page
import ViewSingleDomainDetails from "./Components/Dashboard Components/Domain Section/Domain Details";

function RouterFile() {
  return (
          <Router>
            <Routes>
              <Route path="/" exac element={<Homepage />} />
              <Route path="/signup" exac element={<SignupPage />} />
              <Route path="/login" exac element={<LoginPage />} />
              <Route path="/forgot-password" exac element={<Forget_PasswordPage/>}/>
              <Route path="/dashboard" exac element={<Dashboard />}/>
              <Route path="/view/:id" exac element={<ViewSingleDomainDetails />}/>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
  );
}

export default RouterFile;
