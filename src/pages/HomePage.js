import React from 'react'
import "../components/Main.css"
import "./HomePage.css"
import kredo2 from "../assets/images/kredo-2.png"

function HomePage() {
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