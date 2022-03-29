import React from 'react';
import './WhyChosse.css';

const WhyChoose = () => {
    return (
        <div className="bg-color">
            <div className="container py-5 ">
                <h1 className="pb-5 text-center text-dark">Reasons why we're widely favored</h1>
                <div className="row">
                    <div className="col-md-4 px-5">
                        <h3>Work with Hearts</h3>
                        <p>We care for your learning skills with great compassion & understanding so that you can have the best proffesionalism.</p>
                    </div>
                    <div className="col-md-4 px-5">
                        <h3>Serve with Smile</h3>
                        <p>The smile never fades on our mentors’ faces as they always want to create an atmosphere that feels comfortable..</p>
                    </div>
                    <div className="col-md-4 px-5">
                        <h3>EveryDay Caring</h3>
                        <p>We provide every day check for learning conditions and offer many promotions for members of our outlines.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;