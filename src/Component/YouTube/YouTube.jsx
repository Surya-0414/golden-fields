import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'; // Importing email icon
import './assets/style.css';

const YouTube = () => {
  return (


<div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">

    <div className='container-fluid ad-you-back-img '>
      <div className='ad-you-back-content'>
        <div className='mt-5 mb-5'>
          <h2 className='mt-5 mb-5 you-contact'>High Quality <span className='you-contact-2'>Healthy</span>  <br /> And Delivery Services</h2>

          <div>
            <p  className="i-cons-text-01 mx-3"><HiOutlineMail className="i-cons-01" /> golden@gmail.com</p> {/* Using email icon */}
            <p  className="i-cons-text-01  mx-3"><FaWhatsapp className="i-cons-01" /> (+91) 99887 74455</p>

            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default YouTube;
