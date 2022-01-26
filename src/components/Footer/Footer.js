import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className='container-fluid'>
                <div className='row  full-footer '>
                    <div className="footer-item col-lg-2 col-md-6 ">
                        <ul><b><h4>Destination</h4></b></ul>
                        <ul>Cox's Bazar</ul>
                        <ul>Sajek</ul>
                        <ul>Kuakata</ul>
                        <ul>Sreemongol</ul>
                        <ul>Saint Martine</ul>
                    </div>
                    <div className="footer-item col-lg-2 col-md-6">
                        <ul> <b><h4>Cities</h4></b></ul>
                        <ul>Chittagong</ul>
                        <ul>Potuakhali</ul>
                        <ul>Sylhet</ul>
                        <ul>Rangamati</ul>

                    </div>
                    <div className="footer-item col-lg-2 col-md-6">
                        <ul> <b><h4>Interests</h4></b></ul>
                        <ul>Adventure</ul>
                        <ul>Family Holidays</ul>
                        <ul>Festivals</ul>
                        <ul>Budget Travels</ul>
                        <ul>Backpacking</ul>
                    </div>
                    <div className="footer-item col-lg-2 col-md-6">
                        <ul> <b><h4>About</h4></b></ul>
                        <ul><Link className='link-undo' to="/">Travelicious</Link></ul>
                        <ul><Link className='link-undo' to="/home">Tour prices</Link></ul>
                        <ul><Link className='link-undo'>Testimonials</Link></ul>
                        <ul><Link className='link-undo' to='/contact'>Contact us</Link></ul>


                    </div>
                    <div className="footer-item col-lg-4 col-md-6">
                        <div>
                            <b><h4>Our Newsletter</h4></b>

                            <p className='mt-3'>Subscribe to our newsletter and get exlusive first minute offers straight into your inbox.</p>
                            <input className='p-2 mb-3' type="email" placeholder='Enter your Email Address' id="" />
                        </div>
                        <button className='subscribe-button'>Subscribe</button>
                        <div className='mt-3'>
                            <FontAwesomeIcon className='icon-font' icon={faFacebookF} />
                            <FontAwesomeIcon className='icon-font' icon={faInstagram} />
                            <FontAwesomeIcon className='icon-font' icon={faTwitter} />
                            <FontAwesomeIcon className='icon-font' icon={faYoutube} />

                        </div>
                    </div>
                </div>
                <small className='developed'>Designed & Developed by Musharrat Tabassum</small>
            </footer>


        </div>
    );
};

export default Footer;