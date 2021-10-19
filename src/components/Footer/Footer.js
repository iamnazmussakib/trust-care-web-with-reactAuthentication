import React from 'react';
import logo from '../../images/logo.png'
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content container">
                <div className="aboutus">
                    <div className="footer-logo my-5">
                        <img src={logo} alt="" />
                    </div>
                    <div className="about-content">
                        <p>
                        Our Clinic has grown to provide a world class facility for the clinic advanced restorative. <br /><br /> We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.
                        </p>
                    </div>
                    <div className="icons my-5">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-dribbble"></i></a>
                    </div>
                </div>
                <div className="contactus">
                    <div className="contactus-content">
                        <i class="fas fa-street-view"></i>
                        <div className="content">
                            <p>2130 Fulton Street San Diego <br />
                                CA 94117-1080 USA</p>
                        </div>
                    </div>
                    <div className="contactus-content">
                        <i class="far fa-clock"></i>
                        <div className="content">
                            <p>Mon - Sat 8.00 - 18.00 <br />
                            Sunday CLOSED</p>
                        </div>
                    </div>
                    <div className="contactus-content">
                        <i class="fas fa-phone"></i>
                        <div className="content">
                            <p>Mon to Fri : 08:30 - 18:00 <br />
                            +898 68679 575</p>
                        </div>
                    </div>
                    <div className="contactus-content">
                        <i class="far fa-envelope"></i>
                        <div className="content">
                            <p>Do you have a Question? <br />
                            info@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-text my-5">
                <p>Copyright © 2021 Trust Care Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;