import React from "react";
import './assets/style.css';
import { Container, Form } from "react-bootstrap";
import featurenew from "./assets/image/feature-new.png";
import{Row,Col} from 'react-bootstrap';
import bannerFinal from './assets/image/millet_image-1.png';
// import video1 from './assets/video/video-soja.mp4'
import amazonimg1 from "./assets/image/a-r-1.jpeg";
import amazonimg2 from './assets/image/a-r-2.jpeg';
import amazonimg3 from './assets/image/a-r-3.jpeg';
import amazonimg4 from './assets/image/Side01.png';
import amazonimg5 from './assets/image/Side02.png';



// import plant from './assets/image/n-p.png';
const Banner = () => {
    return(
        <Container fluid  className="">


<div className="">

            <Row  className="back-maps p-0 m-0">
                <h1 className="text-center  amazon-heading">What makes Elfsight Amazon Reviews special?</h1>
            <Col className="text-center banner-text banner-right" lg ={5}>

                {/* <video controls>
                            <source className="" src={video1} type="video/mp4" /> 
                        </video> */}

<h2  className="banner-head-text-back-img">Our Story</h2>
          <p>Founded with a passion for health and a deep appreciation for traditional Indian ingredients, Golden Fields was born out of a desire to reconnect with our roots and promote holistic well-being. Drawing inspiration from the wisdom of Ayurveda and the rich culinary heritage of India, we embarked on a journey to create a product that would not only satisfy hunger but also nurture vitality.</p>
                
                </Col>
                <Col lg ={5} md={6} sm={12}>
            <div >
<img className="  img-fluid banner-img-1 mt-5  banner-center" src = {amazonimg1}/>
            </div>
            </Col>

            </Row>

            <Row  className="back-maps p-0 m-0">

            <Col lg ={5} md={6} sm={12}>
            <div >
<img className="  img-fluid banner-img-1 mt-5" src = {amazonimg2}/>
            </div>
            </Col>
                <Col className="" lg ={5} md={6} sm={12}>

                    <h2 className=" text-center banner-text banner-head-text-back-img ">Unparalleled Quality Assurance</h2>
                    <p className=" text-center banner-text">We take pride in the quality and purity of our products. Every batch of Golden Fields Multi-grain Superfood undergoes rigorous testing and quality control measures to ensure that it meets our stringent standards. From farm to fork, we maintain full traceability and transparency, so you can trust that what you're putting into your body is nothing but the best.
</p>
                
                </Col>
               
          
            </Row>

             <Row  className="back-maps p-0 m-0">
                <Col className="" lg ={5} md={6} sm={12}>

                <img className="  img-fluid banner-img-1 mt-5 mb-5" src = {amazonimg3}/>

                
                </Col>
                <Col lg ={2} md={6} sm={12}>
            <div >
            <img className="  img-fluid banner-img-1 mt-5 mb-5" src = {amazonimg4}/>
            </div>
            </Col>
            <Col className="text-center banner-text" lg ={2}>
            <img className="  img-fluid banner-img-1 mt-5 mb-5" src = {amazonimg5}/>

            </Col>
            </Row> 
            </div>



       


        </Container>
        
    );
};

export default Banner ;