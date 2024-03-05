import React from "react";
import './assets/style.css';
import brandbox from './assets/image/2-it.png';

const DemoHeading = () => {
    return (
        <div className="image-container">
            <img src={brandbox} alt="Brand Box" className="falling-image" />
        </div>
    );
};

export default DemoHeading;
