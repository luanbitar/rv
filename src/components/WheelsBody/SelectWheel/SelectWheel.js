import React from 'react'

import s from './SelectWheel.scss'
import wheelImg from 'images/wheel-metalic.png'

const SelectWheel = ({ active }) => (
  <div className={`${s.container} ${active ? 'active' : ''}`}>
    <img className="wheel" src={wheelImg} alt="Wheel" />
    {active && <h3 className="name">20" Silver Metalic</h3>}
    {active && <p className="price">Included</p>}
  </div>
)

export default SelectWheel