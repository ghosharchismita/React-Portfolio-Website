import React from 'react';
import { useState , useEffect } from 'react';
import logo from '../assets/images/logo.svg';
import icon1 from '../assets/images/linkedinIcon.png';
import icon2 from '../assets/images/githubIcon.png';

export default function NavBar() {
    const [activeLink , setActiveLink] = useState ('home');
    const [scrolled , setScrolled] = useState(false); // to handle scroll activity of the user

    useEffect (() => {
        const onScroll = () => {
            // measure scroll height to define position
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        // add event listener wich will be fired on scroll
        window.addEventListener ("scroll" , onScroll);

        // then remove event listener on the same event when component gets removed from the DOM
        return () => window.removeEventListener("scroll" , onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink (value);
    }

    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <>
        <nav className={`navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#home">
                <h3> <i> Portfolio </i> </h3>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className={`${activeLink === 'home' ? 'navbar-link active' : 'navbar-link'}`} onClick={() => onUpdateActiveLink('home')}  aria-current="page" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className={`${activeLink === 'about' ? 'navbar-link active' : 'navbar-link'}`} onClick={() => onUpdateActiveLink('about')}  aria-current="page" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className={`${activeLink === 'skills' ? 'navbar-link active' : 'navbar-link'}`} onClick={() => onUpdateActiveLink('skills')} href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className={`${activeLink === 'projects' ? 'navbar-link active' : 'navbar-link'}`} onClick={() => onUpdateActiveLink('projects')} href="#projects">Projects</a>
                    </li>
                </ul>
                <span className = "navbar-text">
                    <div className = "social-icon">
                        <a href = {process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noopener noreferrer"> <img src = {icon1} alt = "" /> </a>
                        <a href = {process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noopener noreferrer"> <img src = {icon2} alt = "" /> </a>
                    </div>
                    <a href="#connect" className="let-connect" ></a> <button className = "vvd" onClick={() => scrollToElement('connect')}> <span>Let's Connect</span></button>
                </span>
            </div>
        </div>
    </nav>
    </>
    )
}