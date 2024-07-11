import React from 'react';
import {useState , useEffect } from 'react'
import heroImg from '../assets/images/heroImage.png';


export default function Banner() {

    const [loopNum , setLoopNum] = useState (0); /* To indicate which word is currently in */ 
    const [isDeleting , setIsDeleting] = useState (false);
    const toRotate = ["Frontend Web Developer" , "Programmer and a keen Problem Solver"];
    const [text , setText] = useState ('');
    const [delta , setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 500;

    useEffect (() => {
        let ticker = setInterval (() => {
            tick();
        } , delta)

        return () => {clearInterval (ticker)};
    } , [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0 , text.length - 1) : fullText.substring(0 , text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta (prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        }
        else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    }
    
    
    return (
        <section className="banner" id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className = "content col-xs-12 col-md-6 col-xl-7">
                        <div>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi! I'm Archismita`} <span className="txt-rotate" data-period="800" data-rotate='["Frontend Web Developer" , "Programmer and an enthusiastic Problem Solver"]'><span className="wrap">{text}</span></span></h1>
                        
                            <button onClick={() => console.log('connect')}>Let’s Connect <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                            </svg>
                            </button>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-xl-5">
                        <div>
                            <img src={heroImg} alt="Header Img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}