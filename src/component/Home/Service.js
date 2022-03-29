import React from 'react';
import { NavLink } from 'react-router-dom';
import './service.css';

const Service = (props) => {
    const { id, name, img } = props.service;
    return (
        <div>
            <div class="col">
                <div class="card p-2">
                    <img src={img} class="card-img-top img-fluid" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <NavLink to={`/home/${id}`} className="btn btn-col py-2 px-5">More Details</NavLink>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;