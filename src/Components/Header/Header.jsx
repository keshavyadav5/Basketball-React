import React, { useEffect, useState } from 'react';
import './Header.css';
import menuIcon from '../../assets/menu-icon.png';
// import {Link} from 'react-router-dom'
import { Link } from 'react-scroll';

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 5 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header navbar ${sticky ? 'dark-nav' : ''}`}>
      <div className='logo'>

        <Link to='home' smooth={true} offset={0} duration={500}><h1>BASKET<span>BALL</span>.</h1></Link>
      </div>
      <ul className={mobileMenu ? '' : "hide-menu"}>

        <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>

        <li><Link to='about' smooth={true} offset={-65} duration={500}>About</Link></li>

        <li><Link to='program' smooth={true} offset={-65} duration={500}>Program</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-65} duration={500}>Testimonial</Link></li>
        <li><Link to='team' smooth={true} offset={-65} duration={500}>Team</Link></li>
      </ul>
      <div className='header-contact-btn'>
        
        <Link to='contact' smooth={true} offset={-65} duration={1000}><button className="btn header-btn">contact us</button></Link>
      </div>
      <img src={menuIcon} alt="Menu" className='menu-icon'
        onClick={() => setMobileMenu(!mobileMenu)}
      />
    </div>
  );
}

export default Header;


// className={mobileMenu ? "" : "hide"}