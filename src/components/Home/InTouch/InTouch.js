import React from 'react';
import "./InTouch.css"

const InTouch = () => {
    return (
        <div>
            <div
                className="Intouch-bg d-flex justify-content-center align-items-center rounded-3">
                <div>
                    <h1>LET'S STAY IN TOUCH</h1>
                    <p>Get updates on offer, specials and more</p>
                    <input class="form-control" type="text" placeholder="Your Email" />
                    <br></br>
                    <button class="butt">
                        Submit
                    </button>

                </div>


            </div>
        </div >
    );
};

export default InTouch;