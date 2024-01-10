import React from "react";
import "./introduction.css";

const Introduction = () => {
  return (
    <>
      <section className="introduction">
        <h1 className="intro-h1"> We're here to lift you up.</h1>
        <div className="intro-p">
          A digital, research-backed companion that gathers and provides
          resources to help you navigate your mental health.
        </div>
        <img
          alt="arrow down"
          src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/649775d7eaa2f396e6a9e70b_Arrow.svg"
        />
        <button className="begin-button">Begin Your Journey</button>
        {/* <img
          alt="namaste"
          className="namaste"
          src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/64adff47fc54a5a4a1fe4d94_landing%20page%20bg%20mobile.png"
        /> */}
      </section>
    </>
  );
};

export default Introduction;
