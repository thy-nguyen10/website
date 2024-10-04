import React from 'react'
import './NewArrial.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
// import necklaces_for_summer from '../../Accsets/necklaces_for_summer.png'

// const NewArrial = () => {
//   return (
//     <div className='new_arrival'>
//       <p className="title">new arrival</p>
//       <div className="main_new_arrival">
//       <div className="new_arrival_item">
//         <div className="img_new_arrival_item">
//           <img src={necklaces_for_summer} alt="" />
//         </div>
//         <div className="name_new_arrival">
//           <div className="main_name_new_arrival">
//           <h4>Rainbow Necklace</h4>
//           <p>High Summer '24</p>
//           </div>
//           <div className="sub_favorite">
//           <FontAwesomeIcon icon={faHeartRegular} size="1x" className="icon_heart"/>
//           </div>
//         </div>
//         <div className="price_addtocart">
//           <p>99.000</p>
//           <p>Add to cart</p>
//         </div>
//       </div>

//       <div className="new_arrival_item">
//         <div className="img_new_arrival_item">
//         <img src="" alt="" />
//         </div>
//         <div className="name_new_arrival">
//           <div className="main_name_new_arrival">
//           <h4>Rainbow Necklace</h4>
//           <p>High Summer '24</p>
//           </div>
//           <div className="sub_favorite">
//           <FontAwesomeIcon icon={faHeartRegular} size="1x" className="icon_heart"/>
//           </div>
//         </div>
//         <div className="price_addtocart">
//           <p>99.000</p>
//           <p>Add to cart</p>
//         </div>
//       </div>

//       <div className="new_arrival_item">
//         <div className="img_new_arrival_item">
//         <img src="" alt="" />
//         </div>
//         <div className="name_new_arrival">
//           <div className="main_name_new_arrival">
//           <h4>Rainbow Necklace</h4>
//           <p>High Summer '24</p>
//           </div>
//           <div className="sub_favorite">
//           <FontAwesomeIcon icon={faHeartRegular} size="1x" className="icon_heart"/>
//           </div>
//         </div>
//         <div className="price_addtocart">
//           <p>99.000</p>
//           <p>Add to cart</p>
//         </div>
//       </div>

//       <div className="new_arrival_item">
//         <div className="img_new_arrival_item">
//         <img src="" alt="" />
//         </div>
//         <div className="name_new_arrival">
//           <div className="main_name_new_arrival">
//           <h4>Rainbow Necklace</h4>
//           <p>High Summer '24</p>
//           </div>
//           <div className="sub_favorite">
//           <FontAwesomeIcon icon={faHeartRegular} size="1x" className="icon_heart"/>
//           </div>
//         </div>
//         <div className="price_addtocart">
//           <p>99.000</p>
//           <p>Add to cart</p>
//         </div>
//       </div>
//       </div>
//     </div>
//   )
// }

import { Card } from 'antd';
import img_1 from '../../Accsets/jpeg-optimizer_01-01.jpg'
import img_2 from '../../Accsets/jpeg-optimizer_01-06.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

const { Meta } = Card;

const NewArrial = () => (
  <div className='new_arrival'>
    <p className="title">new arrival</p>
    <div className="product">
      <div className="card_product">
      <Card
        hoverable
        style={{ width: 240, background: '#dcdcdc5e' }}
        cover={<img alt="example" src={img_1} />}
      >
        <div className="name_product">
          <Meta title="Rainbow Necklace" description="High Summer '24" />
          <div className="icon_love">
            <FontAwesomeIcon icon={faHeartRegular} size="1x" className="icon_heart" />
          </div>
        </div>
        <div className="price_and_addtocart">
          <p>99.000</p>
          <p>Add to cart</p>
        </div>
      </Card>
      </div>

      <div className="card_product">
      <Card
        hoverable
        style={{ width: 240, background: '#dcdcdc5e' }}
        cover={<img alt="example" src={img_2} />}
      >
        <div className="name_product">
          <Meta title="Rainbow Necklace" description="High Summer '24" />
          <div className="icon_love">
            <FontAwesomeIcon icon={faHeartRegular} size="1x" className="icon_heart" />
          </div>
        </div>
        <div className="price_and_addtocart">
          <p>99.000</p>
          <p>Add to cart</p>
        </div>
      </Card>
      </div>

      <div className="card_product">
      <Card
        hoverable
        style={{ width: 240, background: '#dcdcdc5e' }}
        cover={<img alt="example" src={img_2} />}
      >
        <div className="name_product">
          <Meta title="Rainbow Necklace" description="High Summer '24" />
          <div className="icon_love">
            <FontAwesomeIcon icon={faHeartRegular} size="1x" className="icon_heart" />
          </div>
        </div>
        <div className="price_and_addtocart">
          <p>99.000</p>
          <p>Add to cart</p>
        </div>
      </Card>
      </div>

      <div className="card_product">
      <Card
        hoverable
        style={{ width: 240, background: '#dcdcdc5e' }}
        cover={<img alt="example" src={img_1} />}
      >
        <div className="name_product">
          <Meta title="Rainbow Necklace" description="High Summer '24" />
          <div className="icon_love">
            <FontAwesomeIcon icon={faHeartRegular} size="1x" className="icon_heart" />
          </div>
        </div>
        <div className="price_and_addtocart">
          <p>99.000</p>
          <p>Add to cart</p>
        </div>
      </Card>
      </div>

      <div className="card_product">
      <Card
        hoverable
        style={{ width: 240, background: '#dcdcdc5e' }}
        cover={<img alt="example" src={img_1} />}
      >
        <div className="name_product">
          <Meta title="Rainbow Necklace" description="High Summer '24" />
          <div className="icon_love">
            <FontAwesomeIcon icon={faHeartRegular} size="1x" className="icon_heart" />
          </div>
        </div>
        <div className="price_and_addtocart">
          <p>99.000</p>
          <p>Add to cart</p>
        </div>
      </Card>
      </div>
    </div>
  </div>
);


export default NewArrial
