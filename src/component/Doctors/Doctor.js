import React from 'react';
import { NavLink } from 'react-router-dom';

const Doctor = (props) => {
    const { doctor, img, description } = props.doctor;
    return (
        <div>
            <div class="col">
                <div class="card p-2">
                    <img src={img} class="card-img-top img-fluid" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{doctor}</h5>
                        <p class="card-text">{description}</p>
                        <NavLink to={`/doctors`}>
              <button className="btn btn-col"> More Details</button>
            </NavLink>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;