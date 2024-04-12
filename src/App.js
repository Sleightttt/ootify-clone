import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

import "./app.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
