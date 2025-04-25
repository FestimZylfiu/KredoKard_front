import React, { useState } from 'react';
import './Range.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RangeComponent = () => {
 
  return (
    <div className='container-form'>
      <ToastContainer />
      <div>
        <h2 className="form-title">Кредити од<br /> 7.000 до<br /> 120.000 мкд</h2>
      </div>
      <div className="credit-form-container">
        <form className="credit-form">
          <div className="form-group">
            <h1>АПЛИЦИРАЈ ВЕДНАШ</h1>
            <label htmlFor="amount">Износ: мкд</label>
            <input
              type="range"
              id="amount"
              className="range-slider"
            />
          </div>

          <div className="form-group">
            <label htmlFor="term">Рок: месеци</label>
            <input
              type="range"
              id="term"
              className="range-slider"
            />
          </div>

          <div className="payment-details">
            <div className="detail-row">
              <span>Износ на рата:</span>
              <span> мкд</span>
            </div>
            <div className="detail-row">
              <span>СВТ (%):</span>
              <span></span>
            </div>
          </div>

          <div className='form-details'>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Телефонски број"
              className='input-long'
            />

            <input
              type="email"
              name="email"
              placeholder="Емаил адреса"
              className='input-long'
            />

            <input
              type="text"
              name="firstName"
              placeholder="Име"
              className='input-short'
            />

            <input
              type="text"
              name="lastName"
              placeholder="Презиме"
              className='input-short'
            />
          </div>

          <div className="form-actions">
            <button className="primary-button">Аплицирај</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RangeComponent;
