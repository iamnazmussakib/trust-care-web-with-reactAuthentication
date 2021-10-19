import React from 'react';
import useContent from '../../hooks/useContent';
import bgImg from '../../images/doctor.png'
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const {contents} = useContent('./doctor.json');
    return (
        <div>
            <div className="doctor-banner">
                <img src={bgImg} alt="" />
            </div>
            <div className="doctors-area container">
                <h1 className="text-center my-5">Our Doctors</h1>
                <div className="doctors">
                    {
                        contents.map(content=> <Doctor
                            key={content.id}
                            content={content}
                        ></Doctor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;