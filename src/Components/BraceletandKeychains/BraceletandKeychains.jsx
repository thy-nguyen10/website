import React from 'react'
import './BraceletandKeychains.css'
import necklaces_for_summer from '../../Accsets/necklaces_for_summer.png'

const BraceletandKeychains = () => {
  return (
    <div className="bracelet_and_keychains">
        <div className="bracelet">
        <p className='title_for'>bracelets</p>
        <div className="img_bracelet_and_keychains">
        <img src={necklaces_for_summer} className='img_for' alt="" />
        </div>
        </div>
        <div className="keychains">
        <p className='title_for'>keychains</p>
        <div className="img_bracelet_and_keychains">
        <img src={necklaces_for_summer} className='img_for' alt="" />
        </div>
        </div>
    </div>
  )
}

export default BraceletandKeychains
