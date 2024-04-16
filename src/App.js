import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import HigherEd from "./components/HigherEd";
import Enterprise from "./components/Enterprise";

import "./app.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/higher-ed" element={<HigherEd />} />
        <Route path="/enterprise" element={<Enterprise />} />
      </Routes>
    </>
  );
}

export default App;
