import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AllBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-beyond-96223.herokuapp.com/bookings')
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
                                    <th>Date of Tour</th>
                                    <th>Status</th>

                                </tr>
                            </thead>
                            {bookings?.map((booking, index) => (
                                <tbody key={booking._id}>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{booking._id}</td>
                                        <td>{booking.title}</td>

                                        <td>{booking.Date}</td>
                                        <td>{booking.status}</td>
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

export default AllBookings;