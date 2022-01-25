import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import "./MyBookings.css"



const MyBookings = () => {

    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])


    const myBookings = bookings.filter(booking => booking.email == user.email);
    console.log(myBookings);

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
            alert("not working")
        }
    }


    return (
        <div className="bookings container">
            <h1 className="mt-5 mb-2 service-title">My Bookings</h1>
            <h1 className='service-title mb-1'>Total Booking : {myBookings?.length}</h1>

            {
                <div className="table-responsive mt-5 mb-5">

                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>BookingID</th>
                                <th>Tour Place</th>
                                <th>Email</th>
                                <th>Date of Tour</th>
                                <th>Status</th>
                                <th>Delete/Update</th>
                            </tr>
                        </thead>
                        {myBookings?.map((booking, index) => (
                            <tbody key={booking._id}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{booking._id}</td>
                                    <td>{booking.title}</td>
                                    <td>{booking.email}</td>
                                    <td>{booking.Date}</td>
                                    <td>{booking.status}</td>
                                    <button className='delete-btn' onClick={() => handleDeleteBooking(booking._id)}>Remove</button>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>



            }

        </div>
    );
};

export default MyBookings;