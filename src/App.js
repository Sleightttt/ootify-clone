import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Mentions from "./components/Mentions";
import Bestfriend from "./components/Bestfriend";
import Mental from "./components/Mental";
import Notsure from "./components/Notsure";
import How from "./components/How";
import Whowehelp from "./components/Whowehelp";
import Tools from "./components/Tools";
import Ourteam from "./components/Ourteam";
import Footer from "./components/Footer";
import "./app.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Introduction />
        <div className="blue-bg">
          <Mentions />
          <Bestfriend />
          <Mental />
          <Notsure />
        </div>
        <How />
        <Whowehelp />
        <Tools />
        <Ourteam />
        <Footer />
      </header>
    </div>
  );
}

export default App;
