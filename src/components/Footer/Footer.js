import React from 'react'

import s from './Footer.scss'
import FooterEnhancer from 'enhancers/Footer'
import ButtonNext from 'components/ButtonNext/ButtonNext'
import { currency } from 'utils/numeral'

const Footer = ({ currentStep, to, total, colorSrc, wheelsSrc, kwh, type }) => 
  <div className={`${s.container} parent__limit-container`}>
    <div className="limit-container">
      <div className="total">
        <p className="label">Total</p>
        <h3 className="value">{currency(total, false)}</h3>
      </div>
      <p className="car">Model R</p>
      <p className={currentStep > 0 ? "engine" : "disabled"}>{kwh} <span className="unit">{type}</span></p>
      <img className={currentStep > 1 ? "color" : "disabled"} src={colorSrc} alt="Current color" />
      <img className={currentStep > 2 ? "wheel" : "disabled"} src={wheelsSrc} alt="Current wheel" />
      <ButtonNext to={to}>Next</ButtonNext>
    </div>
  </div>

export default FooterEnhancer(Footer)