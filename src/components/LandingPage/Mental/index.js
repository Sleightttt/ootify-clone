import React from "react";
import "./mental.css";

const Mental = () => {
  return (
    <>
      <section className="mental-container">
        <div className="round-right">
          <div className="mental-header">
            "Mental healthcare is missing infrastructure."
          </div>
          <div className="mental-body">
            We tackle this by taking care of our providers, providing access to
            multiple evidence-based solutions, and ensuring a delightful
            experience. We do this at scale with enterprises to{" "}
            <span style={{ fontWeight: "bold" }}>
              provide better outcomes and value-based, personalized care.
            </span>
          </div>
        </div>
        <div className="review-container">
          <div className="review-name">
            <img
              alt="ravi's profile icon"
              className="ravi"
              src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/64c0b9d556896cdab2bdb76f_ravi%20icon.png"
            />
            Ravi Sharma, Board Director & Co-Founder
          </div>
        </div>
      </section>
    </>
  );
};

export default Mental;
