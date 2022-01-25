import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./UpdateBookingStatus.css"

const UpdateBookingStatus = () => {

    const [booking, setBooking] = useState({});
    const { id } = useParams();


    useEffect(() => {
        const url = `http://localhost:5000/bookings/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data));
    }, []);


    // Update User
    const handleStatusChange = e => {
        const updatedStatus = e.target.value;
        const updatedBooking = { status: updatedStatus };
        setBooking(updatedBooking);
    }


    const handleUpdateStatus = (e) => {

        const url = `http://localhost:5000/bookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setBooking({});
                    e.target.reset();
                }
            })
        e.preventDefault();


    }



    return (
        <div className='p-5 m-3'>
            <h2 className='mb-4'>Update the booking status</h2>
            <form onSubmit={handleUpdateStatus}>
                <input type="text" onChange={handleStatusChange} value={booking.status || ''} />
                <input className='update-btn' type="submit" value="Update" />

            </form>

        </div>
    );
};

export default UpdateBookingStatus;