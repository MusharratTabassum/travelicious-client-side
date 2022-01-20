import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddServices.css'
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
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
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input type="text" {...register("package")} placeholder="package" />
                    <input type="number" {...register("price")} placeholder="price" />
                    <input {...register("img")} placeholder="image url" />
                    <input type="submit" />
                </form>
            </div>

        </div>

    );
}


    ;

export default AddService;