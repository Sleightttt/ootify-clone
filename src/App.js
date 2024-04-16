import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import HigherEd from "./components/HigherEd";
import Enterprise from "./components/Enterprise";
import Hospitals from "./components/Hospitals";
import Childrens from "./components/Childrens";
import OurStory from "./components/OurStory";

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
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/childrens-book" element={<Childrens />} />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>
    </>
  );
}

export default App;
