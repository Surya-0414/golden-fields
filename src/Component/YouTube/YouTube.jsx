import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'; // Importing email icon
import './assets/style.css';
import youimgcreate from './assets/image/tasty_image-1.png';



const YouTube = () => {
  // State to manage the text color
  const [textColor, setTextColor] = useState('#9f4103'); // Default color

  // Function to toggle the text color
  const toggleColor = () => {
    // Toggle between black and default color
    setTextColor(prevColor => prevColor === '#000000' ? '#9f4103' : '#000000');
  };

  // useEffect to continuously change the text color
  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle the text color
      toggleColor();
    }, 1000); // Change color every second

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div data-aos="fade-down"
         data-aos-easing="linear"
         data-aos-duration="1500"> 
      <div className='total-you-bk-1'>
        <div className='container-fluid ad-you-back-img '>
          <div className='ad-you-back-content'>
            <div className='mt-5 mb-5'>
              {/* Use inline style to apply the text color */}
              <h2 className='mt-5 mb-5 you-contact text-center' style={{ color: textColor }}>
                High Quality <span className='you-contact-2 text-center'>Healthy</span> <br /> And Delivery Services
              </h2>
              <div>
                <div data-aos="fade-right">
                  <p className="i-cons-text-01 mx-3 text-center"><HiOutlineMail className="i-cons-01 text-center"   /> golden@gmail.com</p> 
                </div>
                <div data-aos="fade-left">
                  <p className="i-cons-text-01 mx-3 text-center"><FaWhatsapp className="i-cons-01 text-center"  /> (+91) 99887 74455</p>
                </div>
              </div>
              <div className='you-img-create-1'>
                <div data-aos="fade-up">
                

                  <img className='img-fluid you-img-create' src={youimgcreate} />


                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default YouTube;
