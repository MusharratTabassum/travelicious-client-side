import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceserviceDetail = () => {
    const { serviceId } = useParams();
    const [serviceDetail, setServiceDetail] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setServiceDetail(data));
    }, []);


    const chosenData = serviceDetail.find(item => item._id === serviceId);

    return (
        <div>
            <div className='container '>
                <div className='serviceDetail pe-2 mt-5 d-flex'>
                    <div >
                        <img className='img-serviceDetails img-fluid max-width: 100%' src={chosenData?.image} alt="" />
                    </div>
                    <div>
                        <h1 className="mt-4 mb-2">{chosenData?.title}</h1>
                        <p className='p-2'>{chosenData?.short_description}</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ServiceserviceDetail;