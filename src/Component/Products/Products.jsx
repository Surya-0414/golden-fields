import React, { useState } from 'react';
import './assets/style.css';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import { Container, Row, Col } from 'react-bootstrap';
import r1p1 from './assets/image/thinai.jpg';
import r1p2 from './assets/image/ragi.jpg';
import r1p3 from './assets/image/kambu.webp';
import r1p4 from './assets/image/solam-02.jpg';
import r1p5 from './assets/image/kuthiraivali.webp';
import r1p6 from './assets/image/varagu_rice.jpg';
import r1p7 from './assets/image/seru-back.jpg';
// 2row
import r2p1 from './assets/image/parli.jpg';
import r2p2 from './assets/image/samba-godhumani.jpg';
import r2p3 from './assets/image/solam-01.jpg';
import r2p4 from './assets/image/seru-back.jpg';
import r2p5 from './assets/image/samba-rice-non-basmati-.png';
import r2p6 from './assets/image/Red-Rice-8-1-1170x658-1-1000x565.jpg';
// 3 row
import r3p1 from './assets/image/batam.webp';
import r3p2 from './assets/image/munthiri.jpg';
import r3p3 from './assets/image/nela katalai.jpg';
import r3p4 from './assets/image/green.webp';
import r3p5 from './assets/image/sundal.jpg';
import r3p6 from './assets/image/karuppu-ulunthu-1.jpg';
import r3p7 from './assets/image/white uhluhu.jpg';
import r3p8 from './assets/image/poothukatalai.jpg';
// 4 row
import r4p1 from './assets/image/samiy.jpg';
import r4p2 from './assets/image/samiy.jpg';

