import React , {useState} from 'react';

import projImg1 from '../assets/images/project1.png';
import projImg2 from "../assets/images/project2.png";
import projImg3 from "../assets/images/project3.png";
import projImg4 from '../assets/images/project4.png';
import projImg5 from "../assets/images/project5.png";
import projImg6 from "../assets/images/project6.png";
import projImg7 from "../assets/images/project7.png";
import projImg8 from "../assets/images/project8.png";

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
                                <h4 className="card-title">Falcon 9 Rocket Landing Success – Insights and Predictions</h4>
                                <p className="card-text">Built a model to predict Falcon 9 landing success (Best performing model : Decision tree with 91.78% accuracy) as part of the IBM Data Science Professional Certificate. Included data collection via SpaceX API and web scraping, SQL-based EDA, and visualizations with Folium and Dash.</p>
                                <br></br><p classname="card-text"><b>Tech Stack : </b> Python, Jupyter Notebook  </p> <br></br>
                                <p classname="card-text"><b>Libraries : </b> NumPy, Pandas, BeautifulSoup4, sqlite3, Matplotlib, Seaborn, Plotly, Folium, Dash, Scikit-learn  </p> <br></br>
                                <div className="text-center">
                                    <a href="https://github.com/ghosharchismita/IBM-Data-Science-Professional-Certificate-Peer-Graded-Assignments/tree/main/Capstone%20project" className="btn btn-success" target="_blank" rel="noopener noreferrer">Source</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4">
                        <div className="card portfolioContent">
                            <img className="card-img-top" src={projImg2} alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Diabetes Prediction Project</h4>
                                <p className="card-text">Built a Streamlit app using the PIMA Indians dataset to predict diabetes risk. Performed data preprocessing,extensive EDA, model training (Logistic Regression, Random Forest, SVC, Decision Tree, KNN with GridSearchCV), and visualized evaluation metrics including confusion matrix and ROC curve. Best-performing model: K-Nearest Neighbours with an accuracy of 0.7662.
 </p>
                                <br></br><p classname="card-text"><b>Tech Stack : </b> Python, Streamlit, Jupyter Notebook  </p> <br></br>
                                <p classname="card-text"><b>Libraries : </b> Pandas, Numpy, Scikit-learn, Matplotlib, Seaborn </p> <br></br>
                                <div className="text-center">
                                    <a href="https://github.com/ghosharchismita/Diabetes-Prediction-project" className="btn btn-success" target="_blank" rel="noopener noreferrer">Source</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4">
                        <div className="card portfolioContent">
                            <img className="card-img-top" src={projImg3} alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Mall Customer Segmentation Project</h4>
                                <p className="card-text">Performed data preprocessing, extensive EDA and segmented customers using K-Means, Hierarchical, DBSCAN, and ensemble clustering on Kaggle’s Mall Customer dataset. K-Means performed best, followed by Hierarchical, Ensemble, and DBSCAN. Visualized insights via Jupyter Notebook and built a Streamlit app for more interactivity.</p>
                                <br></br><p classname="card-text"><b>Tech Stack : </b> Python, Streamlit, Jupyter Notebook </p> <br></br>
                                <p classname="card-text"><b>Libraries : </b> Pandas, Numpy, Scikit-learn, SciPy, Matplotlib, Seaborn </p> <br></br>
                                <div className="text-center">
                                    <a href="https://github.com/ghosharchismita/Mall-Customer-Segmentation-project" className="btn btn-success" target="_blank" rel="noopener noreferrer">Source</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-cards row">
                    <div className="col-lg-4 mt-4">
                        <div className="card">
                            <img className="card-img-top" src={projImg4} alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Dijkstra's Shortest Path Visualiser</h4>
                                <p className="card-text">This project is meant to help the user visualise the Shortest path from starting point to ending point in a grid with hurdles or walls as created by the user.</p>
                                <br></br><p classname="card-text"><b>Tech Stack : </b> Python </p> <br></br>
                                <div className="text-center">
                                    <a href="https://github.com/ghosharchismita/Dijkstra-Shortest-Path-Visualiser" className="btn btn-success" target="_blank" rel="noopener noreferrer">Source</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4">
                        <div className="card portfolioContent">
                            <img className="card-img-top" src={projImg5} alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Multipurpose Digital Clock</h4>
                                <p className="card-text">This is a multipurpose digital clock which can work as a clock , used as a stopwatch , timer and also as an alarm clock.</p>
                                <br></br><p classname="card-text"><b>Tech Stack : </b> HTML , CSS , Javascript , jQuery </p> <br></br>
                                <div className="text-center">
                                    <a href="https://github.com/ghosharchismita/Multipurpose-Digital-Clock" className="btn btn-success" target="_blank" rel="noopener noreferrer">Source</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4">
                        <div className="card portfolioContent">
                            <img className="card-img-top" src={projImg6} alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Password Generator</h4>
                                <p className="card-text">This is a password generator which generates a password considering the user's conditions and requirements. It also has toggle bar to switch to dark mode or custom made light mode</p>
                                <br></br><p classname="card-text"><b>Tech Stack : </b> HTML , CSS , Javascript </p> <br></br>
                                <div className="text-center">
                                    <a href="https://github.com/ghosharchismita/Password-Generator" className="btn btn-success" target="_blank" rel="noopener noreferrer">Source</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-lg-4 mt-4">
                        <div className="card portfolioContent">
                            <img className="card-img-top" src={projImg7} alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Analog Clock designing</h4>
                                <p className="card-text">This mini project is to demonstrate a bit of my designing skills in making it look aesthetically pleasing.</p>
                                <br></br><p classname="card-text"><b>Tech Stack : </b> HTML , CSS , Javascript </p> <br></br>
                                <div className="text-center">
                                    <a href = "https://github.com/ghosharchismita/Clocks" className="btn btn-success" target="_blank" rel="noopener noreferrer">Source</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4">
                        <div className="card portfolioContent">
                            <img className="card-img-top" src={projImg8} alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Digital Clock designing</h4>
                                <p className="card-text">This mini project is to demonstrate a bit of my designing skills in making it look aesthetically pleasing.</p>
                                <br></br><p classname="card-text"><b>Tech Stack : </b> HTML , CSS , Javascript </p> <br></br>
                                <div className="text-center">
                                    <a href= "https://github.com/ghosharchismita/Clocks"  className="btn btn-success" target="_blank" rel="noopener noreferrer">Source</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

