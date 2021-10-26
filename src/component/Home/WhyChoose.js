import React from 'react';
import './WhyChosse.css';

const WhyChoose = () => {
    return (
        <div className="bg-color">
            <div className="container py-5 ">
                <h1 className="pb-5 text-center">Reasons why we're widely favored</h1>
                <div className="row">
                    <div className="col-md-4 px-5">
                        <h3>Work with Hearts</h3>
                        <p>We care for your dental health with great compassion & understanding so that you can have the best smile.</p>
                    </div>
                    <div className="col-md-4 px-5">
                        <h3>Serve with Smile</h3>
                        <p>The smile never fades on our doctors’ faces as they always want to create an atmosphere that feels comfortable..</p>
                    </div>
                    <div className="col-md-4 px-5">
                        <h3>Annual Check-ups</h3>
                        <p>We provide annual check-up for dental health conditions and offer many promotions for members of our center.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;