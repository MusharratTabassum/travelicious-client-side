import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
import "./Contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const locationIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const emailIcon = <FontAwesomeIcon icon={faEnvelopeOpenText} />
    const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />


    //EmailJs 

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_382rh1g', 'template_8bm5wep', form.current, 'user_EGHEltMOfuzXN4VjkwrHh')
            .then((result) => {
                alert("Message sent successfully!")
            }, (error) => {
                alert(error.message);
            });
        e.target.reset();
    };


    useEffect(() => {
        AOS.init(
            {
                anchorPlacement: 'top-bottom'
            }
        )
    }, [])
    return (
        <div className='contact-background  '>
            <div className='pt-4 gx-0 d-flex align-items-center justify-content-center'>
                <div className='w-50'>
                    <h1 className='service-title'>Contact Us</h1>
                    <h6 className='m-4'>Incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications.</h6>
                </div>

            </div>
            <div className='row gx-0'>
                <div className='col-lg-6 mt-4 p-4'>
                    <div className="info d-flex" data-aos="fade-up"
                        data-aos-duration="1000">
                        <div className='icon '>
                            {locationIcon}
                        </div>
                        <div className='icon-info ms-4  text-start white'> <h2 className='white'>Location</h2>
                            <p>28 Niketon Society,Gulshan,Dhaka</p></div>
                    </div>
                    <div className="info d-flex" data-aos="fade-up"
                        data-aos-duration="1400">
                        <div className='icon'>
                            {emailIcon}
                        </div>
                        <div className='icon-info ms-4 text-start white'>
                            <h2>Email</h2>
                            <p>info@travelicious-bd.limited.com</p>
                        </div>
                    </div>
                    <div className="info d-flex text-start white" data-aos="fade-up"
                        data-aos-duration="1600">
                        <div className='icon'>
                            {phoneIcon}
                        </div>
                        <div className='icon-info ms-4'>
                            <h2 className='white'>Phone</h2>
                            <p>+8801836481355</p>
                            <p>+8801846481356</p>
                        </div>
                    </div>

                </div>

                <div className='col-lg-6 p-5' data-aos="fade-down"
                    data-aos-duration="1800">
                    <form ref={form} onSubmit={sendEmail} className='form-styles mt-4' >
                        <h1 className='white'>Send Message</h1>
                        <input className='text-input-style' placeholder="your name" type="text" name="client_name" required />
                        <input className='text-input-style' type="email" placeholder="your email" name="client_email" required />
                        <textarea className='text-input-style' placeholder="messages" type="text" name="message" required />
                        <input className="login-btn" type="submit" value="Send" />

                    </form>
                </div>
            </div>


        </div >
    );
};

export default Contact;