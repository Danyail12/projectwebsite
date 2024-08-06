import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='p-5' style={{backgroundImage: "url(./footer.png)", backgroundSize: "cover", color: "white"}}>

    <div className="container">
        <div className="row">

            <div className="col">
                <p>Address</p>
                <p>Melbourne's GPO 434 VIC 3074,</p>
                <p>Australia,</p>


            </div>

            <div className="col">
                <p>Service</p>
                <p>Web Development</p>
                <p>UI/UX Design</p>
                <p>Digital Marketing</p>
            </div>

            <div className="col">
            <p>Useful Links</p>
            <p><Link to="/about-us" className="text-white text-decoration-none">About</Link></p>
            <p><Link to="/team" className="text-white text-decoration-none">Team</Link></p>
            <p><Link to="/services" className="text-white text-decoration-none">Services</Link></p>
            <p><Link to="/contact" className="text-white text-decoration-none">Contact Us</Link></p>
          </div>
            <div className="col">
                <p>Contact Us</p>
                <input type="text" className='form-control mt-3 text-white ' style={{backgroundColor: "transparent"}} placeholder='Enter Your Email' />
            </div>
            <hr />
            <div className='col'>
                <p className='mt-5 justify-content-center text-center d-flex'> Copyright © 2024, All Right Reserved</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer