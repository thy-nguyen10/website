import React from 'react'
import './GiftNecklaces.css'
import necklaces_for_summer from '../../Accsets/necklaces_for_summer.png'

const GiftNecklaces = () => {
  return (
    <div className='gift_necklaces'>
      <div className="necklaces_for_summer">
        <p className='title_for'>necklaces for summer</p>
        <div className="img_gift_necklaces">
        <img src={necklaces_for_summer} className='img_for' alt="" />
        </div>
      </div>
      <div className="gift_for_her">
        <p className="title_for">gifts for her</p>
        <div className="img_gift_necklaces">
        <img src={necklaces_for_summer} className='img_for' alt="" />
        </div>
      </div>
    </div>
  )
}

export default GiftNecklaces
