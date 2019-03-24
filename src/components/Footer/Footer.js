import React from 'react'

import s from './Footer.scss'
import NextButton from 'components/NextButton/NextButton'
import wheelImg from 'images/wheel-metalic.png'
import dotRed from 'images/dot-red.png'

const Footer = () => (
  <div className={`${s.container} parent__limit-container`}>
    <div className="limit-container">
      <div className="total">
        <p className="label">Total</p>
        <h3 className="value">$63.000</h3>
      </div>
      <p className="car">Model R</p>
      <p className="engine">75 <span className="unit">R</span></p>
      <img className="color" src={dotRed} alt="Current color" />
      <img className="wheel" src={wheelImg} alt="Current wheel" />
      <NextButton to="/color">Next</NextButton>
    </div>
  </div>
)

export default Footer