import React from 'react';
import 'antd/dist/reset.css';
import './Slider.css';
import slider_1 from '../../Accsets/jpeg-optimizer_03.jpg';
import { Carousel, Row, Col } from 'antd';

const Slider = () => {
  return (
    <div className='supper-slider'>
        <div className="slider-text-overlay">
            {/* <p>high summer</p> */}
        </div>
        <div className='slider-text-button-overlay'>
          <p>high summer</p>
          <button>collections</button>
        </div>
        <Carousel autoplay>
          <div>
            <Row >
              <Col xs={24} sm={20} md={16} lg={12}>
                <img src={slider_1} alt="Slider 1" className="slider-image" />
              </Col>
            </Row>
          </div>
          <div>
            <Row >
              <Col xs={24} sm={20} md={16} lg={12}>
                <img src={slider_1} alt="Slider 2" className="slider-image" />
              </Col>
            </Row>
          </div>
          <div>
            <Row >
              <Col xs={24} sm={20} md={16} lg={12}>
                <img src={slider_1} alt="Slider 3" className="slider-image" />
              </Col>
            </Row>
          </div>
          <div>
            <Row >
              <Col xs={24} sm={20} md={16} lg={12}>
                <img src={slider_1} alt="Slider 4" className="slider-image" />
              </Col>
            </Row>
          </div>
        </Carousel>
    </div>
  );
}

export default Slider;
