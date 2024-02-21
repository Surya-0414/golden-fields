
import React from "react";
import MainHeader from "../Component/MainHeader/MainHeader";
import Banner from "../Component/Banner/Banner";
import NavBar from "../Component/NavBar/assets/NavBar";
import Amazon from "../Component/Amazon/Amazon";
import YouTube from "../Component/YouTube/YouTube";
import SliderBanner from "../Component/SliderBanner/SliderBanner";


const HomePage =() =>{
    return(
        <>
        <NavBar/>
        <MainHeader/>
        <SliderBanner/>
        <Amazon/>
         <Banner/> 
        <YouTube/>
        
        
        
        
        </>

    );
};

export default HomePage ;