import React from 'react'
import footerlogo from "../assets/images/logo.png"
import "./Main.css"
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className='container'>
        <div className='footer-wrapper'>
        <div className='footer-container'>
            <img src={footerlogo} alt='KredoKard logo'/>
            <p id='email'>fdkredokard@gmail.com</p>
            <p>+389 2 3243 003</p>
            <p className='orange'>Скопје</p>
            <p>ул. Костурски Херои бр.47 - Скопје</p>
            <p>+389 70 273 288</p>
            <p>+389 70 273 289</p>
            <p className='orange'>Тетово</p>
            <p>ул. Димо Гавроски Кара бр.1/1 -</p>
            <p>бло54-л.15 - Тетово</p>
            <p>+389 70 273 036</p>
            <div className="footer-container-icons">
            <div className="icon-wrapper"><FaFacebookF /></div>
            <div className="icon-wrapper"><FaGooglePlusG /></div>
            <div className="icon-wrapper"><FaTwitter /></div>
            <div className="icon-wrapper"><AiFillInstagram /></div>
           </div>

        </div>
        <div className='footer-grid-container'>
            <h3>Корисни линкови</h3>
            <ul>
            <li><p>Општи Услови</p></li>
            <li><p>Политика на Приватност</p></li>
            <li><p>Заштита на лични податоци</p></li>
            <li><p>Политика за колачиња</p></li>
            </ul>
        </div>
        <div className='footer-grid-container'>
            <h3>Брзи линкови</h3>
            <ul>
            <li><p>Како да аплицирам?</p></li>
            <li><p>Како да платам</p></li>
            <li><p>ЧПП</p></li>
            <li><p>Кредити</p></li>
            </ul>
        </div>
        <div className='footer-grid-container endForm'>
            <h3>Биди во тек</h3>
            <form>
                <input type='email' placeholder='Внесете емаил адреса'/>
                <button>Претплати се</button> 
            </form>
            <p id='unchanged'>Претплатете се и бидете во тек со <br /> најновите понуди и новости на Кредо<br/> Кард.</p>
        </div>
        </div>
        <p className='copyright'>Copyright ©2025 Сите права се заддржани | Изработено од <strong>Вебиарт</strong></p>
    </div>
  )
}


