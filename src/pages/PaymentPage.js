import React from 'react'
import "../components/Main.css"
import "./PaymentPage.css"
import "../pages/HomePage.css"
import kredo10 from "../assets/images/kredo-10.jpg"

const PaymentPage = () => {
  return (
    <div className='container'>
        <div className='payment-container'>
        <img src={kredo10} alt='Payment img' />
        <div className='payment-text-container'>
            <h3>КАКО ДА ПЛАТАМ?</h3>
            <p>Плаќањето може да го извршите на Благајна во нашата<br/> експозитура, секој работен ден од 08:30 до 16:30 часот или во банка на нашата жиро сметка.</p>
            <ul className='ul-circle'>
                <li>Назив на примач: ФД Кредо Кард ДОО Скопје</li>
                <li>Трансакциска сметка: 210074873800136</li>
                <li>Банка на примач: НЛБ Тутунска Банка</li>
            </ul>
        </div>
        </div>

    </div>
  )
}

export default PaymentPage