import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddServices.css'
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://murmuring-beyond-96223.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }


    return (
        <div className='service'>
            <div className="add-service">
                <h2>Please Add a Service</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("title", { required: true, maxLength: 20 })} placeholder="title" />
                    <textarea {...register("short_description")} placeholder="a short description" />
                    <input type="text" {...register("duration")} placeholder="duration" />
                    <input type="text" {...register("package_brief")} placeholder="package brief" />
                    <input type="number" {...register("price")} placeholder="price" />
                    <input {...register("image")} placeholder="image url" />
                    <input className='delete-btn' type="submit" />
                </form>
            </div>

        </div>

    );
}


    ;

export default AddService;