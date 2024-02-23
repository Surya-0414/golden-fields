import React from "react";
import {Row ,Col} from 'react-bootstrap';
import './assets/style.css';
import subheading from './assets/image/millet_image-1.png'




const SubHeading =() => {
    return(

        <div>
           <Row className="final-banner-alin  text-center mb-4">
    <Col className="n-p back-img" lg={3} md={6} sm={12}>
        {/* <img className="img-fluid plant" src={plant} alt="Plant" /> */}
        <h2 className="banner-head-text-back-imgs">Our Story</h2>
        <p>Founded with a passion for health and a deep appreciation for traditional Indian ingredients, Golden Fields was born out of a desire to reconnect with our roots and promote holistic well-being. Drawing inspiration from the wisdom of Ayurveda and the rich culinary heritage of India, we embarked on a journey to create a product that would not only satisfy hunger but also nurture vitality.</p>
    </Col >
    <Col className="mt-5   banner-final-img-c" lg={6}>
        <img className=" w-100  banner-final-img mt-5" src={subheading} alt="Banner Final" />
    </Col>
    <Col className="n-pback-img" lg={3} md={6} sm={12}>
        
        {/* <img className="img-fluid plant" src={plant} alt="Plant" /> */}
        <h2 className="banner-head-text-back-imgs">Our Story</h2>
        <p>Founded with a passion for health and a deep appreciation for traditional Indian ingredients, Golden Fields was born out of a desire to reconnect with our roots and promote holistic well-being. Drawing inspiration from the wisdom of Ayurveda and the rich culinary heritage of India, we embarked on a journey to create a product that would not only satisfy hunger but also nurture vitality.</p>
    </Col>
</Row>
        </div>
    );
};

export default SubHeading ;