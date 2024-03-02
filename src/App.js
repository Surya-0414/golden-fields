import React from "react";
import MainHeader from "./Component/MainHeader/MainHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Pages/HomePage";
import Banner from "./Component/Banner/Banner";
import NavBar from "./Component/NavBar/NavBar";
import Amazon from "./Component/Amazon/Amazon";
import YouTube from "./Component/YouTube/YouTube";
import Footer from "./Component/Footer/Footer";
import SliderBanner from "./Component/SliderBanner/SliderBanner";
import Review from "./Component/Review/Review";
import Branding from "./Component/Branding/Branding";
import SubHeading from "./Component/SubHeading/SubHeading";
import DryFood from "./Component/dryfood/DryFood";
import Products from "./Component/Products/Products";
import FinalImage from "./Component/FinalImage/FinalImage";

// Importing libraries and styles
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

AOS.init();

const IndexPage = () => {
  return (
    <>
      <HomePage/>
    </>
  );
};

export default IndexPage;
