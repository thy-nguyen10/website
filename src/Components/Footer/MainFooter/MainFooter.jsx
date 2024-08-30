import React from 'react'
import './MainFooter.css'

const MainFooter = () => {
  return (
    <div className="main_footer">
      <div className="top_footer">
        <div className="left_footer">
          <h5>NEWSLETTER</h5>
          <p>Sign up and receive 15% off your first order</p>
          <div className="email_footer">
            <input type="email" placeholder="Email Address"/>
            <button >SUBSCRIBE</button>
          </div>
        </div>
        <div className="right_footer">
        <div>
          <h5>HOW CAN WE HELP?</h5>
          <p>Contact</p>
          <p>Returns & Exchanges</p>
          <p>Help & FAQ</p>
          <p>International</p>
          <p>Responsible</p>
        </div>
        <div>
          <h5>ABOUT AROUSE</h5>
          <p>About Us</p>
          <p>Careers</p>
          <p>Affiliates</p>
          <p>Company Blog</p>
          <p>Arouse for Good</p>
          <p>Arouse Grant Program</p>
        </div>
        <div>
          <h5>SOCIAL</h5>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Shoppe</p>
          <p>Tiktok</p>
        </div>
      </div>

      </div>
      <div className="bottom_footer">
        <p>© 2024 Arouse. All rights reserved.</p>
        <p>Privacy Policy</p>
        <p>Viet Nam Privacy Notice</p>
        <p>Terms of Use Accessibility</p>
        <p>Supply Chain Transparency</p>
        <p>Your Privacy Choices</p>
      </div>
    </div>
  )
}

export default MainFooter
