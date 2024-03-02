import React from "react";
import './assets/style.css';
import { Container, Form } from "react-bootstrap";
import featurenew from "./assets/image/feature-new.png";
import{Row,Col} from 'react-bootstrap';
import bannerFinal from './assets/image/millet_image-1.png';
// import video1 from './assets/video/video-soja.mp4'
import amzimg1 from "./assets/image/2-it.png";
import amazonimg2 from './assets/image/PRODUCT BOX.png';
import amazonimg3 from './assets/image/a-r-3.png';
import amazonimg4 from './assets/image/Side01.png';
import amazonimg5 from './assets/image/Side02.png';
import { Button } from 'react-bootstrap';




// import plant from './assets/image/n-p.png';
const Banner = () => {
    return(
        <Container fluid  className=" ">


<div className="">

            <Row  className="back-maps p-0 m-0  ">

            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        
                <h1 className="text-center  amazon-heading  mt-3 mb-3">We are in <span  className="amazon-heading-001" >Amazon</span> Now </h1>
                </div>
            <Col className="text-center banner-text banner-right  star-fall" lg ={5}>

                {/* <video controls>
                            <source className="" src={video1} type="video/mp4" /> 
                        </video> */}
<div data-aos="zoom-in-right">
<h2  className="banner-head-text-back-img">Our Story</h2>
          <p>Founded with a passion for health and a deep appreciation for traditional Indian ingredients, Golden Fields was born out of a desire to reconnect with our roots and promote holistic well-being. Drawing inspiration from the wisdom of Ayurveda and the rich culinary heritage of India, we embarked on a journey to create a product that would not only satisfy hunger but also nurture vitality.</p>

          
          <Button className="dry-btn-1 px-4 py-2" >Warning</Button>{''}
          </div>
                </Col>
                <Col lg ={5} md={6} sm={12}>
            <div >
{/* <img className="  img-fluid banner-img-1 mt-5  banner-center" src = {amazonimg1}/> */}

<div data-aos="flip-left">

<img  className="  img-fluid banner-img-1 mt-5  banner-center  star-fall"    src = {amzimg1} />
</div>
            </div>
            </Col>

            </Row>

            <Row  className="back-maps p-0 m-0">

            <Col lg ={5} md={6} sm={12} className="star-fall">
            <div >

            <div data-aos="flip-right">

<img className="  img-fluid banner-img-1 mt-5" src = {amazonimg2}/>
</div>
            </div>
            </Col>
            <Col className="text-center banner-text banner-right  star-fall" lg ={5}>



          
{/* <video controls>
            <source className="" src={video1} type="video/mp4" /> 
        </video> */}
<div data-aos="zoom-out">

<h2  className="banner-head-text-back-img">Our Story</h2>
<p>Founded with a passion for health and a deep appreciation for traditional Indian ingredients, Golden Fields was born out of a desire to reconnect with our roots and promote holistic well-being. Drawing inspiration from the wisdom of Ayurveda and the rich culinary heritage of India, we embarked on a journey to create a product that would not only satisfy hunger but also nurture vitality.</p>


<Button className="dry-btn-1 px-4 py-2" >Warning</Button>{''}
</div>
</Col>
               

            </Row>
            
             <Row  className="back-maps p-0 m-0">

    

                <Col className="star-fall" lg ={5} md={6} sm={12}>
                <div data-aos="flip-down">

                <img className="  img-fluid banner-img-1 mt-5 mb-5" src = {amazonimg3}/>

                </div>
                </Col>
                <Col lg ={2} md={6} sm={12}  className="star-fall">
            <div >
            <div data-aos="flip-down">

            <img className="  img-fluid banner-img-1 mt-5 mb-5  star-fall" src = {amazonimg4}/>
            </div>
            </div>
            </Col>

            <Col className="text-center banner-text  star-fall" lg ={2}>
            <div data-aos="flip-down">

            <img className="  img-fluid banner-img-1 mt-5 mb-5" src = {amazonimg5}/>
            </div>
            </Col>
            

            </Row> 
            </div>



       


        </Container>
        
    );
};

export default Banner ;