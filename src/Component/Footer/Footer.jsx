import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBRipple
} from 'mdb-react-ui-kit';
import footerimg1 from './assets/Image/Front.png';
import footerimg2 from './assets/Image/Side1.png';
import footerimg3 from './assets/Image/PRODUCT BOX.png';
// import footerimg4 from './assets/Image/millet 3.png';
import footerimg5 from './assets/Image/Side2.png';
import footerimg7 from './assets/Image/back.png';

import './assets/style.css';

export default function App() {
  return (

    <div data-aos="flip-up"
    data-aos-duration="1500"
    >


    <MDBFooter className='text-center text-white' style={{ backgroundColor: 'rgb(255, 228, 178)' }}>
      <MDBContainer className='p-4'>
        <section>
          <MDBRow>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <a href='#!'>
                <div data-aos="fade-down-right">
                  <img  className='img-fluid  footer-img-size' src={footerimg1} alt='footer img1' />
                  </div>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <a href='#!'>
                <div data-aos="fade-down-right">
                  <img  className='img-fluid  footer-img-size' src={footerimg2} alt='footer img2' />
                  </div>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <a href='#!'>
                <div data-aos="fade-down-right">
                  <img  className='img-fluid  footer-img-size' src={footerimg3} alt='footer img3' />
                  </div>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <a href='#!'>
                  {/* <img  className='img-fluid  footer-img-size' src={footerimg4} alt='footer img4' /> */}
                  <div data-aos="fade-down-left">

                  <img  className='img-fluid  footer-img-size' src={footerimg1} alt='footer img1' />
                  </div>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <a href='#!'>
                <div data-aos="fade-down-left">

                  <img  className='img-fluid  footer-img-size' src={footerimg5} alt='footer img5' />

                  </div>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <a href='#!'>
                <div data-aos="fade-down-left">

                  <img  className='img-fluid  footer-img-size' src={footerimg7} alt='footer img7' />

                  </div>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3 footer-final-img-test ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          goldenfields.com
        </a>
      </div>
    </MDBFooter>
    </div>
  );
}
