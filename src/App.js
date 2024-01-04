import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Mentions from "./components/Mentions";
import Bestfriend from "./components/Bestfriend";
import Mental from "./components/Mental";
import Notsure from "./components/Notsure";
import How from "./components/How";

import "./app.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Introduction />
        <Mentions />
        <Bestfriend />
        <Mental />
        <Notsure />
        <How />
      </header>
    </div>
  );
}

export default App;
