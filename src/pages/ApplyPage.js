import React, { useEffect } from 'react'
import "./ContactPage.css"
import './ApplyPage.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const ApplyPage = () => {
  useEffect(()=> {
                  AOS.init({
                    duration: 1000,    
                    once: false,         
                    offset: 50         
                  });
                   AOS.refresh();
                },[])
  return (
    <div className='container'>
        <div className='apply-container'>
        <div className='apply-text-container'>
          <h1 data-aos="fade-up">Може да аплицирате во нашата експозитура која е лоцирана<br/> во Скопје или ОНЛАЈН.</h1>
          <p data-aos="fade-up">Аплицирајте онлајн во неколку чекори:</p>
          <ul className='ul-circle'>
            <li data-aos="fade-left" data-aos-delay="100">Пристапете на нашиот веб-сајт www.kredo.mk</li>
            <li data-aos="fade-left" data-aos-delay="200">Изберете го потребниот износ</li>
            <li data-aos="fade-left" data-aos-delay="300">Изберете рок на отплата</li>
            <li data-aos="fade-left" data-aos-delay="400">Изберете го копчето АПЛИЦИРАЈ</li>
            <li data-aos="fade-left" data-aos-delay="500">Внесете ги вашите лични податоци</li>
            <li data-aos="fade-left" data-aos-delay="600">Ќе бидете контактирани од страна на вработено лице во Кредо Мк</li>
          </ul>
        </div>
        </div>

    </div>
  )
}

export default ApplyPage