import React from "react";
import "./notsure.css";

const Notsure = () => {
  return (
    <>
      <section className="bf-container">
        <div className="bf-text">
          <div className="bf-header">
            {" "}
            Not Sure Where to Go? Let Us Guide You.
          </div>
          <div className="bf-body">
            No need to sweat it. With OOTify's AI architecture and data-driven
            personalized matching, finding mental health interventions is easier
            than ever. Spend less time searching and more time thriving.
          </div>
        </div>
        <div className="bf-animation">
          <img
            alt="woman laying down talking to therapist"
            className="bf-ani"
            src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/6499e2fb22d5eaa2ef5da4bb_Therapy.gif"
          />
        </div>
      </section>
    </>
  );
};

export default Notsure;
