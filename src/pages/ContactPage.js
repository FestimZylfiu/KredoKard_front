import React, { useEffect } from 'react'
import "../components/Main.css"
import "./ContactPage.css"
import AOS from 'aos';
import 'aos/dist/aos.css'

const ContactPage = () => {
   useEffect(()=> {
              AOS.init({
                duration: 1000,    
                once: true,         
                offset: 50         
              });
            },[])
  return (
    <div className='container'>
        <div className='contact-container'>
        <div className='text-container'>
          <h3 data-aos="fade-up">Контакт</h3>
          <ul className='ul-circle'>
            <li data-aos="fade-left" data-aos-delay="100">Телефон: +389 2 3243 003</li>
            <li data-aos="fade-left" data-aos-delay="200">Адреса: ул. Костурски Херои бр.47 – Скопје</li>
            <li data-aos="fade-left" data-aos-delay="300">E-mail: fdkredokard@gmail.com</li>
          </ul>
        </div>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.1527953096634!2d21.41482647556652!3d41.99699625796247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13541448f469d183%3A0xbaf5fb1b408f863!2sKosturski%20Heroi%2047%2C%20Skopje%201000%2C%20North%20Macedonia!5e0!3m2!1sen!2s!4v1745439683045!5m2!1sen!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        data-aos="fade-right"
    />

        </div>

    </div>
  )
}

export default ContactPage