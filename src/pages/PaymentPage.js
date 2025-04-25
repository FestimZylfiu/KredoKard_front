import React, { useEffect } from 'react'
import "../components/Main.css"
import "./PaymentPage.css"
import "../pages/HomePage.css"
import kredo10 from "../assets/images/kredo-10.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css'

const PaymentPage = () => {
  useEffect(()=> {
        AOS.init({
          duration: 1000,    
          once: true,         
          offset: 50         
        });
      },[])
  return (
    <div className='container'>
        <div className='payment-container'>
        <img data-aos="zoom-in-right" src={kredo10} alt='Payment img' />
        <div className='payment-text-container'>
            <h3 data-aos="fade-up"data-aos-delay="100">КАКО ДА ПЛАТАМ?</h3>
            <p data-aos="fade-up"data-aos-delay="200">Плаќањето може да го извршите на Благајна во нашата<br/> експозитура, секој работен ден од 08:30 до 16:30 часот или во банка на нашата жиро сметка.</p>
            <ul className='ul-circle'>
                <li data-aos="fade-left" data-aos-delay="300">Назив на примач: ФД Кредо Кард ДОО Скопје</li>
                <li data-aos="fade-left" data-aos-delay="400">Трансакциска сметка: 210074873800136</li>
                <li data-aos="fade-left" data-aos-delay="500">Банка на примач: НЛБ Тутунска Банка</li>
            </ul>
        </div>
        </div>

    </div>
  )
}

export default PaymentPage