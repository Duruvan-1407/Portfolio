import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import DJ from "./pic/dj.jpg";
function Header() {
    let head = ({ isActive }) => {
        return {
            "color": isActive ? "#1E90FF" : "#F0F8FF",
            "textDecoration": "none",
            "fontWeight": isActive ? "bolder" : "normal",
            "paddingTop": "10px",
            "paddingRight":"25px",
        }
    }
    let btn = {
        "backgroundColor": "#1E90FF"
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Navbar collapseOnSelect expand="lg" className="top">
                        <Navbar.Brand href="/" className="fw-bolder fs-4" style={{ color: "#1E90FF" }}><img src={DJ} className="logo_img"/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={btn} />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="justify-content-end flex-grow-1 pe-3 navbar-nav menu">
                                <NavLink style={head} to='/'>HOME</NavLink>
                                <NavLink style={head} to='/About'>ABOUT US</NavLink>
                                <NavLink style={head} to='/Portfolio'>PORTFOLIO</NavLink>
                                <NavLink style={head} to='/Contact'>CONTACT US</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </div>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
    </>
}
export default Header