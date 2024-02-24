
import React from "react";
import MainHeader from "../Component/MainHeader/MainHeader";
import Banner from "../Component/Banner/Banner";
import NavBar from "../Component/NavBar/NavBar";
import Amazon from "../Component/Amazon/Amazon";
import YouTube from "../Component/YouTube/YouTube";
import SliderBanner from "../Component/SliderBanner/SliderBanner";
import Review from "../Component/Review/Review";
import Branding from "../Component/Branding/Branding";
import SubHeading from "../Component/SubHeading/SubHeading";
import Footer from "../Component/Footer/Footer";
import DryFood from "../Component/dryfood/DryFood";


const HomePage =() =>{
    return(
        <>
        <NavBar/>
        <MainHeader/>
        <DryFood/>

        <SliderBanner/>
        <SubHeading/>
        <Review/>
         <Banner/> 
         <YouTube/>

        <Amazon/>

        
        <Branding/>

        <Footer/>

        

        
        
        </>

    );
};

export default HomePage ;