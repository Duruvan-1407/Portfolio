import React from "react";
import duruvan from './Duruvan.png';
import html from './html.png';
import css from './css-3.png';
import js from './java-script.png';
import react from './react js.png';
import boot from './bootstrap.png';
import c from './C.png';
import mysql from './mysql.png';
import mongodb from './mongodb.png';
import nodejs from './nodejs.png';
import github from './github.png';
import cv from './Resume_Duruvan.pdf';
function About() {
    return <>

        <div className="container center py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-12">
                    <h1 className="abt">About<span style={{ color: "#1E90FF" }}>Me</span></h1>
                </div>
                <div className="col-lg-7">
                    <div className="row pt-5 animate__animated animate__slideInLeft">
                        <div className="col-lg-12 pb-5">
                            <h2 style={{ color: "#fff" }}>Personal<span style={{ color: "#1e90ff" }}> Info</span></h2>
                        </div>
                        <div className="col-lg-6 col-6">
                            <ul className="about_list">
                                <li>
                                    <span>First Name : </span>
                                    <span className="d-block d-md-inline-block"><strong>Duruvan</strong></span>
                                </li>
                                <li>
                                    <span>Age : </span>
                                    <span className="d-block d-md-inline-block"><strong> 27 Years</strong></span>
                                </li>
                                <li>
                                    <span>Phone : </span>
                                    <span className="d-block d-md-inline-block"><strong>7871657561</strong></span>
                                </li>
                                <li>
                                    <span>LinkedIn : </span>
                                    <span className="d-block d-md-inline-block"><strong>Duruvan PR</strong></span>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-6 col-6">
                            <ul className="about_list">
                                <li>
                                    <span>Last Name : </span>
                                    <span className="d-block d-md-inline-block"><strong> Pethdhan Rajkumar</strong></span>
                                </li>
                                <li>
                                    <span>Nationlity : </span>
                                    <span className="d-block d-md-inline-block"><strong>Indian</strong></span>
                                </li>
                                <li>
                                    <span>Address : </span>
                                    <span className="d-block d-md-inline-block"><strong>Madurai</strong></span>
                                </li>
                                <li>
                                    <span>Language : </span>
                                    <span className="d-block d-md-inline-block"><strong>Sourashtra, Tamil, English</strong></span>
                                </li>
                            </ul>
                        </div>
                        <div className="viwe-btn"><a href={cv} target="_blank"><button className="home_btn">View CV</button></a></div>
                    </div>
                </div>
                <div className="col-lg-5 animate__animated animate__slideInLeft">
                    <img src={duruvan} className="img-fluid abtimg" />
                </div>
                <div className="container center py-5 animate__animated animate__slideInRight">
                    <div className="row icon">
                        <div className="col-lg-12">
                            <h2 style={{ color: "#fff" }}>My<span style={{ color: "#1E90FF" }}> Skills</span></h2>
                        </div>
                        <div className="row logo_title">
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-5 img1">
                                <div className="skill-box1">
                                    <img src={c} className="img-fluid" />
                                    <h4>C Language</h4>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-5 img2">
                                <div className="skill-box">
                                    <img src={html} className="img-fluid" />
                                    <h4>HTML</h4>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-5 img3">
                                <div className="skill-box">
                                    <img src={css} className="img-fluid" />
                                    <h4>CSS</h4>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-5 img4">
                                <div className="skill-box">
                                    <img src={js} className="img-fluid" />
                                    <h4>JavaScript</h4>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-5 img5">
                                <div className="skill-box">
                                    <img src={react} className="img-fluid" />
                                    <h4>React Js</h4>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-5 img6">
                                <div className="skill-box">
                                    <img src={nodejs} className="img-fluid" />
                                    <h4>Node JS</h4>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-5 img7">
                                <div className="skill-box">
                                    <img src={boot} className="img-fluid" />
                                    <h4>Bootstrap</h4>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-5 img8">
                                <div className="skill-box">
                                    <img src={mysql} className="img-fluid"/>
                                    <h4>MySQL</h4>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-5 img9">
                                <div className="skill-box">
                                    <img src={mongodb} className="img-fluid"/>
                                    <h4>Mongo DB</h4>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-5 img10">
                                <div className="skill-box10">
                                    <img src={github} className="img-fluid"/>
                                    <h4>GitHub</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="education-area">
            <div className="container center py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="custom-title pb-3">Education <span style={{ color: "#1E90FF" }}>Qualification</span></h2>
                    </div>
                    <div className="col-lg-6 m-15px-tb animate__animated animate__slideInLeft">
                        <div className="resume-box">
                            <ul>
                                <li className="mt-5">
                                    <div className="icon"><i class="fa fa-graduation-cap"></i></div>
                                    <span className="time text-uppercase">2020</span>
                                    <h5>Sourashtra College (Autonomous)</h5>
                                    <h6>Completed M.Com with 64 Percentage </h6>
                                </li>
                                <li className="mt-5">
                                    <div className="icon"><i class="fa fa-graduation-cap"></i></div>
                                    <span className="time text-uppercase">2018</span>
                                    <h5>Sourashtra College (Autonomous)</h5>
                                    <h6>Completed B.Com with 52 Percentage</h6>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 m-15px-tb animate__animated animate__slideInRight">
                        <div className="resume-box">
                            <ul>
                                <li className="mt-5">
                                    <div className="icon"><i class="fa fa-graduation-cap"></i></div>
                                    <span className="time text-uppercase">2015</span>
                                    <h5>H.S.C - <span>M M Higher Secondary School</span></h5>
                                    <h6>Completed Higher Secondary School with 81 Percentage</h6>
                                </li>
                                <li className="mt-5">
                                    <div className="icon"><i class="fa fa-graduation-cap"></i></div>
                                    <span className="time text-uppercase">2013</span>
                                    <h5>S.S.L.C - <span>M M Higher Secondary School</span></h5>
                                    <h6>Completed Higher Secondary School with 54 Percentage</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
export default About