import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Service.css';

const Service = ({content}) => {
    const {name, img, desc, id} = content;
    return (
        <div className="service">
            <div className="service-hover">
                <img src={img} alt="" />
                <div className="service-content">
                    <h3>{name}</h3>
                    <p>{desc}</p>
                </div>
            </div>
            <Link to={`/service/${id}`}>
                <button className="w-100 rounded mt-4 btn btn-info">View Details</button>
            </Link>
        </div>
    );
};

export default Service;