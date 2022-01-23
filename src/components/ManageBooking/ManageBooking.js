import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageBooking = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])

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
                                        <Button
                                            // onClick={() => handleDelete(booking._id)}
                                            className="btn bg-info p-2"
                                        >
                                            Delete
                                        </Button>
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