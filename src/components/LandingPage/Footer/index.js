import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer-container">
          <div className="footer-h">
            <img
              alt="ootify logo"
              src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/649b641defdd47493742c561_OOTify_logo_white.svg"
            />
          </div>
          <div className="footer-h2">One Place to Lift You Up.</div>

          <div className="footer-links">
            <div className="footer-item">
              <div className="footer-h3">Company</div>
              <div
                onClick={() => (window.location.href = "/our-story")}
                className="footer-link"
              >
                Our Story
              </div>
              <div className="footer-link">Careers (Coming Soon)</div>
            </div>
            <div className="footer-item">
              <div className="footer-h3">Products</div>
              <div
                onClick={() => (window.location.href = "/higher-ed")}
                className="footer-link"
              >
                For Higher Ed
              </div>
              <div
                onClick={() => (window.location.href = "/enterprise")}
                className="footer-link"
              >
                For Enterprise
              </div>
              <div
                onClick={() => (window.location.href = "/hospitals")}
                className="footer-link"
              >
                For Hospitals
              </div>
              <div
                onClick={() => (window.location.href = "/childrens-book")}
                className="footer-link"
              >
                Children's Book
              </div>
            </div>
            <div className="footer-item2">
              <div className="footer-h3">Get Connected</div>
              <div className="logo-container2">
                <a
                  href="https://www.facebook.com/OOTification/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="fb-logo"
                    src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/649bc2e2790a27e89ef255f9_fb_icon.svg"
                  />
                </a>
                <a
                  href="https://www.instagram.com/ootify/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="fb-logo"
                    src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/649bc2e65006b3b8d57a3517_ig_icon.svg"
                  />
                </a>
                <a
                  href="https://twitter.com/ootify"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="fb-logo"
                    src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/649bc2eaac384913c24d032d_twitter_icon.svg"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/ootify/mycompany/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="fb-logo"
                    src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/649bc2ee259279b96fb5e280_linkedin_icon.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copy">
          <div>@Copyright information</div>
          <div className="legal">
            <div>HIPPA Compliant</div>
            <div className="spacer">&nbsp;|&nbsp;</div>
            <div>Terms of Service & Privacy Policy</div>
            <div>&nbsp;|&nbsp;</div>
            <div>Contact Us</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
