import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Mentions from "./components/Mentions";
import Bestfriend from "./components/Bestfriend";
import Mental from "./components/Mental";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Introduction />
        <Mentions />
        <Bestfriend />
        <Mental />
      </header>
    </div>
  );
}

export default App;
