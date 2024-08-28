import React from 'react'
import './OffLipFaves.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import necklaces_for_summer from '../../Accsets/necklaces_for_summer.png'

const OffLipFaves = () => {
  return (
    <div className="off_lip_faves">
      <div className="title_off_lip_faves">
      <h1>20% off lip faves</h1>
      <p>Plus, prep your pout with a free Fruit Quench'rz Lip Oil Duo on 80$+ orders.</p>
      </div>

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
        <div className="price_addtocart">
          <p>99.000</p>
          <p>Add to cart</p>
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
        <div className="price_addtocart">
          <p>99.000</p>
          <p>Add to cart</p>
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
        <div className="price_addtocart">
          <p>99.000</p>
          <p>Add to cart</p>
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
        <div className="price_addtocart">
          <p>99.000</p>
          <p>Add to cart</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default OffLipFaves
