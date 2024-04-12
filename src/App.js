import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import HigherEd from "./components/HigherEd";

import "./app.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/HigherEd" element={<HigherEd />} />
      </Routes>
    </>
  );
}

export default App;
