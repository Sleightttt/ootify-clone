import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer-container">
          <div className="footer-h">OOTify</div>
          <div className="footer-h2">One Place to Lift You Up.</div>

          <div className="footer-links">
            <div className="footer-item">
              <div className="footer-h">Company</div>
              <div className="footer-link">Our Story</div>
              <div className="footer-link">Careers (Coming Soon)</div>
            </div>
            <div className="footer-item">
              <div className="footer-h">Products</div>
              <div className="footer-link">For Higher Ed</div>
              <div className="footer-link">For Enterprise</div>
              <div className="footer-link">For Hospitals</div>
              <div className="footer-link">Children's Book</div>
            </div>
            <div className="footer-item2">
              <div className="footer-h">Get Connected</div>
              <div className="logo-container2">
                <img
                  alt="fb-logo"
                  src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/649bc2e2790a27e89ef255f9_fb_icon.svg"
                />
                <img
                  alt="fb-logo"
                  src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/649bc2e65006b3b8d57a3517_ig_icon.svg"
                />
                <img
                  alt="fb-logo"
                  src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/649bc2eaac384913c24d032d_twitter_icon.svg"
                />
                <img
                  alt="fb-logo"
                  src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/649bc2ee259279b96fb5e280_linkedin_icon.svg"
                />
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
        </div>
      </section>
    </>
  );
};

export default Footer;
