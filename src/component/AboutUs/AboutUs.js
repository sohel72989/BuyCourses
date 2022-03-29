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
                    <h1>ABOUT EDUCAHUB</h1>
                    <p>EducaHub PROFILE & HISTORY</p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="pb-5">
                            <h5>ABOUT US</h5>
                            <p>The reputation of the center is the result of quality skill outcome and comprehensive care, made achievable through world class integrated Learning facilities by highly trained professionals.
                            </p>
                        </div>
                        <div>
                            <h5>OUR MISSION & VISION</h5>
                            <p>EDUCAHUB center Limited is a tertiary care center and the leading contributor of private learning services in Bangladesh.  British Learning is one of the ventures of Square Group which is the top business group of the country.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="https://keenitsolutions.com/products/wordpress/educavo/wp-content/uploads/2021/04/faq.jpg" className="img-fluid h-100" alt="" />
                    </div>
                    <div className="col-md-4">
                        <div className="pb-5">
                            <h5>OUR MISSION & VISION</h5>
                            <p>EDUCAHUB center Limited is a tertiary care center and the leading contributor of private learning services in Bangladesh.  British Learning is one of the ventures of Square Group which is the top business group of the country.
                            </p>
                        </div>
                        <div>
                            <h5>OUR STRATEGY</h5>
                            <p>EDUCAHUB center Limited is a tertiary care center and the leading contributor of private learning services in Bangladesh.  British Learning is one of the ventures of Square Group which is the top business group of the country.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;