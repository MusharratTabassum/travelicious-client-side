import React from 'react';
import image from './404.jpg'

const NotFound = () => {
    return (
        <div>
            <div className='p-5'>
                <img className='w-75' src={image} alt="" />
            </div>
        </div>
    );
};

export default NotFound;