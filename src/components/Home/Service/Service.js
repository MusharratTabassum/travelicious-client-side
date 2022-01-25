import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, title, short_description, image } = service;
    return (
        <div>
            <div className="col" >
                <div >
                    <div className="card">
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{short_description}</p>
                        </div>
                        <div class="card-footer ">
                            <Link to={`/serviceDetail/${_id}`}>
                                <button>Book Now</button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Service;