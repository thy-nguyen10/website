import React from 'react'
import './SubFooter.css'

const SubFooter = () => {
  return (
    <div className="sub_footer">
      <div className="sub_footer_title">
        <p>@Arouse.Handmade</p>
        <p style={{marginRight : "80px", fontSize: '29px'}}>Follow Instagram Arouse.</p>
      </div>
      <div className="sub_footer_img">
        {/* Phần 1: 1 bức ảnh lớn */}
        <div className="sub_footer_main_img" style={{ flex: 1, backgroundColor: '#bdbdbd', height: '330px' }}></div>

        {/* Phần 2: 4 bức ảnh nhỏ */}
        <div className="sub_footer_sub_img">
          <div style={{ backgroundColor: '#bdbdbd', height: '150px' }}></div>
          <div style={{ backgroundColor: '#bdbdbd', height: '150px' }}></div>
          <div style={{ backgroundColor: '#bdbdbd', height: '150px' }}></div>
          <div style={{ backgroundColor: '#bdbdbd', height: '150px' }}></div>
        </div>

        {/* Phần 3: 4 bức ảnh nhỏ */}
        <div className="sub_footer_sub_img">
          <div style={{ backgroundColor: '#bdbdbd', height: '150px' }}></div>
          <div style={{ backgroundColor: '#bdbdbd', height: '150px' }}></div>
          <div style={{ backgroundColor: '#bdbdbd', height: '150px' }}></div>
          <div style={{ backgroundColor: '#bdbdbd', height: '150px' }}></div>
        </div>
      </div>
    </div>
  )
}

export default SubFooter
