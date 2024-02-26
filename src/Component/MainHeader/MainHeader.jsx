import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row ,Col, Form } from "react-bootstrap";
import './assets/style.css'
import mainheadervideo from './assets/image/video-1.mp4'; // Rename this identifier to mainheadervideo
import mainheadervideo2 from './assets/image/video-1.mp4'; // Use a different identifier for the second video

function MainHeader() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <video className="d-block w-100 header-box-video" autoPlay loop muted>
          <source src={mainheadervideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Carousel.Caption>
          <div  className='main-h1-s'>
          <h1 className='main-h1-text ' >Golden  Fields</h1>
          <p className='main-p-1'>A Blend of Goodness</p>

          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <video className="d-block w-100 header-box-video" autoPlay loop muted>
          <source src={mainheadervideo2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Carousel.Caption>

          <div className='main-head-s-2'>
          <h5 className='main-header-text-2'>Multi - Grain Superfood</h5>
          <p>100% Natural & Wholesome</p>

          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainHeader;
