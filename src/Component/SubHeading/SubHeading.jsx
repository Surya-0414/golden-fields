import React from "react";
import {Row ,Col, Container} from 'react-bootstrap';
import './assets/style.css';
import subheading from './assets/image/4FW5.gif'
import featurenew from "./assets/image/g.gif";





const SubHeading =() => {
    return(

        <Container fluid  className="final-banner-alin">

        <Container  className="">
        <div >

<Row className="  text-center ">

            <Col className="   banner-final-img-c" lg={7}>
        <img className=" w-100  sub-img img-fluid mt-5 mb-5" src={featurenew} alt="Banner Final" />
    </Col>

    <Col className="n-p back-img" lg={5} md={6} sm={12}>
        {/* <img className="img-fluid plant" src={plant} alt="Plant" /> */}
        <h2 className="banner-head-text-back-imgs">Our Story</h2>
        <p>Founded with a passion for health and a deep appreciation for traditional Indian ingredients, Golden Fields was born out of a desire to reconnect with our roots and promote holistic well-being. Drawing inspiration from the wisdom of Ayurveda and the rich culinary heritage of India, we embarked on a journey to create a product that would not only satisfy hunger but also nurture vitality.</p>

        <iframe  className='youtube-1'
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

    </Col >
    
    {/* <Col className="n-pback-img" lg={3} md={6} sm={12}>
        
        <h2 className="banner-head-text-back-imgs">Our Story</h2>
        <p>Founded with a passion for health and a deep appreciation for traditional Indian ingredients, Golden Fields was born out of a desire to reconnect with our roots and promote holistic well-being. Drawing inspiration from the wisdom of Ayurveda and the rich culinary heritage of India, we embarked on a journey to create a product that would not only satisfy hunger but also nurture vitality.</p>
    </Col> */}
</Row>


           <Row className="  text-center ">
    <Col className="n-p back-img" lg={5} md={6} sm={12}>
        {/* <img className="img-fluid plant" src={plant} alt="Plant" /> */}
        <h2 className="banner-head-text-back-imgs">Our Story</h2>
        <p>Founded with a passion for health and a deep appreciation for traditional Indian ingredients, Golden Fields was born out of a desire to reconnect with our roots and promote holistic well-being. Drawing inspiration from the wisdom of Ayurveda and the rich culinary heritage of India, we embarked on a journey to create a product that would not only satisfy hunger but also nurture vitality.</p>
    </Col >
    <Col className="  banner-final-img-c" lg={7}>
        <img className=" w-100  sub-img " src={subheading} alt="Banner Final" />
    </Col>
    {/* <Col className="n-pback-img" lg={3} md={6} sm={12}>
        
        <h2 className="banner-head-text-back-imgs">Our Story</h2>
        <p>Founded with a passion for health and a deep appreciation for traditional Indian ingredients, Golden Fields was born out of a desire to reconnect with our roots and promote holistic well-being. Drawing inspiration from the wisdom of Ayurveda and the rich culinary heritage of India, we embarked on a journey to create a product that would not only satisfy hunger but also nurture vitality.</p>
    </Col> */}
</Row>
        </div>

        </Container>

        </Container>

    );
};

export default SubHeading ;