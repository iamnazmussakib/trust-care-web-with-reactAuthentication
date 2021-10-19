import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useContent from '../../hooks/useContent';

const ServiceDetails = () => {
    const [service, setService] = useState([]);
    const {serviceId} = useParams();
    const {contents} = useContent('./service.json');
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${serviceId}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, quis at. Expedita cum, eaque ea perferendis, asperiores quo obcaecati eos hic inventore harum nesciunt laborum tempore labore quasi, nobis nam.</h1>
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, quis at. Expedita cum, eaque ea perferendis, asperiores quo obcaecati eos hic inventore harum nesciunt laborum tempore labore quasi, nobis nam.</h1>
        </div>
    );
};

export default ServiceDetails;