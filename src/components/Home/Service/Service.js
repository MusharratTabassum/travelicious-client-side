import React from 'react';
import { Link } from 'react-router-dom';



const Service = ({ service }) => {
    const { id, title, short_description, image } = service;
    return (
        <div>
            <div className="col my-5">
                <div className="card box ">
                    <div><img src={image} className="card-img-top" alt="..." /></div>

                    <div className="p-1">
                        <div className="card-body">
                            <h6 className="card-title title">{title}</h6>
                            <p className="card-text text-align">{short_description}</p>
                        </div>
                        <div className="d-flex justify-content-end align-items-center">
                            <button className="button-style" >+ More Details</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Service;