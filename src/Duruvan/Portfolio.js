import React from "react";
import find from './pic/sub form.PNG';
import login from './pic/login.PNG';
import form1 from './pic/form 4.PNG';
import form2 from './pic/form 3.PNG';
import exam1 from './pic/exam 1.PNG';
import exam2 from './pic/exam 2.PNG';
import exam3 from './pic/exam 3.PNG';
import Carousel from 'react-bootstrap/Carousel';
function Portfolio() {
    return <>
        <div className="container center">
            <div className="row">
                <div className="col-lg-12 pt-5 port">
                    <h1>My<span style={{ color: "#1E90FF" }}> Portfolio</span></h1>
                </div>

                <div className="col-lg-6 pt-5 project animate__animated animate__slideInRight">
                    <img src={find} width="100%" height="auto" />
                </div>
                <div className="col-lg-6 pt-5 animate__animated animate__slideInRight">
                    <div className="content">
                        <h1>Subscription <span style={{ color: "#1E90FF" }}>Form</span></h1>
                        <ul>
                            <strong><li style={{ color: "#ffA500" }}>Objective:</li></strong>
                            <li style={{ marginTop: "10px" }}>Develop the static webpage A container element that holds the entire pricing table.Three separate plan components, each representing a different plan.
                                Using <span style={{ color: "#1E90FF",fontWeight:"bold" }}> HTML, CSS, REACT JS </span> A list of features for each plan, displayed in an unordered list.</li>
                            <strong><li style={{ marginTop: "10px", color: "#ffA500" }}>Role:</li></strong>
                            <li>Designed the subscription form</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-6 pt-5 project animate__animated animate__slideInLeft">
                    <img src={login} width="100%" height="auto" />
                </div>
                <div className="col-lg-6 pt-5 animate__animated animate__slideInLeft">
                    <div className="content">
                        <h1>Login <span style={{ color: "#1E90FF" }}>Page</span></h1>
                        <ul>
                            <strong><li style={{ color: "#ffA500" }}>Objective:</li></strong>
                            <li style={{ marginTop: "10px" }}>Develop the static login webpage structure and layout of the webpage are created using <span style={{ color: "#1E90FF",fontWeight:"bold" }}>HTML, CSS, REACT JS</span> It has a colorful design. The signup form
                                includes a variety of fields for user information, including name, email, password and  checkbox.</li>
                            <strong><li style={{ marginTop: "10px", color: "#ffA500" }}>Role:</li></strong>
                            <li>Developed the static login webpage and social media logins.</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-6 pt-5 project animate__animated animate__slideInRight">
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <img src={form1} width="100%" height="auto" />
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img src={form2} width="100%" height="auto" />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-lg-6 pt-5 animate__animated animate__slideInRight">
                    <div className="content">
                        <h1>Form <span style={{ color: "#1E90FF" }}>Validation</span></h1>
                        <ul>
                            <strong><li style={{ color: "#ffA500" }}>Objective:</li></strong>
                            <li style={{ marginTop: "10px" }}>Develop the form validate to platform using <span style={{ color: "#1E90FF",fontWeight:"bold" }}>HTML, CSS, JAVASCRIPT</span> featuring user authentication, Form interface design, Registration From and fill the preview page.</li>
                            <strong><li style={{ marginTop: "10px", color: "#ffA500" }}>Role:</li></strong>
                            <li style={{ marginTop: "10px" }}>Designed the form page and fill the calidation page and preview in display page.</li>

                        </ul>
                    </div>
                </div>

                <div className="col-lg-6 pt-5 project animate__animated animate__slideInLeft">
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <img src={exam1} width="100%" height="auto" />
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img src={exam2} width="100%" height="auto" />
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img src={exam3} width="100%" height="auto" />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-lg-6 pt-5 animate__animated animate__slideInLeft">
                    <div className="content">
                        <h1>Online <span style={{ color: "#1E90FF" }}>Examination</span></h1>
                        <ul>
                            <strong><li style={{ color: "#ffA500" }}>Objective:</li></strong>
                            <li style={{ marginTop: "10px" }}>Develop the online examination preparation platform using <span style={{ color: "#1E90FF", fontWeight:"bold" }}>HTML, CSS, JAVASCRIPT</span> to first login page to select the question and submit immediately result in next page. </li>
                            <strong><li style={{ marginTop: "10px", color: "#ffA500" }}>Role:</li></strong>
                            <li style={{ marginTop: "10px",marginBottom:"100px" }}>Designed the Login page and question quiz page and score display page.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    </>
}
export default Portfolio