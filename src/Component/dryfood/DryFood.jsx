import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { CiBookmarkCheck } from "react-icons/ci";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// Importing images and styles
import dry2 from './assets/image/5da0343d3dc1e916a8394a57_1570780221722.jpg';
import './assets/style.css/style.css';

// Initialize AOS
AOS.init();

const DryFood = () => {
    return (
        <Container fluid className="dry-back-img">
            <Container>
                <Row >
                    <Col lg={6}>
                        <div data-aos="fade-right"  data-aos-duration="1000">
                            <img className="img-fluid  dry-img-1 mt-5 mb-5" src={dry2} alt="Dry Food" />
                        </div>
                    </Col>

                    <Col lg={6}>
                    <div data-aos="fade-left">

                        <h1 className="dry-h1 mt-5">We Have <span className="dry-h-1-s"> 35 Years </span> Of Experience</h1>
                        
                        <h2 className="dry-h2  mt-3">We Provide The Best Spices in The Market.</h2>
                        <p className="mt-2 dry-p-1"> Lorem Ipsum is simply dummy text of free available in market the printing and typesetting industry has been the industry's standard dummy text ever.</p>
                        <p> <CiBookmarkCheck    className="dry-icons" />  Nsectetur cing elit</p>
                        <p> <CiBookmarkCheck    className="dry-icons" /> Nsectetur cing elit.</p>
                        <p> <CiBookmarkCheck    className="dry-icons" /> Nsectetur cing elit.</p>
                        <Button className="dry-btn-1 px-4 py-2 mb-4" >Warning</Button>{''}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default DryFood;
