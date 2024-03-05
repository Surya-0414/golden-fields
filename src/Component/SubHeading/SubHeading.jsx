import React from "react";
import {Row ,Col, Container} from 'react-bootstrap';
import './assets/style.css';
import subheading from './assets/image/4FW5.gif'
import featurenew from "./assets/image/g.gif";
import lenthimg from './assets/image/justgif.gif';





const SubHeading =() => {
    return(

        <Container fluid  className="final-banner-alin">

        <Container  className="">
        <div >
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">

            <h2 className="sub-head-h1 text-center  mt-4 mb-4 ">From My <span className="sub-2-head-h1" > Blog </span></h2>
</div>
<div data-aos="fade-right">

<Row className="  text-center mt-5 mb-5 ">

            <Col className="   banner-final-img-c" lg={7}>
            <div data-aos="fade-right">

        <img className=" w-100  sub-img img-fluid mt-5 mb-5" src={featurenew} alt="Banner Final" />

       
        </div>
    </Col>

    <Col className="n-p back-img  " lg={5} md={6} sm={12}>
    <div data-aos="fade-down">

        <h2 className="banner-head-text-back-imgs  sub-heat-text-col">Our Story</h2>
        <p  className="mb-5">Founded with a passion for health and a deep appreciation for traditional Indian ingredients, Golden Fields was born out of a desire to reconnect with our roots and promote holistic well-being. Drawing inspiration from the wisdom of Ayurveda and the rich culinary heritage of India, we embarked on a journey to create a product that would not only satisfy hunger but also nurture vitality.</p>

        </div>

<div className="mt-5">
<div data-aos="fade-up">

        <iframe  className='youtube '
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
              </div>

      </div>

    </Col >
    
    {/* <Col className="n-pback-img" lg={3} md={6} sm={12}>
        
        <h2 className="banner-head-text-back-imgs">Our Story</h2>
        <p>Founded with a passion for health and a deep appreciation for traditional Indian ingredients, Golden Fields was born out of a desire to reconnect with our roots and promote holistic well-being. Drawing inspiration from the wisdom of Ayurveda and the rich culinary heritage of India, we embarked on a journey to create a product that would not only satisfy hunger but also nurture vitality.</p>
    </Col> */}
</Row>
</div>
<div data-aos="fade-right">
    
<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">

            <h2 className="sub-head-h1 text-center  mt-4 mb-4 ">From My <span className="sub-2-head-h1" > Blog </span></h2>
</div>

           <Row className="  text-center  mt-5 mb-5 ">
    <Col className="n-p back-img" lg={5} md={6} sm={12}>
    <div data-aos="fade-down">

        {/* <img className="img-fluid plant" src={plant} alt="Plant" /> */}
        <h2 className="banner-head-text-back-imgs   sub-heat-text-col">Our Story</h2>
        <p>Founded with a passion for health and a deep appreciation for traditional Indian ingredients, Golden Fields was born out of a desire to reconnect with our roots and promote holistic well-being. Drawing inspiration from the wisdom of Ayurveda and the rich culinary heritage of India, we embarked on a journey to create a product that would not only satisfy hunger but also nurture vitality.</p>

        </div>

        <div data-aos="fade-up">

        <div className="mt-5">
        <iframe  className='youtube '
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
</div>
</div>
    </Col >
    

    <Col className="  banner-final-img-c" lg={7}>
    <div data-aos="fade-left">

        <img className=" w-100  sub-img-s " src={subheading} alt="Banner Final" />

        </div>

    </Col>
    {/* <Col className="n-pback-img" lg={3} md={6} sm={12}>
        
        <h2 className="banner-head-text-back-imgs">Our Story</h2>
        <p>Founded with a passion for health and a deep appreciation for traditional Indian ingredients, Golden Fields was born out of a desire to reconnect with our roots and promote holistic well-being. Drawing inspiration from the wisdom of Ayurveda and the rich culinary heritage of India, we embarked on a journey to create a product that would not only satisfy hunger but also nurture vitality.</p>
    </Col> */}
</Row>
</div>

        </div>




        <div   data-aos="fade-up">
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
<h2 className="high-quality  text-center mt-5 mb-5">High quality  <span  className="high-quality-2" > Nuts  </span></h2>

</div>
<img  className="w-100  mt-4 mb-4  nutz-gig-img " src = {lenthimg} /> 
</div>

      
        </Container>

  

        </Container>

    );
};

export default SubHeading ;