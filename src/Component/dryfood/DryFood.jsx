import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


import dry2 from './assets/image/dry-2.png';
import './assets/style.css/style.css';

const DryFood = () => {
    return (
        <Container fluid className="dry-back-img">
            <Container>
            <Row >
                <Col lg={6}>
                    <img className="img-fluid  dry-img-1" src={dry2} alt="Dry Food" />
                </Col>

                <Col lg={6}>
                    <h1 className="dry-h1 mt-5">We Have <span className="dry-h-1-s"> 35 Years </span> Of Experience</h1>

                    <h2 className="dry-h2  mt-3">We Provide The Best Spices in The Market.</h2>

                    <p className="mt-2 dry-p-1"> Lorem Ipsum is simply dummy text of free available in market the printing and typesetting industry has been the industry's standard dummy text ever.</p>

                    <p> Nsectetur cing elit</p>

                    <p>Nsectetur cing elit.</p>

                    <p>Nsectetur cing elit.</p>

                    <Button className="dry-btn-1" >Warning</Button>{''}




                </Col>
            </Row>
            </Container>
        </Container>
    );
};

export default DryFood;
