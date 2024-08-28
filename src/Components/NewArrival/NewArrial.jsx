import React from 'react'
import './NewArrial.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import necklaces_for_summer from '../../Accsets/necklaces_for_summer.png'

const NewArrial = () => {
  return (
    <div className='new_arrival'>
      <p className="title">new arrival</p>
      <div className="main_new_arrival">
      <div className="new_arrival_item">
        <div className="img_new_arrival_item">
          <img src={necklaces_for_summer} alt="" />
        </div>
        <div className="name_new_arrival">
          <div className="main_name_new_arrival">
          <h4>Rainbow Necklace</h4>
          <p>High Summer '24</p>
          </div>
          <div className="sub_favorite">
          <FontAwesomeIcon icon={faHeartRegular} size="1x" className="icon_heart"/>
          </div>
        </div>
        <div className="price_addtocard">
          <p>99.000</p>
          <p>Add to card</p>
        </div>
      </div>

      <div className="new_arrival_item">
        <div className="img_new_arrival_item">
        <img src="" alt="" />
        </div>
        <div className="name_new_arrival">
          <div className="main_name_new_arrival">
          <h4>Rainbow Necklace</h4>
          <p>High Summer '24</p>
          </div>
          <div className="sub_favorite">
          <FontAwesomeIcon icon={faHeartRegular} size="1x" className="icon_heart"/>
          </div>
        </div>
        <div className="price_addtocard">
          <p>99.000</p>
          <p>Add to card</p>
        </div>
      </div>

      <div className="new_arrival_item">
        <div className="img_new_arrival_item">
        <img src="" alt="" />
        </div>
        <div className="name_new_arrival">
          <div className="main_name_new_arrival">
          <h4>Rainbow Necklace</h4>
          <p>High Summer '24</p>
          </div>
          <div className="sub_favorite">
          <FontAwesomeIcon icon={faHeartRegular} size="1x" className="icon_heart"/>
          </div>
        </div>
        <div className="price_addtocard">
          <p>99.000</p>
          <p>Add to card</p>
        </div>
      </div>

      <div className="new_arrival_item">
        <div className="img_new_arrival_item">
        <img src="" alt="" />
        </div>
        <div className="name_new_arrival">
          <div className="main_name_new_arrival">
          <h4>Rainbow Necklace</h4>
          <p>High Summer '24</p>
          </div>
          <div className="sub_favorite">
          <FontAwesomeIcon icon={faHeartRegular} size="1x" className="icon_heart"/>
          </div>
        </div>
        <div className="price_addtocard">
          <p>99.000</p>
          <p>Add to card</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default NewArrial
