import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div>
                <footer>
                    <div className='row'>
                        <div className="footer-item col-lg-2 col-md-6 ">
                            <ul> <b>Destination</b></ul>
                            <ul>Cox's Bazar</ul>
                            <ul>Sajek</ul>
                            <ul>Kuakata</ul>
                            <ul>Sreemongol</ul>
                            <ul>Saint Martine</ul>
                        </div>
                        <div className="footer-item col-lg-2 col-md-6">
                            <ul> <b>Cities</b></ul>
                            <ul>Cox's Bazar</ul>
                            <ul>Sajek</ul>
                            <ul>Kuakata</ul>
                            <ul>Sreemongol</ul>
                            <ul>Saint Martine</ul>
                        </div>
                        <div className="footer-item col-lg-2 col-md-6">
                            <ul> <b>Interests</b></ul>
                            <ul>Cox's Bazar</ul>
                            <ul>Sajek</ul>
                            <ul>Kuakata</ul>
                            <ul>Sreemongol</ul>
                            <ul>Saint Martine</ul>
                        </div>
                        <div className="footer-item col-lg-2 col-md-6">
                            <ul> <b>About</b></ul>
                            <ul>Cox's Bazar</ul>
                            <ul>Sajek</ul>
                            <ul>Kuakata</ul>
                            <ul>Sreemongol</ul>
                            <ul>Saint Martine</ul>
                        </div>
                        <div className="footer-item col-lg-4 col-md-6">
                            <div>
                                <b>Our Newsletter</b>

                                <p className='mt-3'>Subscribe to our newsletter and get exlusive first minute offers straight into your inbox.</p>
                                <input className='p-2 mb-3' type="text" placeholder='Enter your Email Address' id="" />
                            </div>
                            <button className='subscribe-button'>Subscribe</button>

                        </div>


                    </div>

                </footer>
            </div>
        </div>
    );
};

export default Footer;