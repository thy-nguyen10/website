import React from 'react';
import 'antd/dist/reset.css';
import './Slider.css';
import slider_1 from '../../Accsets/slider_1.jpg';
import { Carousel } from 'antd';

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
          <img src={slider_1} alt="Slider 1" className="slider-image" />
        </div>
        <div>
          <img src={slider_1} alt="Slider 2" className="slider-image" />
        </div>
        <div>
          <img src={slider_1} alt="Slider 3" className="slider-image" />
        </div>
        <div>
          <img src={slider_1} alt="Slider 4" className="slider-image" />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
