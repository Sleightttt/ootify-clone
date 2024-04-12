import React from "react";
import "./how.css";

const How = () => {
  return (
    <>
      <section className="how-section">
        <div className="how-it-works">How OOTify Works</div>
        <div className="support-container">
          <div className="support-h">
            Here to support you, every step of the way.
          </div>
          <div className="drawer-container">
            <div className="drawers">
              <div className="drawer">
                <div className="drawer-h">Centralized Mental Health Hub </div>
                <div className="drawer-body">
                  Centralized architecture to have your mental health efforts
                  streamlined in one place so you can track and manage your
                  health for more effective outcomes. Holistic approach that
                  looks at you as a human and then matches you with
                  interventions that speak to you.
                </div>
                <div className="drawer-h">AI Powered Concierge</div>
                <div className="drawer-body">
                  It shouldn’t be stressful to get help for your struggles. With
                  OOTify, turn your struggles into strengths with curated
                  solutions. AI-powered platform to craft an evidence-based care
                  plan tailored to perfectly fit your unique needs.
                </div>
                <div className="drawer-h">Powering Intrinsic Motivators</div>
                <div className="drawer-body">
                  The OOTify digital companion helps you unlock your full
                  potential and rewards you as you progress. Enjoy in-game
                  incentives that not only keep you accountable, but also add an
                  element of fun!
                </div>
              </div>
            </div>

            <div className="drawer-pic">
              <img
                alt="phone"
                className="top-image"
                src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/649a0f27de34a0462ea87ef0_Intervention%20Card%20V2%20Mockup.png"
              />
              <img
                className="bottom-image"
                alt="phone-background"
                src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/649a090beb59af9fa0fd6167_Blobs%20Mockup%20BG.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default How;
