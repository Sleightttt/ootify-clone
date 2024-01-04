import React from "react";
import "./whowehelp.css";

const Whowehelp = () => {
  return (
    <>
      <section className="who-section">
        <div className="how-it-works">Who Do We Help?</div>
        <div className="who-container">
          <div className="who-card">
            <div className="card-header">Higher Ed</div>
            <div className="who-body">
              On-demand, personalized mental health support for students.
            </div>
          </div>
          <div className="who-card">
            <div className="card-header">Enterprise</div>
            <div className="who-body">
              High-quality, low cost, virtual support for every employee.
            </div>
          </div>
          <div className="who-card">
            <div className="card-header">Hospitals</div>
            <div className="who-body">
              Clinical and sub-clinical support for your patients to thrive.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whowehelp;
