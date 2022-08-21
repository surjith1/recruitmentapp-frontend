import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Topbar from "./Pages/Topbar";
import RecruiterMain from "./Pages/Recruiter Pages/RecruiterMain";
import ApplicantMain from "./Pages/Applicant Pages/ApplicantMain";
import Profile from "./Pages/Applicant Pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Topbar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recruiter-main" element={<RecruiterMain />} />
        <Route path="/applicant-main" element={<ApplicantMain />} />
        <Route path="/applicant-profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
