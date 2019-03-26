import React from 'react'

import s from './Footer.scss'
import ButtonNext from 'components/ButtonNext/ButtonNext'

const Footer = ({ to, total, currentStep, engine, color, wheels }) => 
  <div className={`${s.container} parent__limit-container`}>
    <div className="limit-container">
      <div className="total">
        <p className="label">Total</p>
        <h3 className="value">${total}</h3>
      </div>
      <p className="car">Model R</p>
      <p className={currentStep > 0 ? "engine" : "disabled"}>{engine.kwh} <span className="unit">{engine.type}</span></p>
      <img className={currentStep > 1 ? "color" : "disabled"} src={color} alt="Current color" />
      <img className={currentStep > 2 ? "wheel" : "disabled"} src={wheels} alt="Current wheel" />
      <ButtonNext to={to}>Next</ButtonNext>
    </div>
  </div>

export default Footer