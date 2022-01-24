import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

import axios from 'axios';
import { useForm } from "react-hook-form";


const ServiceserviceDetail = () => {

    const { serviceId } = useParams();
    const [serviceDetail, setServiceDetail] = useState([]);
    const { user } = useAuth();


    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setServiceDetail(data));
    }, []);

    const chosenData = serviceDetail.find(item => item._id === serviceId);


    const onSubmit = data => {
        console.log('Ordered data', data);
        axios.post('http://localhost:5000/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thanks! We will contact with you soon.');
                    console.log(res);
                    reset();

                }
            })
    }

    return (
        <div>
            <div className='container '>

                <div className='serviceDetail pe-2 mt-5 mb-4 d-flex'>
                    <div className="w-50" >
                        <img className='img-fluid w-100 h-100' src={chosenData?.image} alt="" />
                    </div >
                    <div className="w-50 text-start ms-4">
                        <h1 className="mt-1 mb-2">{chosenData?.title}</h1>
                        <p className=''>{chosenData?.short_description}</p>
                        <p className=''>Package : {chosenData?.package_info}</p>
                        <p className=''>Price : {chosenData?.price}tk only</p>
                        <button>Check Out</button>
                    </div>

                </div>

                <div>
                    <div className="add-service">
                        <h2>Confirm your booking</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text"  {...register("title", { required: true })} placeholder="Booked Package" defaultValue={chosenData?.title} />
                            <input type="text" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" defaultValue={user.displayName} />
                            <input type="email" {...register("email", { required: true })} placeholder="Email" defaultValue={user.email} />
                            <input type="text" {...register("status", { required: true })} defaultValue="pending" />
                            <input type="number" {...register("phone", { required: true })} placeholder="01*******" />
                            <input type="text" {...register("address", { required: true })} placeholder="Address" />
                            <input type="date" {...register("Date")} placeholder="Date" />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ServiceserviceDetail;