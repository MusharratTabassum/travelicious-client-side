import React from 'react';
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
                        <ul>Cox's Bazar</ul>
                        <ul>Sajek</ul>
                        <ul>Kuakata</ul>
                        <ul>Sreemongol</ul>
                        <ul>Saint Martine</ul>
                    </div>
                    <div className="footer-item col-lg-2 col-md-6">
                        <ul> <b><h4>Interests</h4></b></ul>
                        <ul>Cox's Bazar</ul>
                        <ul>Sajek</ul>
                        <ul>Kuakata</ul>
                        <ul>Sreemongol</ul>
                        <ul>Saint Martine</ul>
                    </div>
                    <div className="footer-item col-lg-2 col-md-6">
                        <ul> <b><h4>About</h4></b></ul>
                        <ul>Cox's Bazar</ul>
                        <ul>Sajek</ul>
                        <ul>Kuakata</ul>
                        <ul>Sreemongol</ul>
                        <ul>Saint Martine</ul>
                    </div>
                    <div className="footer-item col-lg-4 col-md-6">
                        <div>
                            <b><h4>Our Newsletter</h4></b>

                            <p className='mt-3'>Subscribe to our newsletter and get exlusive first minute offers straight into your inbox.</p>
                            <input className='p-2 mb-3' type="email" placeholder='Enter your Email Address' id="" />
                        </div>
                        <button className='subscribe-button'>Subscribe</button>
                    </div>
                </div>
                <small className='developed'>Designed & Developed by Musharrat Tabassum</small>
            </footer>


        </div>
    );
};

export default Footer;