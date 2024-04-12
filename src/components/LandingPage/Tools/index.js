import React from "react";
import "./tools.css";

const Tools = () => {
  return (
    <>
      <section className="bf-container">
        <div className="bf-text">
          <div className="bf-header">
            With the right tools, Anything is possible.
          </div>
          <div className="bf-body">
            Don't let the challenges in your life hold you back from exceeding
            your true potential. There's no one size fits all solution. Finding
            the right set of tools that work for you is the most important
            aspect of navigating our way through life.
          </div>
          <button className="begin-button">Begin Your Journey</button>
        </div>
        <div className="bf-animation">
          <iframe
            title="YouTube Video"
            className="yt-vid"
            src="https://www.youtube.com/embed/HXFlSvrDPuU"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Tools;
