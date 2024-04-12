import React from "react";
import "./bestfriend.css";

const Bestfriend = () => {
  return (
    <>
      <section className="bf-container">
        <div className="bf-text">
          <div className="bf-header">
            {" "}
            Your New Best Friend for Mental Health
          </div>
          <div className="bf-body">
            “OOT” or “uth” ( उठ ) means “lift up” in Hindi. OOTify uses
            data-driven matching and interactive gamification to navigate
            enterprise clients to evidence-based mental healthcare. We aim to
            lift up and nurture sustainable human health.
          </div>
        </div>
        <div className="bf-animation">
          <img
            alt="happy man checking his phone"
            className="bf-ani"
            src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/649b6c15f9331a7235e4e053_cafe.gif"
          />
        </div>
      </section>
    </>
  );
};

export default Bestfriend;
