import React from 'react'

import s from './SelectWheel.scss'
import { isIncluded } from 'utils/numeral'

const SelectWheel = ({ active, src, label, price }) => 
  <div className={`${s.container} ${active ? 'active' : ''}`}>
    <img className="wheel" src={src} alt="Wheel" />
    {active && <h3 className="name">{label}</h3>}
    {active && <p className="price">{isIncluded(price)}</p>}
  </div>

export default SelectWheel