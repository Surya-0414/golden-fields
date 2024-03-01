import React from "react";
import { Container } from "react-bootstrap";
import finalbigimg from './assets/image/millet_image-1.png';
import './assets/style.css';

const FinalImage =() =>{
    return(

     <Container fluid className= "f-final-pa-img ">
        <h2 className="f-text-alin text-center ">Our Brand</h2>
<div className="final-big-img" >
        <img  className="final-back-big-img-around"  src = {finalbigimg}  />

        </div>

     </Container>

    );
};

export default FinalImage ;