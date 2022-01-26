import React from 'react';
import { Carousel } from 'react-bootstrap';
import slideImg1 from './images/slideImg1.jpg'
import slideImg2 from './images/slideImg2.jpg'
import slideImg3 from './images/slideImg3.jpg'
import slideImg5 from './images/slideImg5.jpg'
import slideImg6 from './images/slideImg6.jpg'
import slideImg8 from './images/slideImg8.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item interval={400}>
                    <img
                        className="d-block w-100"
                        src={slideImg1}
                        alt="First slide"
                        height='550px'
                    />
                    <Carousel.Caption>
                        <h3>Mermaid Eco Resort</h3>
                        <p>Chittagong</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={slideImg2}
                        alt="Second slide"
                        height='550px'
                    />
                    <Carousel.Caption>
                        <h3>Sreemangal Tea Leaf Eco Park</h3>
                        <p>Sylhet</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideImg3}
                        alt="Third slide"
                        height='550px'
                    />
                    <Carousel.Caption>
                        <h3>Sajek,khagrachori</h3>
                        <p>Rangamati</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideImg5}
                        alt="Third slide"
                        height='550px'
                    />
                    <Carousel.Caption>
                        <h3>Kuakata Sea Beach</h3>
                        <p> Patuakhali </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideImg8}
                        alt="Third slide"
                        height='550px'
                    />
                    <Carousel.Caption>
                        <h3>Ratargul Forest</h3>
                        <p>Gowainghat, Sylhet</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideImg6}
                        alt="Third slide"
                        height='550px'
                    />
                    <Carousel.Caption>
                        <h3>Cox's Bazar Sea Beach</h3>
                        <p>Chittagong</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>
    );
};

export default Banner;