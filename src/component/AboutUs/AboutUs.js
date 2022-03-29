import React from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import "../AboutUs/About.css";

const AboutUs = () => {
    return (
        <div>
            <div className="head-color"><Header></Header></div>
            
            <div className="container py-5">
                <div className="text-center pb-5">
                    <h1>ABOUT PureDentSmile</h1>
                    <p>PureSmile PROFILE & HISTORY</p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="pb-5">
                            <h5>ABOUT US</h5>
                            <p>The reputation of the Hospital is the result of quality clinical outcome and comprehensive care, made achievable through world class integrated healthcare facilities by highly trained professionals.
                            </p>
                        </div>
                        <div>
                            <h5>OUR MISSION & VISION</h5>
                            <p>PureSmile Hospitals Limited is a tertiary care hospital and the leading contributor of private healthcare services in Bangladesh.  Square Hospital is one of the ventures of Square Group which is the top business group of the country.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="https://image.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg" className="img-fluid h-100" alt="" />
                    </div>
                    <div className="col-md-4">
                        <div className="pb-5">
                            <h5>OUR MISSION & VISION</h5>
                            <p>PureSmile Hospitals Limited is a tertiary care hospital and the leading contributor of private healthcare services in Bangladesh.  Square Hospital is one of the ventures of Square Group which is the top business group of the country.
                            </p>
                        </div>
                        <div>
                            <h5>OUR STRATEGY</h5>
                            <p>The reputation of Square Hospital is the result of quality clinical outcome and comprehensive care, made achievable through world class integrated healthcare facilities by highly trained professionals.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;