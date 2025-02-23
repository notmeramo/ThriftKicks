import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
   
    <div className="footer" id='footer'> <hr/>
        <div className="footer-content">

            <div className="footer-content-left">
                <img className="logo" src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, laboriosam!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.instagram_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-8433877879</li>
                    <li>contact-us@thriftkicks.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'> Copyright 2025 © ThriftKicks. - All Rights Reserved. </p>
    </div>
  )
}

export default Footer