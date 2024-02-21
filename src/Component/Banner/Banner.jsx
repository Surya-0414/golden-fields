import React from "react";
import './assets/style.css';
import { Container, Form } from "react-bootstrap";
import bannerImage from "./assets/image/tasty_image-1.png"
import{Row,Col} from 'react-bootstrap';
import bannerFinal from './assets/image/millet_image-1.png';
// import video1 from './assets/video/video-soja.mp4'


// import plant from './assets/image/n-p.png';
const Banner = () => {
    return(
        <Container fluid  className="">
<div className="">
            <Row  className="back-map p-0 m-0">
            <Col className="text-center banner-text banner-right" lg ={4}>

                {/* <video controls>
                            <source className="" src={video1} type="video/mp4" /> 
                        </video> */}

<h2  className="banner-head-text-back-img">Our Story</h2>
          <p>Founded with a passion for health and a deep appreciation for traditional Indian ingredients, Golden Fields was born out of a desire to reconnect with our roots and promote holistic well-being. Drawing inspiration from the wisdom of Ayurveda and the rich culinary heritage of India, we embarked on a journey to create a product that would not only satisfy hunger but also nurture vitality.</p>
                
                </Col>
                <Col lg ={4} md={6} sm={12}>
            <div >
<img className="  img-fluid banner-img-1 mt-5  banner-center" src = {bannerImage}/>
            </div>
            </Col>
            <Col className="text-center banner-text banner-right" lg ={4}>
          <h2  className="banner-head-text-back-img">The Golden Promise
</h2>
          <p>At Golden Fields, we believe that good health starts with good food. That's why we hand-select only the finest natural ingredients for our Multi-grain Superfood. From the nutrient-rich millets grown in the heartlands of India to the wholesome nuts and spices sourced from local farmers, each component of our blend is chosen with care and integrity.</p>
            </Col>
            </Row>

            <Row  className="back-map p-0 m-0">
                <Col className="" lg ={4} md={6} sm={12}>

                    <h2 className=" text-center banner-text banner-head-text-back-img ">Unparalleled Quality Assurance</h2>
                    <p className=" text-center banner-text">We take pride in the quality and purity of our products. Every batch of Golden Fields Multi-grain Superfood undergoes rigorous testing and quality control measures to ensure that it meets our stringent standards. From farm to fork, we maintain full traceability and transparency, so you can trust that what you're putting into your body is nothing but the best.
</p>
                
                </Col>
                <Col lg ={4} md={6} sm={12}>
            <div >
<img className="  img-fluid banner-img-1 mt-5" src = {bannerImage}/>
            </div>
            </Col>
            <Col className="text-center banner-text" lg ={4}>
          <h2  className="banner-head-text-back-img">A Symphony of Flavors and Nutrients</h2>
          <p>Experience the taste of tradition with Golden Fields Multi-grain Superfood. Our carefully curated blend offers a symphony of flavors and textures that delight the senses and nourish the body. Whether you're savoring the earthy sweetness of finger millet or the subtle heat of dry ginger, each ingredient plays a vital role in providing you with a well-rounded nutritional profile.</p>
            </Col>
            </Row>

             <Row  className="back-map p-0 m-0">
                <Col className="" lg ={4} md={6} sm={12}>

                    <h2 className=" text-center banner-text  banner-head-text-back-img">More Than Just a Meal</h2>
                    <p className=" text-center banner-text">Golden Fields Multi-grain Superfood isn't just food—it's a lifestyle choice. By incorporating our product into your daily routine, you're not only fueling your body with essential nutrients but also embracing a philosophy of wellness that extends beyond the plate. It's about nourishing your body, mind, and spirit in harmony with nature.
</p>
                
                </Col>
                <Col lg ={4} md={6} sm={12}>
            <div >
<img className="  img-fluid banner-img-1 mt-5" src = {bannerImage}/>
            </div>
            </Col>
            <Col className="text-center banner-text" lg ={4}>
          <h2 className=" banner-head-text-back-img">Join the Golden Revolution</h2>
          <p>Founded with a passion for health and a deep appreciation for traditional Indian ingredients, Golden Fields was born out of a desire to reconnect with our roots and promote holistic well-being. Drawing inspiration from the wisdom of Ayurveda and the rich culinary heritage of India, we embarked on a journey to create a product that would not only satisfy hunger but also nurture vitality.</p>
            </Col>
            </Row> 
            </div>



            <Row className="final-banner-alin  text-center">
    <Col className="n-p back-img" lg={3} md={6} sm={12}>
        {/* <img className="img-fluid plant" src={plant} alt="Plant" /> */}
        <h2 className="banner-head-text-back-imgs">Our Story</h2>
        <p>Founded with a passion for health and a deep appreciation for traditional Indian ingredients, Golden Fields was born out of a desire to reconnect with our roots and promote holistic well-being. Drawing inspiration from the wisdom of Ayurveda and the rich culinary heritage of India, we embarked on a journey to create a product that would not only satisfy hunger but also nurture vitality.</p>
    </Col >
    <Col className="mt-5   banner-final-img-c" lg={6}>
        <img className=" w-100  banner-final-img mt-5" src={bannerFinal} alt="Banner Final" />
    </Col>
    <Col className="n-pback-img" lg={3} md={6} sm={12}>
        
        {/* <img className="img-fluid plant" src={plant} alt="Plant" /> */}
        <h2 className="banner-head-text-back-imgs">Our Story</h2>
        <p>Founded with a passion for health and a deep appreciation for traditional Indian ingredients, Golden Fields was born out of a desire to reconnect with our roots and promote holistic well-being. Drawing inspiration from the wisdom of Ayurveda and the rich culinary heritage of India, we embarked on a journey to create a product that would not only satisfy hunger but also nurture vitality.</p>
    </Col>
</Row>

        </Container>
        
    );
};

export default Banner ;