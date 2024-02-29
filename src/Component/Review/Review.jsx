import React from "react";
import './assets/style.css';
import vid from './assets/Image/vid4.mp4';

const Review = () => {
    return (
        <div className="video-background">
            <video autoPlay muted loop>
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Review;