
import React, { useEffect, useState } from 'react';
import './Range.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RangeComponent = () => {
  const [amount, setAmount] = useState(5000);
  const [term, setTerm] = useState(24);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const minAmount = 7000;
  const maxAmount = 120000;
  const minTerm = 2;
  const maxTerm = 48;

  const apr = 64.9814;

  function calculateMonthlyPayment(principal, annualRate, months) {
    const monthlyRate = annualRate / 12 / 100;
    return (
      principal *
      (monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    );
  }

  const monthlyPayment = calculateMonthlyPayment(amount, apr, term).toFixed(2);

  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const handleTermChange = (e) => {
    setTerm(parseInt(e.target.value));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !phoneNumber || !firstName || !lastName) {
      toast.error('Потребна е е-пошта');
      return;
    }

    if (!email.includes('@')) {
      toast.error('Внесете важечка адреса за е-пошта');
      return;
    }

    toast.success('Е-поштата во подножјето е зачувана!');
    setEmail('');
    setFirstName('');
    setPhoneNumber('');
    setLastName('');
  };

  
 
  return (
    <div className='container-form'>
      <ToastContainer />
      <div>
        <h2 className="form-title">Кредити од<br /> 7.000 до<br /> 120.000 мкд</h2>
      </div>
      <div className="credit-form-container">
        <form onSubmit={handleSubmit} className="credit-form">
          <div className="form-group">
            <h1>АПЛИЦИРАЈ ВЕДНАШ</h1>
            <label htmlFor="amount">Износ: {amount.toLocaleString()} мкд</label>
            <input
              type="range"
              id="amount"
              min={minAmount}
              max={maxAmount}
              value={amount}
              onChange={handleAmountChange}
              className="range-slider"
            />
          </div>

          <div className="form-group">
            <label htmlFor="term">Рок: {term} месеци</label>
            <input
              type="range"
              id="term"
              min={minTerm}
              max={maxTerm}
              value={term}
              onChange={handleTermChange}
              className="range-slider"
            />
          </div>

          <div className="payment-details">
            <div className="detail-row">
              <span>Износ на рата:</span>
              <span>{Number(monthlyPayment).toLocaleString()} мкд</span>
            </div>
            <div className="detail-row">
              <span>СВТ (%):</span>
              <span>{apr}</span>
            </div>
          </div>

          <div className='form-details'>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Телефонски број"
              value={phoneNumber}
              onChange={handleChange}
              className='input-long'
            />

            <input
              type="email"
              name="email"
              placeholder="Емаил адреса"
              value={email}
              onChange={handleChange}
              className='input-long'
            />

            <input
              type="text"
              name="firstName"
              placeholder="Име"
              value={firstName}
              onChange={handleChange}
              className='input-short'
            />

            <input
              type="text"
              name="lastName"
              placeholder="Презиме"
              value={lastName}
              onChange={handleChange}
              className='input-short'
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="primary-button">Аплицирај</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default RangeComponent;

