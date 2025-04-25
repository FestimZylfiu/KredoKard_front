import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import logo from "../assets/images/logo.png";
import "./Navbar.css";
import "./Main.css";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true); 
    } else {
      setSticky(false); 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

   useEffect(()=> {
      AOS.init({
        duration: 1000,    
        once: true,         
        offset: 50         
      });
    },[])

  return (
    <div className={`navbar-wrapper ${sticky ? 'sticky' : ''}`}>
      <div className="container navbar-container">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Navbar Logo" />
          </Link>
        </div>

        <ul className="nav-list">
          <li><Link to="/kako-da-platam" className="nav-link">Како да платам</Link></li>
          <li><Link to="/opsti-uslovi" className="nav-link">Општи услови</Link></li>
          <li><Link to="/#prasanja" className="nav-link">Прашања</Link></li>
          <li><Link to="/tarifnik" className="nav-link">Тарифник</Link></li>
          <li><Link to="/kontakt" className="nav-link">Контакт</Link></li>
        </ul>

        <div className="nav-end">
          <Phone style={{ color: "#63b649", width: "20px", height: "20px" }} />
          <p id="phoneNumber">+389 2 3243 003</p>
          <button className="apply-button">Аплицирај</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


