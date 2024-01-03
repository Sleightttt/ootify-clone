import React from "react";
import "./introduction.css";

const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="introduction-text">
        <div className="introduction-header">What is OOTify?</div>
        <div className="introduction-body">
          OOTify is a mental health platform that provides a safe space for
          individuals to share their stories, connect with others, and find
          resources to help them on their mental health journey.
        </div>
      </div>
      <div className="introduction-image-container">
        <img
          className="introduction-image"
          alt="ootify-introduction"
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        />
      </div>
    </div>
  );
};

export default Introduction;
