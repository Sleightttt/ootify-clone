import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Introduction />
      </header>
    </div>
  );
}

export default App;
