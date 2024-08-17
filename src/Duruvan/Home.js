import React from "react";
import duruvan from './pic/duruv pic.jpg';
import Typewriter from 'typewriter-effect/';
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate()
    return <>
        <div className="container center py-5 ">
            <div className="row">
                <div className="col-lg-6 col-sm-12 img-fluid animate__animated animate__slideInLeft">
                    <img src={duruvan} className="img" />
                </div>
                <div className=" col-lg-6 col-sm-12 col-12 hmcon animate__animated animate__slideInRight">
                    <div>
                        <label className="hello">Hello</label>
                    </div>
                    <div>
                        <label className="name">Hi,I'am <span style={{ color: "#ffA500", fontSize: "3rem", fontWeight: "bold" }}>Duruvan</span></label>
                    </div>
                    <div className="title">
                        <Typewriter style={{ color: "dodgerblue" }}
                            options={{
                                strings: ['MERN Stack Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>

                    <p className="intro">Seeking a challenging role as a MERN Stack Developer in a leading
                            organization or startup to utilize my knowledge. I pride myself on
                            my management, technical, and database management skills and
                            want an opportunity where I can use my capabilities for the growth
                            and success of the organization.</p>
                    <button onClick={() => navigate('/Contact')} className="home_btn">Contact Us</button>
                </div>
            </div>
        </div>

    </>
}
export default Home