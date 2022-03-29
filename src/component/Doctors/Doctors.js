import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);
    return (
        <div>
            <div className="head-color">
                <Header></Header>
                </div>
            <div className="container py-5">
                <div className="text-center pb-4">
                    <h1>Teachers Available</h1>
                    <p>The reputation of the EDUCAHUB is thebest of quality Skillful outcome and comprehensive care, made achievable through world class integrated Learning facilities by highly trained professionals. Thus, the EDUCAHUB strives to meet Student’ standards through quality Skills and making a difference in their lives.</p>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Doctors;