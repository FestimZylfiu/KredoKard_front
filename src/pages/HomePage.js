import React, { useEffect, useState } from 'react'
import "../components/Main.css"

import "./HomePage.css"
import kredo2 from "../assets/images/kredo-2.png"

import { useLocation } from 'react-router-dom';

import Testimonials from '../components/Testimonials';
import Slider from "./Slider"


import Slider from "./Slider"






function HomePage() {
  const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
    };

    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 0); 
      }
    }
  }, [location]);

  return (
    <div className='home-container'>
    <div className='container'>
       <div className='before-numbers'>
       <span></span>
       <h3>Како да земам кредит?</h3>
       </div>
      <div className='number-container'>
        <div className='number-content-container'>
          <div className='circle'>01</div>
          <h3>Апликација</h3>
          <p>Изберете износ и рок на отплата и внесете <br /> ги потребните податоци.</p>
        </div>
        <div className='number-content-container'>
          <div className='circle'>02</div>
          <h3>Одобрување</h3>
          <p>За 15 минути ќе бидете контактирани од<br /> наш кредитен референт.</p>
        </div>
        <div className='number-content-container'>
          <div className='circle'>03</div>
          <h3>Исплата</h3>
          <p>Средствата ќе бидат исплатени на Вашата<br /> трансакциска сметка.</p>
        </div>
      </div>
    </div>

    <div className='container'>
      <div className='picture-container'>
        <img src={kredo2} alt='Kredo 2 Img' />
        <div className='text-container'>
          <h3>Зошто да не изберете<br /> нас?</h3>
          <ul className='ul-circle'>
            <li>Брзи кредити до 120.000 мкд</li>
            <li>Одобрување за 15 минути!</li>
            <li>Најповолни услови</li>
            <li>Без скриени трошоци</li>
            <li>24/7 достапност</li>
          </ul>
        </div>

      </div>
    </div>

    <div  className="container">
  <div id="prasanja" className="dropdown-container">
=======

    <div className="container">
  <div className="dropdown-container">

    <h3 className="faq-title">Често поставувани прашања</h3>

    <div className="dropdown">
      <button
        className="dropdown-toggle"
        onClick={() => toggleDropdown("faq1")}
        aria-expanded={openDropdown === "faq1"}
      >
        <span className="symbol">ᐯ</span>
        <span>Како да аплицирам?</span>
      </button>
      <div className={`dropdown-menu ${openDropdown === "faq1" ? "show" : ""}`}>
        <p>
          Може да аплицирате во нашата експозитура или онлајн<br/> на нашиот веб-сајт www.kredokard.mk каде што може да<br/> го изберете потребниот износ и рок на отплата.<br/> Вработено лице во Кредо Кард Мк ќе ве контактира во<br/> најбрз можен рок.
        </p>
      </div>
      <hr className="divider" />
    </div>

    <div className="dropdown">
      <button
        className="dropdown-toggle"
        onClick={() => toggleDropdown("faq2")}
        aria-expanded={openDropdown === "faq2"}
      >
        <span className="symbol">ᐯ</span>
        <span>Кои документи се потребни?</span>
      </button>
      <div className={`dropdown-menu ${openDropdown === "faq2" ? "show" : ""}`}>
        <p>За разгледување на Вашата апликација за кредит треба<br/> да доставите само валидна лична карта или пасош и<br/> бројот на вашатата здравствена картичка.</p>
      </div>
      <hr className="divider" />
    </div>

    <div className="dropdown">
      <button
        className="dropdown-toggle"
        onClick={() => toggleDropdown("faq3")}
        aria-expanded={openDropdown === "faq3"}
      >
         <span className="symbol">ᐯ</span>
        <span>За колку време ќе добијам одговор по аплицирањето?</span>
      </button>
      <div className={`dropdown-menu ${openDropdown === "faq3" ? "show" : ""}`}>
        <p>Вработено лице во Кредо Кард ве контактира во најбрз<br/> можен рок откако ќе аплицирате.</p>
      </div>
      <hr className="divider" />
    </div>


    <div className="dropdown">
      <button
        className="dropdown-toggle"
        onClick={() => toggleDropdown("faq4")}
        aria-expanded={openDropdown === "faq4"}
      >
         <span className="symbol">ᐯ</span>
        <span>За колку време ќе добијам одговор по аплицирањето?</span>
      </button>
      <div className={`dropdown-menu ${openDropdown === "faq4" ? "show" : ""}`}>
        <p>Исплатата се врши веднаш по потпшувањето на <br/> договорот.</p>
      </div>
      <hr className="divider" />
    </div>
  </div>
</div>

<Testimonials/>

<Slider/>
=======

<Slider/>





    <div className='gray-container'>
  <div className='container'>
    <div className='gray-text'>
      <h3>Кредо Кард е Вашиот нов партнер <br /> за финансиски средства.</h3>
      <p>Аплицирајте ОНЛАЈН до 120.000 ден. и подигнете ги потребните средства брзо и лесно.<br /> Одобрувањето е во рок од само 15 минути.</p>
    </div>
    <button className='action-button'>Аплицирај</button>
  </div>
</div>
    </div>

  )
}

export default HomePage