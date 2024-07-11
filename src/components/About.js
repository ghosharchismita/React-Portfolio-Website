import React from 'react';
import aboutImage from '../assets/images/aboutImage.png';
import LeetcodeIcon from '../assets/images/LeetcodeIcon.png';

export default function About() {
    const profileUrl = process.env.REACT_APP_LEETCODE_URL;

    const openProfilePage= (url) => {
        window.open(url, '_blank');
    }

    return (
        <section id = "about">
            <div className='container'>
                <div className = 'row'>
                    <div className = 'col-12'>
                        <div className='about-bx'>
                            <h2> About </h2>
                            <div className='about-content'>
                                <img className = 'about-img' src = {aboutImage}/>
                                <div className='about-text'>
                                    <p> Hello, I am Archismita Ghosh , a third year undergraduate student of Kalyani Goverment Engineering College. 
                                        I am an avid learner and passionate programmer, interested in development and technology as a whole.
                                        I am currently a <b>Frontend Developer</b> with experience in building responsive and optimized sites. I also love solving problems on
                                        various coding platforms.
                                    </p>
                                    <button onClick={() => openProfilePage (profileUrl)}>Do check out my Leetcode Profile. <img src = {LeetcodeIcon}/>
                            </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
