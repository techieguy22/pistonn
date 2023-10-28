import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
import img5 from '../../images/img5.png'
import img6 from '../../images/img6.png'
import img7 from '../../images/img7.png'
import './front.css'

function Front() {
  return (
    <div>
      <Container fluid="md" className='container-style'>
        <Row>
          <Col xs={12} md={6} className="column-style">
            <div className="container column-style">
                <img src={img1} alt="" />
                <div className="bottom-centered1">MADE FOR YOU</div>
                <div className='bottom-centered2'>PISTONS</div>
            </div>
          </Col>
          <Col xs={12} md={6} className='column-style'>
            <div className="container column-style">
                <img src={img2} alt="" />
                <div className="bottom-centered3">YOU WERE MADE TO</div>
                <div className='bottom-centered2'>MAKE AN IMPACT</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className='column-style'>
            <div className="container column-style">
                <img src={img3} alt="" />
                <div className="bottom-centered3">MADE FOR THE BEST</div>
                <div className='bottom-centered2'>CHANGE MAKERS</div>
            </div>
          </Col>
          <Col xs={12} md={6} className='column-style'>
            <img src={img4} alt="" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className='column-style'>
            <img src={img5} alt="" />
          </Col>
          <Col xs={12} md={6} className='column-style'>
            <div className="container column-style">    
                <img src={img6} alt="" />
                <p>SAVOUR THE PRESENT</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} className='column-style'>
            <div className="container column-style">
                <img src={img7} alt="" />
                <div className="bottom-centered2">WHERE QUALITY MEETS CLASS</div>
                <div className="bottom-centered2">MADE FOR YOU</div>
                <div className="bottom-centered2">PISTONS</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Front;
