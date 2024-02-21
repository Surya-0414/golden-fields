import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import review1 from './assets/Image/re-1.jpeg';
import review2 from './assets/Image/re-2.jpeg';
import review3 from './assets/Image/re-3.jpeg';
import review4 from './assets/Image/re-4.jpeg';
import review5 from './assets/Image/re-5.jpeg';
import review6 from './assets/Image/re-6.jpeg';
import review7 from './assets/Image/re-7.jpeg';
import review8 from './assets/Image/re-8.jpeg';
import './assets/style.css';

function Amazon() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };

    return (
        <Container>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img className="slider-all-img mx-2 w-100" src={review1} alt="Review 1" />
                    </div>
                    <div>
                        <img className="slider-all-img mx-2 w-100" src={review2} alt="Review 2" />
                    </div>
                    <div>
                        <img className="slider-all-img mx-2 w-100" src={review3} alt="Review 3" />
                    </div>
                    <div>
                        <img className="slider-all-img mx-2 w-100" src={review4} alt="Review 4" />
                    </div>
                    <div>
                        <img className="slider-all-img mx-2 w-100" src={review5} alt="Review 5" />
                    </div>
                    <div>
                        <img className="slider-all-img mx-2 w-100" src={review6} alt="Review 6" />
                    </div>
                    <div>
                        <img className="slider-all-img mx-2 w-100" src={review7} alt="Review 7" />
                    </div>
                    <div>
                        <img className="slider-all-img mx-2 w-100" src={review8} alt="Review 8" />
                    </div>
                </Slider>
            </div>
        </Container>
    );
}

export default Amazon;