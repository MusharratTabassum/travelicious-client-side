import React from 'react';
import { useEffect, useState } from "react";
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';
import './Services.css'
import AOS from 'aos';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
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
            <div className="container" data-aos="zoom-in-up">
                <h1 className="mt-5 mb-5 service-title">Travelicious's Services</h1>
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