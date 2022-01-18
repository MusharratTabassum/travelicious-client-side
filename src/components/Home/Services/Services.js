import React from 'react';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services] = useServices();
    return (
        <div>
            <div className="container">
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