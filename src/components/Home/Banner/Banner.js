import React from 'react';
import { Carousel } from 'react-bootstrap';
import slideImg1 from './images/slideImg1.jpg'
import slideImg2 from './images/slideImg2.jpg'
import slideImg3 from './images/slideImg3.jpg'
import slideImg4 from './images/slideImg4.jpg'
import slideImg5 from './images/slideImg5.jpg'
import slideImg6 from './images/slideImg6.jpg'

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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideImg4}
                        alt="Third slide"
                        height='550px'
                    />
                    <Carousel.Caption>
                        <h3>Sajek Valley</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
                        <h3>Sajek Valley</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
                        <h3>Sajek Valley</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>
    );
};

export default Banner;