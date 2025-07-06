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
import icon10 from '../assets/images/jupyter-notebook.png';
import icon11 from '../assets/images/mysql.png';
import icon12 from '../assets/images/numpy.png';
import icon13 from '../assets/images/pandas.png';
import icon14 from '../assets/images/beautifulsoup.jpg';
import icon15 from '../assets/images/sqlite3.jpg';
import icon16 from '../assets/images/matplotlib.png';
import icon17 from '../assets/images/seaborn.png';
import icon18 from '../assets/images/scikit-learn.png';
import icon19 from '../assets/images/folium.jpg';
import icon20 from '../assets/images/python_dash.png';
import icon21 from '../assets/images/streamlit.png';

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
  <>
    {/* Programming languages Section */}
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Programming Languages</h2>
              <p>The programming languages I've worked with over time.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item"><div className="image-wrapper"><img src={icon6} alt="C++" /></div></div>
                <div className="item"><div className="image-wrapper"><img src={icon5} alt="Python" /></div></div>
                <div className="item"><div className="image-wrapper"><img src={icon8} alt="C" /></div></div>
                <div className="item"><div className="image-wrapper"><img src={icon7} alt="Java" /></div></div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Frontend Skills Section */}
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Frontend Skills</h2>
              <p>The frontend web technologies I've worked with over time.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item"><div className="image-wrapper"><img src={icon1} alt="HTML" /></div></div>
                <div className="item"><div className="image-wrapper"><img src={icon2} alt="CSS" /></div></div>
                <div className="item"><div className="image-wrapper"><img src={icon3} alt="JavaScript" /></div></div>
                <div className="item"><div className="image-wrapper"><img src={icon9} alt="Bootstrap" /></div></div>
                <div className="item"><div className="image-wrapper"><img src={icon4} alt="React.js" /></div></div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Data Science Skills Section */}
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Data Science Skills</h2>
              <p>Tools and libraries I've used in data analysis, machine learning, and visualization.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item"><div className="image-wrapper"><img src = {icon5} alt="Python" /></div></div>
                <div className="item"><div className="image-wrapper"><img src = {icon10} alt="Jupyter Notebook" /></div></div>
                <div className="item"><div className="image-wrapper"><img src = {icon11} alt="MySql" /></div></div>
                <div className="item"><div className="image-wrapper"><img src = {icon12} alt="NumPy" /></div></div>
                <div className="item"><div className="image-wrapper"><img src = {icon13} alt="Pandas" /></div></div>
                <div className="item"><div className="image-wrapper"><img src = {icon14} alt="BeautifulSoup4" /></div></div>
                <div className="item"><div className="image-wrapper"><img src = {icon15} alt="sqlite3" /></div></div>
                <div className="item"><div className="image-wrapper"><img src = {icon16} alt="Matplotlib" /></div></div>
                <div className="item"><div className="image-wrapper"><img src = {icon17} alt="Seaborn" /></div></div>
                <div className="item"><div className="image-wrapper"><img src = {icon18} alt="Scikit-learn" /></div></div>
                <div className="item"><div className="image-wrapper"><img src = {icon19} alt="Folium" /></div></div>
                <div className="item"><div className="image-wrapper"><img src = {icon20} alt="Dash" /></div></div>
                <div className="item"><div className="image-wrapper"><img src = {icon21} alt="Streamlit" /></div></div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}