export default function App() {
  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (
    <Container fluid className='total-oroduct-back'>
      <Container fluid>
        <h2 className='type-writing mb-5'>
          Natural <span className='type2-writing mx-3'>Ingredients</span>
        </h2>
        <MDBTabs justify className='mb-3'>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
              <h4>ereege <i className="fa-solid fa-turn-down"></i></h4>
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
              <h4>ereege</h4>
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
              <h4>ereege</h4>
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab4')} active={justifyActive === 'tab4'}>
              <h4>ereege</h4>
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane open={justifyActive === 'tab1'}>
            <Row className='pa-22'>
              <Col lg={3}>
                <div className='main-product-div-col'>
                  <img className='img-fluid img-size' src={r1p1} alt="Image 1" />
                  <div className="overlay">ssssssss</div>
                </div>
              </Col>
              <Col lg={3}>
                <div className='main-product-div-col'>
                  <img className='img-fluid img-size' src={r1p2} alt="Image 2" />
                  <div className="overlay">eeeeeeeeee</div>
                </div>
              </Col>
              <Col lg={3}>
                <div className='main-product-div-col'>
                  <img className='img-fluid img-size' src={r1p3} alt="Image 3" />
                  <div className="overlay">aaaaaaaa</div>
                </div>
              </Col>
              <Col lg={3}>
                <div className='main-product-div-col'>
                  <img className='img-fluid img-size' src={r1p4} alt="Image 4" />
                  <div className="overlay">qqqqqqqqq</div>
                </div>
              </Col>
            </Row>
            {/* 2nd row */}
            <Row className='pa-22 mt-5'>
              <Col lg={3}>
                <div className='main-product-div-col'>
                  <img className='img-fluid img-size' src={r1p5} alt="Image 5" />
                  <div className="overlay">qqqqqqrjtjrqqq</div>
                </div>
              </Col>
              <Col lg={3}>
                <div className='main-product-div-col'>
                  <img className='img-fluid img-size' src={r1p6} alt="Image 6" />
                  <div className="overlay">qqqqqtrruqqqq</div>
                </div>
              </Col>
              <Col lg={3}>
                <div className='main-product-div-col'>
                  <img className='img-fluid img-size' src={r1p7} alt="Image 7" />
                  <div className="overlay">qqqq</div>
                </div>
              </Col>
            </Row>
          </MDBTabsPane>
          <MDBTabsPane open={justifyActive === 'tab2'}>
            <Row className='pa-22'>
              <Col lg={3}>
                <div className='main-product-div-col'>
                  <img className='img-fluid img-size' src={r2p1} alt="Image 1" />
                  <div className="overlay">ggggggsqqqqqqq</div>
                </div>
              </Col>
              <Col lg={3}>
                <div className='main-product-div-col'>
                  <img className='img-fluid img-size' src={r2p2} alt="Image 2" />
                  <div className="overlay">ggggggsqqqqqqq</div>
                </div>
              </Col>
              <Col lg={3}>
                <div className='main-product-div-col'>
                  <img className='img-fluid img-size' src={r2p3} alt="Image 3" />
                  <div className="overlay">ggggggsqqqqqqq</div>
                </div>
              </Col>
            </Row>
            {/* 2nd row */}
            <Row className='pa-22 mt-5'>
              <Col lg={3}>
                <div className='main-product-div-col'>
                  <img className='img-fluid img-size' src={r2p4} alt="Image 4" />
                  <div className="overlay">ggggggsqqqqqqq</div>
                </div>
              </Col>
              <Col lg={3}>
                <div className='main-product-div-col'>
                  <img className='img-fluid img-size' src={r2p5} alt="Image 5" />
                  <div className="overlay">ggggggsqqqqqqq</div>
                </div>
              </Col>
              <Col lg={3}>
                <div className='main-product-div-col'>
                  <img className='img-fluid img-size' src={r2p6} alt="Image 6" />
                  <div className="overlay">ggggggsqqqqqqq</div>
                </div>
              </Col>
            </Row>
          </MDBTabsPane>
          <MDBTabsPane open={justifyActive === 'tab3'}>
            {/* Content for tab 3 */}
            <Row className='pa-22'>
              <Col lg={3}>
              <div className='main-product-div-col'>

                <img className='img-fluid img-size' src={r3p1} alt="Image 1" />
                <div className="overlay">ggggggsqqqqqqq</div>

                </div>

              </Col>
              <Col lg={3}>
              <div className='main-product-div-col'>

                <img className='img-fluid img-size' src={r3p2} alt="Image 2" />
                <div className="overlay">ggggggsqqqqqqq</div>

                </div>

              </Col>
              <Col lg={3}>
              <div className='main-product-div-col'>

                <img className='img-fluid img-size' src={r3p3} alt="Image 3" />
                <div className="overlay">ggggggsqqqqqqq</div>

                </div>

              </Col>
              <Col lg={3}>
              <div className='main-product-div-col'>

                <img className='img-fluid img-size' src={r3p4} alt="Image 4" />
                <div className="overlay">ggggggsqqqqqqq</div>

                </div>

              </Col>
            </Row>
            {/* 2nd row */}
            <Row className='pa-22 mt-5'>
              <Col lg={3}>
              <div className='main-product-div-col'>

                <img className='img-fluid img-size' src={r3p5} alt="Image 5" />
                <div className="overlay">ggggggsqqqqqqq</div>
                </div>

              </Col>
              <Col lg={3}>
              <div className='main-product-div-col'>

                <img className='img-fluid img-size' src={r3p6} alt="Image 6" />
                <div className="overlay">ggggggsqqqqqqq</div>
                </div>

              </Col>
              <Col lg={3}>
              <div className='main-product-div-col'>

                <img className='img-fluid img-size' src={r3p7} alt="Image 7" />
                <div className="overlay">ggggggsqqqqqqq</div>
                </div>

              </Col>
              <Col lg={3}>
              <div className='main-product-div-col'>

                <img className='img-fluid img-size' src={r3p8} alt="Image 8" />
                <div className="overlay">ggggggsqqqqqqq</div>
                </div>

              </Col>
            </Row>
          </MDBTabsPane>
          <MDBTabsPane open={justifyActive === 'tab4'}>
            {/* Content for tab 4 */}
            <Row className='pa-22'>
              <Col lg={3}>
              <div className='main-product-div-col'>

                <img className='img-fluid img-size' src={r4p1} alt="Image 1" />
                <div className="overlay">ggggggsqqqqqqq</div>

                </div>

              </Col>
              <Col lg={3}>
              <div className='main-product-div-col'>

                <img className='img-fluid img-size' src={r4p2} alt="Image 2" />
                <div className="overlay">ggggggsqqqqqqq</div>

                </div>

              </Col>
            </Row>
          </MDBTabsPane>
        </MDBTabsContent>
      </Container>
    </Container>
  );
}