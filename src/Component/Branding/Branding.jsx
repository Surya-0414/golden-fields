import React from "react";
import { Row, Col } from 'react-bootstrap';
import brandingimg1 from './assets/Image/Front.png';
import brandingimg2 from './assets/Image/Side1.png';
import brandingimg3 from './assets/Image/PRODUCT BOX.png';
import brandingimg4 from './assets/Image/Side2.png';
import brandingimg5 from './assets/Image/back.png';
import './assets/style.css';

const Branding = () => {
    return (
        <div>
            <Row className="branding-row">
                <Col lg={2} className="branding-animation">
                    <img className="img-fluid barnding-imgs branding-left" src={brandingimg1} />
                </Col>
                <Col lg={1} className="branding-animation">
                    <img className="img-fluid barnding-imgs branding-left" src={brandingimg2} />
                </Col>
                <Col lg={2} className="branding-animation">
                    <img className="img-fluid barnding-imgs-1" src={brandingimg3} />
                </Col>
                <Col lg={1} className="branding-animation">
                    <img className="img-fluid barnding-imgs branding-right" src={brandingimg4} />
                </Col>
                <Col lg={2} className="branding-animation">
                    <img className="img-fluid barnding-imgs branding-right" src={brandingimg5} />
                </Col>
            </Row>
        </div>
    );
};

export default Branding;
