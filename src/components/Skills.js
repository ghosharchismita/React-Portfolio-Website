import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import icon1 from '../assets/images/html.png';
import icon2 from '../assets/images/css.png';
import icon3 from '../assets/images/javascriptIcon.png';
import icon4 from '../assets/images/react.png';
import icon5 from '../assets/images/pythonIcon.jpg';
import icon6 from '../assets/images/cpp_logo.png';
import icon7 from '../assets/images/javaIcon.png';
import icon8 from '../assets/images/CIcon.jpg';
import icon9 from '../assets/images/bootstrapIcon.png';

export default function Skills() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill" id="skills">
          
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Skills</h2>
                          <p> The frontend web technologies and programming languages that I have worked with over time .<br></br></p>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              <div className="item">
                                <div className = "image-wrapper">
                                  <img src={icon1} alt="Image" />
                                </div>
                              </div>
                              <div className="item">
                                <div className = "image-wrapper">
                                  <img src={icon2} alt="Image" />
                                </div>
                              </div>
                              <div className="item">
                                <div className = "image-wrapper">
                                  <img src={icon9} alt="Image" />
                                </div>
                              </div>
                              <div className="item">
                                <div className = "image-wrapper">
                                  <img src={icon3} alt="Image" />
                                </div>
                              </div>
                              <div className="item">
                                <div className = "image-wrapper">
                                  <img src={icon4} alt="Image" />
                                </div>
                              </div>
                              <div className="item">
                                <div className = "image-wrapper">
                                  <img src={icon5} alt="Image" />
                                </div>
                              </div>
                              <div className="item">
                                  <img src={icon6} alt="Image" />
                              </div>
                              <div className="item">
                                  <img src={icon7} alt="Image" />
                              </div>
                              <div className="item">
                                  <img src={icon8} alt="Image" />
                              </div>
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
          
      </section>
    )
  }