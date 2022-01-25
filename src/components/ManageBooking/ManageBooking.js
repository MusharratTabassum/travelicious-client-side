import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageBooking = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])

    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure, you want to delete your booking?');
        if (proceed) {
            const url = `http://localhost:5000/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('The booking is deleted successfully!');
                        const remainingBookings = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingBookings)
                    }
                });
        }
        else {
            alert("The booking is not removed.")
        }
    }

    return (
        <div>
            <div className="bookings container ">

                {
                    <div className="table-responsive mt-3 mb-5">
                        <h1 className="mt-5 mb-5 service-title">Total Booking : {bookings?.length}</h1>

                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>BookingID</th>
                                    <th>Tour Place</th>
                                    <th>Email</th>
                                    <th>Date of Tour</th>
                                    <th>Status</th>
                                    <th><th>Delete/Update</th></th>
                                </tr>
                            </thead>
                            {bookings?.map((booking, index) => (
                                <tbody key={booking._id}>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{booking._id}</td>
                                        <td>{booking.title}</td>
                                        <td>{booking.email}</td>
                                        <td>{booking.Date}</td>
                                        <td>{booking.status}</td>
                                        <Button
                                            className="delete-btn"
                                            onClick={() => handleDeleteBooking(booking._id)}
                                        >
                                            Remove
                                        </Button>
                                        <Link to={`/bookings/update/${booking._id}`}><button className='update-btn'>Update</button></Link>

                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                    </div>

                }

            </div>

        </div>
    );
};

export default ManageBooking;