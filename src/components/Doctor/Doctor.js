import React from 'react';
import './Doctor.css';

const Doctor = ({content}) => {
    const {name, img, department} = content;
    return (
        <div className="doctor">
            <img src={img} alt="" />
            <h3 className="my-4">{name}</h3>
            <h5>{department}</h5>
        </div>
    );
};

export default Doctor;