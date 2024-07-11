import React , {useState} from 'react';

import projImg1 from '../assets/images/project1.png';
import projImg2 from "../assets/images/project2.png";
import projImg3 from "../assets/images/project3.png";
import projImg4 from "../assets/images/project4.png";
import projImg5 from "../assets/images/project5.png";

export default function Projects() {
    return (
        <section id="projects">
            <div className="container mt-3">
                <h2 className="text-center"> Projects </h2>
                <div className="project-cards row">
                    <div className="col-lg-4 mt-4">
                        <div className="card">
                            <img className="card-img-top" src={projImg1} alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Dijkstra's Shortest Path Visualiser</h4>
                                <p className="card-text">This project is meant to help the user visualise the Shortest path from starting point to ending point in a grid with hurdles or walls as created by the user.</p>
                                <br></br><p classname="card-text"><b>Tech Stack : </b> Python </p> <br></br>
                                <div className="text-center">
                                    <a href={process.env.REACT_APP_PROJECT_1} className="btn btn-success" target="_blank" rel="noopener noreferrer">Source</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4">
                        <div className="card portfolioContent">
                            <img className="card-img-top" src={projImg2} alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Multipurpose Digital Clock</h4>
                                <p className="card-text">This is a multipurpose digital clock which can work as a clock , used as a stopwatch , timer and also as an alarm clock.</p>
                                <br></br><p classname="card-text"><b>Tech Stack : </b> HTML , CSS , Javascript , jQuery </p> <br></br>
                                <div className="text-center">
                                    <a href={process.env.REACT_APP_PROJECT_2} className="btn btn-success" target="_blank" rel="noopener noreferrer">Source</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4">
                        <div className="card portfolioContent">
                            <img className="card-img-top" src={projImg3} alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Password Generator</h4>
                                <p className="card-text">This is a password generator which generates a password considering the user's conditions and requirements. It also has toggle bar to switch to dark mode or custom made light mode</p>
                                <br></br><p classname="card-text"><b>Tech Stack : </b> HTML , CSS , Javascript </p> <br></br>
                                <div className="text-center">
                                    <a href={process.env.REACT_APP_PROJECT_3} className="btn btn-success" target="_blank" rel="noopener noreferrer">Source</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-lg-4 mt-4">
                        <div className="card portfolioContent">
                            <img className="card-img-top" src={projImg4} alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Analog Clock designing</h4>
                                <p className="card-text">This mini project is to demonstrate a bit of my designing skills in making it look aesthetically pleasing.</p>
                                <br></br><p classname="card-text"><b>Tech Stack : </b> HTML , CSS , Javascript </p> <br></br>
                                <div className="text-center">
                                    <a href = {process.env.REACT_APP_PROJECT_4} className="btn btn-success" target="_blank" rel="noopener noreferrer">Source</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4">
                        <div className="card portfolioContent">
                            <img className="card-img-top" src={projImg5} alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Digital Clock designing</h4>
                                <p className="card-text">This mini project is to demonstrate a bit of my designing skills in making it look aesthetically pleasing.</p>
                                <br></br><p classname="card-text"><b>Tech Stack : </b> HTML , CSS , Javascript </p> <br></br>
                                <div className="text-center">
                                    <a href={process.env.REACT_APP_PROJECT_5} className="btn btn-success" target="_blank" rel="noopener noreferrer">Source</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

