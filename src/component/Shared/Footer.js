import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className="footer-bg py-5">
                <div className="container text-white">
                    <div className="text-center">
                        <h1 className="text-design">EDUCAHUB</h1>
                        <p>Be designed and classified scientifically, courses are suitable to every levels, ensuring to maximize student’s capacity. You will find out many interesting things inside. Let’s discover right now!</p>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <p><span className="fas fa-map-marker-alt"></span> G5 Technology JSC, Room 1101, Glory Palace Apartment, Truong Thi Ward, Vinh City, Nghe An Province, VietNam(42000).</p>
                            <p><i className="fas fa-phone-alt"></i> (+84) 388-969-888</p>

                        </div>
                        <div className="col-md-6">

                        </div>
                        <hr />
                        <div class="row text-center">
                            <div class="col">
                                <h5 class="text-light">Copyright 2022 &copy; EDUCAHUB</h5>
                                <p>Design By: <a className="text-design" href="https://www.facebook.com/ih75754/">Sohel Rana</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;