import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='supper-header'>
        <div className="sub-header">
            <p>free 2-day shipping on us order 99k</p>
        </div>
        <div className="main-header">
            <div className="box-header">
            <div className="left-nav">
                <p>shop</p>
                <p>collections</p>
            </div>
            <div className="logo-web">
                <p className='main-title'>arouse</p>
                <p>handmade</p>
            </div>
            <div className="right-nav">
                <p>search</p>
                <p>login</p>
                <p>cart(0)</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header
