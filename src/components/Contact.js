import React from 'react';
import socialIcon1 from '../assets/images/linkedinIcon.png';
import socialIcon2 from '../assets/images/githubIcon.png';

export default function Contact() {
    return (
        <footer id = 'connect' className ='contact'>
            <div className = 'contact-text'>
                <h2> Connect with me </h2>
                <p> Feel free to reach out !</p>
            </div>

            <ul className = 'social-icons'>
                <li className = 'icon'>
                    <img src = {socialIcon1} alt = 'LinkedIn icon'/>
                    <a href = "https://www.linkedin.com/in/archismita-ghosh/" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
                </li>

                <li className = 'icon'>
                    <img src = {socialIcon2} alt = 'Github icon'/>
                    <a href = "https://github.com/ghosharchismita" target="_blank" rel="noopener noreferrer"> Github </a>
                </li>
            </ul>
        </footer>
    );
};