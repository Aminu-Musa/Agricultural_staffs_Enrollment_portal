import React from 'react'
import arcn_logo from '../../assets/arcn-logo.svg'
const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="footer">
      <div className="footer__container container-padding">

        <div className="footer__flex__container">

          <div>
            <div className="footer_img">
              <img src={arcn_logo} alt="" />
            </div>
            <div>
              <h2 className="footer__title">ARCN Staff Enrollment Portal</h2>
              <p className="footer__description">Your gateway to efficient staff management and enrollment.</p>
            </div>


          </div>


          <ul className="footer__links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>



        <hr />
        <p className="copyright-text">&copy; {currentYear} ARCN Staff Enrollment Portal. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer