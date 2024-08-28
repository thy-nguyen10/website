import React from 'react'
import './Banner.css'
import slider_1 from '../../Accsets/slider_1.png'

const Banner = () => {
  return (
    <div className="main_banner">
      <div className="btn_shop">
        <img src={slider_1} alt="" />
        <button>shop now</button>
      </div>
    </div>
  )
}

export default Banner
