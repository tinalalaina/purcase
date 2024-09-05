import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className="row">
            <div className="col">
                <div className="grostore">
                   Grostore
                </div></div>
            <div className="col">
                <p className='foot1'>Quick Link</p>
                <p className='foot2'>My Account</p>
                <p className='foot2'>About Us</p>
                <p className='foot2'>Store Locator</p>
                <p  className='foot2'>Delivery</p>
                <p  className='foot2'>Pickup</p>
            </div>
            <div className="col">
                <p  className='foot1'>Terms & Privacy</p>
                <p  className='foot2'>Trust & safety</p>
                <p  className='foot2'>Terms of Service</p>
                <p  className='foot2'>Privacy Policy</p>
            </div>
            <div className="col">
                <p  className='foot1'>Subscribe our Newsletter</p>
                <p><input type="email" /></p>
                <p  className='foot2'>We accept Payment method</p>
            </div>
        </div>
        <p  className='foot1'>2024 AcRaky.All rights reserved</p>
    </div>
  )
}

export default Footer