import React from 'react'
import './Footer.css'
import SubFooter from './SubFooter/SubFooter'
import MainFooter from './MainFooter/MainFooter'

const Footer = () => {
  return (
    <div className="footer">
      <SubFooter/>
      <MainFooter/>
    </div>
  )
}

export default Footer
