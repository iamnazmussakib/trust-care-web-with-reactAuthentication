import React from 'react';
import { Carousel } from 'react-bootstrap';
import useContent from '../../hooks/useContent';
import Service from '../Service/Service';
import clientImg from '../../images/client.png'
import satisfiedImg from '../../images/satisfied.jpg'
import './Home.css';

const Home = () => {
   const {contents} = useContent('./service.json');
   console.log(contents);
    return (
        <div className="home">
            <div className="sliders">
                <Carousel>
                {
                    contents.map(content =>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={content.banner}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h1>{content.name}</h1>
                            <p>{content.desc}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }
                </Carousel>
            </div>
            <div className="service-area container mx-auto">
                <h1 className="text-center my-5">Our Services And Treatment</h1>
                <div className="services">
                    {
                        contents.map(content => <Service
                            key={content.id}
                            content={content}
                        ></Service>)
                    }
                </div>
            </div>
            <div className="container mx-auto satisfied-client">
                <img className="" src={satisfiedImg} alt="" />
                <div className="satisfied-content">
                    <h2>Are You Satisfied With Our Service?</h2>
                    <p className="text-dark">Successful treatment starts with an accurate diagnosis, and our experts take the time to get it right. A team of specialists will listen to your needs and evaluate your condition from every angle to make the very best plan for you.</p>
                </div>
            </div>
            <div className="bg-light py-5">
                <div className="happy-client w-50 mx-auto text-center">
                    <img className="w-50" src={clientImg} alt="" />
                    <div className="my-5">
                        <h3 className="my-5">What Says Our Patients</h3>
                        <p className="text-dark">Medical Centre is a great place to get all of your medical needs. I came in for a check up and did not wait more than 5 minutes before I was seen. I can only imagine the type of service you get for more serious issues. Thanks!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;