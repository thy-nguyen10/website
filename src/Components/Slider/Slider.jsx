import React from 'react';
import 'antd/dist/reset.css';
import './Slider.css';
import slider from '../../Accsets/slider-1.jpg';
import slider_2 from '../../Accsets/Slider-2.png'
import slider_3 from '../../Accsets/slider-3.png'
import { Carousel } from 'antd';

const Slider = () => {
  return (
    <div className='supper-slider'>
        <div className="slider-text-overlay">
            <h2>you look good</h2>
            {/* <p>high summer</p> */}
      </div>
      <div className='slider-text-button-overlay'>
        <p>high summer</p>
        <button>collections</button>
      </div>
      <Carousel autoplay>
        <div>
          <img src={slider_3} alt="Slider 1" className="slider-image" />
        </div>
        <div>
          <img src={slider_3} alt="Slider 2" className="slider-image" />
        </div>
        <div>
          <img src={slider_3} alt="Slider 3" className="slider-image" />
        </div>
        <div>
          <img src={slider_3} alt="Slider 4" className="slider-image" />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
