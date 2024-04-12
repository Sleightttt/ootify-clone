import React from "react";
import "./ourteam.css";

const Ourteam = () => {
  return (
    <>
      <section className="our-team">
        <div className="our-h">
          Our team includes leading researchers and healthcare professionals
        </div>
        <div className="logo-banner">
          <img
            alt="logo banner"
            className="logo-item"
            src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/649ccb9b4c5d4108633f4629_lmu-logo-p-500.jpeg"
          />
          <img
            alt="logo banner"
            className="logo-item3"
            src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/649ccb8c6a3b253195368462_usc-logo-p-500.png"
          />
          <img
            alt="logo banner"
            className="logo-item2"
            src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/649ccb726404770cb57f04e8_dmh-logo-p-500.png"
          />
        </div>
        <div className="advisory-container">
          <div>
            <img
              alt="logo banner"
              className="advisor"
              src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/64ac7f62ed22d404c066d4b1_headshot_michael%20lindo.jpeg"
            />
            <div className="ad-name">Michael Lindo</div>
          </div>
          <div>
            <img
              alt="logo banner"
              className="advisor"
              src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/64ac7f5bee80430969e994e9_headshot_elyn%20saks.jpeg"
            />
            <div className="ad-name">Elyn Saks</div>
          </div>
          <div>
            <img
              alt="logo banner"
              className="advisor"
              src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/64ac7f622cf93ff7ca81da32_headshot_michael%20mills.png"
            />
            <div className="ad-name">Dr. Michael Mills</div>
          </div>
          <div>
            <img
              alt="logo banner"
              className="advisor"
              src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/64d179be2b8dffcaee3234ea_Sydney%20Stilwell%20Headshot.jpeg"
            />
            <div className="ad-name">Sydney Stilwell</div>
          </div>
          <div>
            <img
              alt="logo banner"
              className="advisor"
              src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/64ac7f6f4542b678f546beda_kenneth-hayashida_headshot.jpeg"
            />
            <div className="ad-name">Dr. Kenneth Hayashida</div>
          </div>
        </div>
        <div className="ad-h">Scientific Advisory Board</div>

        <div className="ad-text">
          <p className="test">
            At OOTify, we stand out as one of the select mental health tech
            companies that have successfully conducted a clinical trial,
            demonstrating a significant improvement in psychological well-being.
            Our achievement was made possible through a collaboration with
            Loyola Marymount University and the University of Southern
            California. Led by the esteemed Dr. Michael Mills, who now serves on
            our Scientific Advisory Board (SAB), the pilot study solidifies our
            commitment to evidence-based practices.
          </p>
          <p>
            OOTify has established an esteemed SAB comprised of leading experts
            in mental healthcare, including researchers, physicians, mental
            health practitioners, psychologists, and non-profit organizations.
            This distinguished panel plays a vital role in upholding ethical
            standards, addressing any obstacles encountered, and achieving our
            clinical objectives for the betterment of the community we serve.
          </p>
          <p>
            With OOTify, you can trust that our cutting-edge technology is
            rooted in rigorous research and guided by a distinguished advisory
            board, making us a premier choice for advancing mental health
            solutions.
          </p>
        </div>
      </section>
    </>
  );
};

export default Ourteam;
