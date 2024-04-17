import React from "react";

import "./Childrens.css";
import Footer from "../LandingPage/Footer";

const Childrens = () => {
  return (
    <>
      <section>
        <div className="childrens-cont">
          <div className="book-header">
            <img
              alt=""
              className="book-img"
              src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/64eaff553feded5cf711226d_Our%20Mom%2C%20Our%20Superhero%20Book%20Cover.png"
            />
            <div className="book-text">
              <div className="book-text-h">
                THE #1 CHOICE FOR YOUR FIRST MENTAL HEALTH BOOK
              </div>
              <div className="book-text-h2">
                It’s never too early to start learning about mental health.
              </div>
              <div className="book-text-p">
                Our Mom, Our Superhero - A Mental Health Journey is a children's
                mental health book based on a true story and focuses on siblings
                dealing with societal stigma while seeking treatment for their
                mother's mental health challenges. It's a great conversation
                starter for adults to start talking about mental health with
                kids (primarily ages 6-12). The focus of the book is comparing
                physical health to mental health to take on stigma head-on. It
                has great definitions, activities, exercises, illustrations, and
                supported by a strong mental health clinical team.<br></br>{" "}
                <br></br> Whether you are a parent, mental health professional
                teacher, or are interested in the mental health cause, we hope
                our story resonates with you and has underlying messages and
                learnings for us all.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="author">
        <div className="author-cont">
          <div className="author-box">
            <div className="meet-h">Meet the Authors</div>
            <div className="author-box2">
              <img
                alt=""
                src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/64a634a0c05e94153359ad9a_headshot_ravi-p-500.png"
              />
              <div className="author-text">
                <div className="author-h">RAVI SHARMA</div>
                <div className="author-h2">
                  Ravi is a mental health activist, investor, entrepreneur, and
                  alumni of the University of Southern California. He has lost
                  two family members and a dear friend to suicide. After
                  navigating the fragmented healthcare system for years, Ravi
                  decided to build OOTify, a platform that he hopes will solve
                  the structural and systemic problems in the mental healthcare
                  landscape.
                </div>
              </div>
            </div>
            <div className="author-box2">
              <img
                alt=""
                src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/64a634a0b22dc2d1b5c2e3bf_headshot_nicole-p-500.png"
              />
              <div className="author-text">
                <div className="author-h">NICOLE JAIN</div>
                <div className="author-h2">
                  Nicole has dedicated her career to public service and
                  leadership specifically in the realm of K-12 public education
                  policy and management. She obtained her Bachelor’s degree in
                  Public Policy from the University of Southern California and
                  her Master’s degree in Education Policy and Management from
                  Harvard University.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="reviews-praise">
          <div className="praise-h">Reviews & Praise</div>
          <div className="praise-cont">
            <div className="praise-vid">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/G_2BOn6oDCw?si=wa5OAFp7yMv_mXsb"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="metta">
                Metta World Peace, Former NBA All-Star, entrepreneur, and Mental
                Health Advocate, shares his thoughts on our book.
              </div>
            </div>
            <div className="praise-text">
              <div className="praise-h2">
                "This is a great teaching tool for both parents and
                practitioners. The very calm and easily digestible illustrations
                keep children's attention while helping to tell the story in a
                very non-judgemental and non-threatening way. I will be using
                and recommending this book in my own practice!"
              </div>
              <div className="praise-name">ELYN R. SAKS</div>
              <div className="praise-footer">
                Associate Dean and Orrin B. Evans Professor of Law, Psychology,
                and Psychiatry and the Behavioral Sciences at the University of
                Southern California Gould Law School
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="together">
          <img
            alt=""
            src="https://assets-global.website-files.com/64960fe9d01ccfa44ea57cae/65b9fbd0741f447e33504ec9_nicole%20%26%20ravi%20polaroid-p-1080.png"
            className="together-img"
          />
          <div className="together-text">
            <div className="he-title2">Together, we can make a difference.</div>
            <div className="he-title3">
              Purchase your book today and know that proceeds will be used to
              donate books to schools, community centers and carry forward the
              mission of de-stigmatizing mental health and illness through
              technology, content, and community.
            </div>
            <button className="begin-button2">Buy The Book</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Childrens;
