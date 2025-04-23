import React from 'react'
import "./ContactPage.css"
import './ApplyPage.css'

const ApplyPage = () => {
  return (
    <div className='container'>
        <div className='apply-container'>
        <div className='apply-text-container'>
          <h1>Може да аплицирате во нашата експозитура која е лоцирана<br/> во Скопје или ОНЛАЈН.</h1>
          <p>Аплицирајте онлајн во неколку чекори:</p>
          <ul className='ul-circle'>
            <li>Пристапете на нашиот веб-сајт www.kredo.mk</li>
            <li>Изберете го потребниот износ</li>
            <li>Изберете рок на отплата</li>
            <li>Изберете го копчето АПЛИЦИРАЈ</li>
            <li>Внесете ги вашите лични податоци</li>
            <li>Ќе бидете контактирани од страна на вработено лице во Кредо Мк</li>
          </ul>
        </div>
        </div>

    </div>
  )
}

export default ApplyPage