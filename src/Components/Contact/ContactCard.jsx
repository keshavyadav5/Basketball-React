import React from 'react'
import './Contact.css'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-scroll';

const ContactCard = () => {

  return (
    <div className='contactCard'>
      <div className='contact-logo'>
        <h2>Basket <span>ball</span>.</h2>
        <p>Our dynamic training sessions are menticulously crafted by Keshav, a seasoned coach with a proven track recorded...</p>
        <div className="contact-logo-icon">

          <a href="https://www.instagram.com/k_shav09/" target='_blank'><FaFacebook /></a>

          <a href="https://www.instagram.com/k_shav09/" target='_blank'><FaInstagram /></a>

          <a href="https://www.instagram.com/k_shav09/" target='_blank'><FaWhatsapp /></a>


        </div>
      </div>

      <div className='quick-link'>
        <h2>QUICK LINKS</h2>
        <nav>
          <li><Link to='home' smooth={true} offset={0} duration={1000}>Home</Link></li>

          <li><Link to='about' smooth={true} offset={-65} duration={500}>About</Link></li>

          <li><Link to='program' smooth={true} offset={-65} duration={500}>Program</Link></li>
          <li><Link to='testimonial' smooth={true} offset={-65} duration={500}>Testimonial</Link></li>
        </nav>
      </div>

      <div className='contact-info'>
        <h2>CONTACT INFO</h2>
        <p>A fusion of passion and precision. Bardan goes beyond being a coach</p>
        <div className="contact-container">
          <div className='contact-info-div'>
            <HiOutlineMail />
            <p>bardan@gmail.com</p>
          </div>

          <div className='contact-info-div'>
            <FaLocationDot />
            <p>bkvm brt morang 2024</p>
          </div>

          <div className='contact-info-div'>
            <FaPhone />
            <p>984-123-4567</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactCard