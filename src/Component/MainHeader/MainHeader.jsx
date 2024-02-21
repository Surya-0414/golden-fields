import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row ,Col, Form } from "react-bootstrap";
import './assets/style.css'
import mainheaderimage from './assets/image/Golden Fields - Main Page1.jpg';
import mainheaderimage2 from './assets/image/Golden Fields -2.jpg';
import mainheaderimage3 from './assets/image/Golden Fields - 3.jpg';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MainHeader = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000 // Set autoplay speed in milliseconds
  };

  return (
    <Container fluid>
      {/* <div className="main-header-back">
        <h1>GOLDEN FIELDS</h1>
        <div className="">
          <img className="header-box-img" src={mainheaderimage} alt="main header image" />
        </div>
      </div> */}
      <Slider {...settings}>
        <div>
          
          <div className="">
          <img className="header-box-img" src={mainheaderimage} alt="main header image" />
        </div>
        </div>
        <div>
          
          <div className="">
          <img className="header-box-img" src={mainheaderimage2} alt="main header image" />
        </div>
        </div>
        <div>
    
          <div className="">
          <img className="header-box-img" src={mainheaderimage3} alt="main header image" />
        </div>
        </div>
        {/* <div>
          <h3>4</h3>
          <div className="">
          <img className="header-box-img" src={mainheaderimage} alt="main header image" />
        </div>
        </div>
         */}
      </Slider>
    </Container>
  );
};

export default MainHeader;
