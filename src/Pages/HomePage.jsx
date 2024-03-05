
import React from "react";
import MainHeader from "../Component/MainHeader/MainHeader";
import Banner from "../Component/Banner/Banner";
import NavBar from "../Component/NavBar/NavBar";
import Amazon from "../Component/Amazon/Amazon";
import YouTube from "../Component/YouTube/YouTube";
import Review from "../Component/Review/Review";
import Branding from "../Component/Branding/Branding";
import SubHeading from "../Component/SubHeading/SubHeading";
import Footer from "../Component/Footer/Footer";
import DryFood from "../Component/dryfood/DryFood";
import Products from "../Component/Products/Products";
import FinalImage from "../Component/FinalImage/FinalImage";
import DemoHeading from "../Component/DemHeading/DemoHeading";
// import  Nav  from "../Component/Nav/Nav";

const HomePage =() =>{
    return(
        <>

        {/* <Nav/> */}
        <NavBar/>
        <MainHeader/>
        {/* <DemoHeading/> */}
        <DryFood/>
        <Review/>
        <Banner/> 
        <SubHeading/>

        {/* <FinalImage/> */}



        <Products/>
        {/* <Branding/> */}


         <YouTube/>



        {/* <Amazon/> */}


        

        <Footer/>

        

        
        
        </>

    );
};

export default HomePage ;