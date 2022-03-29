import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const ServiceDetails = () => {

    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./../services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const details = services.find(service => service.id === parseInt(serviceId));
    console.log(details)
    return (
        <div>
            <div className="head-color">
            <Header></Header>
           </div>
            <div className="container py-5">
                <div className="pb-5">
                    <h1>We are here to help when you need us</h1>
                    <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of your moment, so blinded by desire those who fail in their duty through weakness. These cases are perfectly simple and easy every pleasure is to be welcomed and every pain avoided..</p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={details?.img} className="img-fluid h-100" alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="py-3">
                            <h1>{details?.name}</h1>
                            <p>Service No. {serviceId}</p>
                        </div>
                        <h5>Guideline: {details?.Guideline}</h5>

                        <p>Fee: ${details?.price}</p><br />
                        <button className="btn btn-col mt-3 py-3 px-5 text-white">Purchase Now !!!</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;