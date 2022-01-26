import React from 'react';
import { useEffect, useState } from "react";
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';
import './Services.css'
import AOS from 'aos';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://murmuring-beyond-96223.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    useEffect(() => {
        AOS.init(
            {

            }
        )
    }, [])

    return (
        <div id="tours">
            <h1 className="text-center fw-bold my-5 py-3 service-title">Our <span className="yellow">
                Services</span>
            </h1>
            <div className="container" data-aos="zoom-in-up" data-aos-duration="1000">

                <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                    {
                        services.map(service => (<Service
                            key={service.id}
                            service={service}
                        ></Service>))
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;