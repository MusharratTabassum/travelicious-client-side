import React, { useEffect } from 'react';
import AOS from 'aos'

const Faq = () => {
    useEffect(() => {
        AOS.init(
            {

            }
        )
    }, [])

    return (
        <div>
            <div>
                <div className="container">
                    <div className="faq">
                        <h1 className="text-center fw-bold my-5 py-5 service-title">Frequently Asked <span className="yellow">
                            Questions</span>
                        </h1>
                        <div className="row py-2">
                            <div className="col-md-6" data-aos="fade-up"
                                data-aos-duration="1000">
                                <img className="img-fluid h-100" src="https://images.unsplash.com/photo-1517400508447-f8dd518b86db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                            </div>
                            <div className="col-md-6 d-flex align-items-center" data-aos="fade-down"
                                data-aos-duration="1000">
                                <div>
                                    <div className="accordion " id="accordionPanelsStayOpenExample">
                                        <div className="accordion-item mb-3  ">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                                <button className="accordion-button fw-bold text-dark bg-transparent "
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                                    aria-controls="panelsStayOpen-collapseOne ">

                                                    Why do you need to turn off all your electronic devices before an airplane takes off and lands?
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne"
                                                className="accordion-collapse collapse show"
                                                labelled="panelsStayOpen-headingOne">
                                                <div className="accordion-body  text-muted text-start">
                                                    We've been taught to fear the interference of our portable devices and an airplane's sensitive electronic systems. And despite being told to turn off our darn phones, four out of ten passengers, it seems, disregard these warnings, since there's little hard evidence behind claims that electromagnetic emissions from devices can muddle airplane computers.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-3 ">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                                <button
                                                    className="accordion-button collapsed fw-bold text-dark bg-transparent"
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseTwo">
                                                    Do you have to be rich to travel the world?

                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                                labelled="panelsStayOpen-headingTwo">
                                                <div className="accordion-body  text-muted text-start">
                                                    The beauty of travel is that it’s accessible to everyone, in some form. You don't have to go far to experience a new culture. Plus there are several ways to make most flights affordable, whether by being flexible, searching on new websites like Skypicker and Fareness, or just by planning ahead.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-3">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                                <button
                                                    className="accordion-button collapsed fw-bold text-dark bg-transparent"
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseThree">
                                                    What are some common items savvy travelers bring with them (that less-savvy travelers don’t)?
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                                labelled="panelsStayOpen-headingThree">
                                                <div className="accordion-body  text-muted text-start">
                                                    Don’t forget a small power strip—ideal for sharing a crowded outlet in an airport, and a simple way to keep all devices close by once at a hotel. (Combine that with a Zolt—which powers a laptop and two devices with a charger the size of a lipstick—and it’s even handier.)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-3">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                                <button
                                                    className="accordion-button collapsed fw-bold text-dark bg-transparent"
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseFour">
                                                    What are some things airline pilots won’t tell you?

                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                                                labelled="panelsStayOpen-headingFour">
                                                <div className="accordion-body  text-muted text-start">
                                                    There’s no better Bible of in-flight secrets than Air Babylon, a rollicking romp through 24 hours at an airport compiling anonymous tell-alls from a raft of staff. One sample tidbit: Aviation law decrees that after an onboard death (more common than you’d imagine), planes must land at the nearest airport.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div >

        </div>
    );
};

export default Faq;