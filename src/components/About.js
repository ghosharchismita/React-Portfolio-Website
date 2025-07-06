import React from "react";
import aboutImage from "../assets/images/aboutImage.png";
import LeetcodeIcon from "../assets/images/LeetcodeIcon.png";

export default function About() {
  const profileUrl = "https://leetcode.com/u/ghosharchismita/";

  const openProfilePage = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-bx">
              <h2> About </h2>
              <div className="about-content">
                <img className="about-img" src={aboutImage} />
                <div className="about-text">
                  <p>
                    Hi there! I’m <b>Archismita Ghosh</b>—a final-year
                    undergraduate at Kalyani Government Engineering College and
                    an eternal enthusiast for all things tech. Whether I'm
                    wrangling data, building sleek interfaces, or debugging late
                    into the night, I love creating things that work beautifully
                    and make a difference. I'm currently diving deep into{" "}
                    <b>Data Science</b>, working with machine learning models
                    and building interactive applications that turn raw data
                    into meaningful stories. At the same time, I thrive as a{" "}
                    <b>Frontend Developer</b>, developing responsive and
                    accessible web experiences. Oh, and when I'm not coding,
                    you'll probably find me solving challenges on coding
                    platforms just for the thrill of it!
                  </p>
                  <button onClick={() => openProfilePage(profileUrl)}>
                    Do check out my Leetcode Profile. <img src={LeetcodeIcon} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
