import React,{useEffect, useState} from 'react'
import footerlogo from "../assets/images/logo.png"
import "./Main.css"
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Footer() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!email) {
        toast.error('Потребна е е-пошта');
        return;
      }
  
      if (!email.includes('@')) {
        toast.error('Внесете важечка адреса за е-пошта');
        return;
      }
  
      console.log('Saved email:', email);
      toast.success('Е-поштата во подножјето е зачувана!');
      setEmail('');
      navigate('/kako-da-apliciram?');
    };

     useEffect(()=> {
      AOS.init({
        duration: 1000,
        once: false, 
        offset: 50,
      });
    
      AOS.refresh();
        },[])
  return (
    <div className='container'>
        <div className='footer-wrapper'>
        <div className='footer-container' data-aos="fade-up"
        data-aos-duration="3000" data-aos-delay="100">
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
        <div className='footer-grid-container' data-aos="fade-up"
     data-aos-duration="3000" data-aos-delay="200">
            <h3>Корисни линкови</h3>
            <ul>
            <li><Link to="/opsti-uslovi" className='link1' onClick={() => {
             window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>Општи Услови</Link></li>

            <li><Link to="/privacy-policy" className='link1' onClick={() => {
             window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>Политика на Приватност</Link></li>

           <li><Link to="/privacy-policy" className='link1' onClick={() => {
             window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>Заштита на лични податоци</Link></li>

            <li><Link to="/cookie-policy" className='link1' onClick={() => {
             window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>Политика за колачиња</Link></li>
            
            </ul>
        </div>
        <div className='footer-grid-container' data-aos="fade-up"
     data-aos-duration="3000" data-aos-delay="300">
            <h3>Брзи линкови</h3>
            <ul>
            <li><Link to="/kako-da-apliciram" className='link1' onClick={() => {
             window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>Како да аплицирам?</Link></li>
            
            <li><Link to="/kako-da-platam" className='link1' onClick={() => {
             window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>Како да платам</Link></li>
            
            <li><Link to="/#prasanja" className='link1' onClick={() => {
             window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>ЧПП</Link></li>
            
            <li><Link to="/" className='link1' onClick={() => {
             window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>Кредити</Link></li>
            
            
            </ul>
        </div>
        <div className='footer-grid-container endForm' data-aos="fade-up"
     data-aos-duration="3000" data-aos-delay="400">
            <h3>Биди во тек</h3>
            <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Внесете емаил адреса"
                value={email}
                onChange={handleChange}
            />
            <button type="submit" onClick={() => {
             window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>Претплати се</button>
            </form>
            <p id='unchanged'>Претплатете се и бидете во тек со <br /> најновите понуди и новости на Кредо<br/> Кард.</p>
        </div>
        <ToastContainer />
        </div>
        <p className='copyright'>Copyright ©2025 Сите права се заддржани | Изработено од <strong>Вебиарт</strong></p>
    </div>
  )
}


