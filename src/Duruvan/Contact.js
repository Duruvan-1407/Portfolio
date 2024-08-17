import React, { Component } from "react";
import contact from './contact-img.png';
import emailjs from 'emailjs-com';
class Contact extends Component {
    constructor() {
        super()
        this.state = {
            "Name": "",
            "Num": "",
            "Email": "",
            "text": ""
        }
    }
    getdata = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    clearstate = () => {
        this.setState({
            "Name": "",
            "Num": "",
            "Email": "",
            "text": ""
        })
    }
    sendemail = (e) => {
        if (this.state.Name == "" && this.state.Num == "" && this.state.Email == "" && this.state.text == "") {
            alert("Please fill out this field")
            return false

        }

        e.preventDefault();
        emailjs.sendForm('service_x4ozv6b', 'template_0uc3dol', e.target, 'v3he6yj4WppRSfC6G')

            .then((response) => {
                console.log(response);
                console.log("email send")
                this.clearstate()
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return <>
            <p className="contact_us">Contact<span style={{ color: "#1E90FF" }}> Us</span></p>
            <div className="container center py-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ph_1">
                            <i className="fa fa-phone con_pg"></i>
                            <p className="con_bor1">+91 7871657561</p>
                            <p style={{ color: "#17202A" }}>Phone Number</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ph_1">
                            <i className="fa fa-envelope con_pg"></i>
                            <p className="con_bor2">duruvan19@gmail.com</p>
                            <p style={{ color: "#17202A" }}>Email</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ph_1">
                            <i className="fa fa-home con_pg"></i>
                            <p className="con_bor3">Plot No-1/988, Meenatchi Colony,<br /> Kaithari Nagar, Nilaiyur, Madurai-05</p>
                            <p style={{ color: "#17202A" }}>Address</p>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <p className="text_msg">Send us a <span style={{ color: "#1E90FF" }}>message</span></p>

                        <form className="myform animate__animated animate__slideInLeft" onSubmit={this.sendemail}>
                            <input type="text" onChange={this.getdata} placeholder="Name" className="formcontrol" name="Name" value={this.state.Name}/>
                            <input type="phonenumber" onChange={this.getdata} placeholder="Phone Number" className="formcontrol" name="Num" value={this.state.Num}/>
                            <input type="email" onChange={this.getdata} placeholder="Email" className="formcontrol" name="Email" value={this.state.Email}/>
                            <textarea type="text" onChange={this.getdata} className="formcontrol" placeholder="Message" style={{ resize: "none" }} cols={40} rows={5} name="text" value={this.state.text}/>
                            <button className="btn_box">Submit</button>
                        </form>
                    </div>
                    <div className="col-lg-6 center animate__animated animate__slideInRight">
                        <img src={contact} height={500} style={{ marginTop: "2em" }} className="img-fluid" />
                    </div>
                    <div className="col-lg-12">
                        <div>
                            <p className="follow_us_1">Follow <span style={{ color: "#1E90FF" }}> Us </span></p>
                            <p className="follow_us_2">Follow us on our <span style={{ color: "#1E90FF" }}>social channels</span></p>
                        </div>
                        <div className="text-center">
                            <a href="#" ><i className="fa fa-facebook link"></i></a>
                            <a href="#" ><i className="fa fa-instagram link"></i></a>
                            <a href="https://linkedin.com/in/duruvan-pr/" ><i className="fa fa-linkedin link"></i></a>
                            <a href="#" ><i className="fa fa-whatsapp link"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}
export default Contact
