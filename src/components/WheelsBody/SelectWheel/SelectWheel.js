import React from 'react'

import s from './SelectWheel.scss'

const SelectWheel = ({ active, src, label, price }) => 
  <div className={`${s.container} ${active ? 'active' : ''}`}>
    <img className="wheel" src={src} alt="Wheel" />
    {active && <h3 className="name">{label}</h3>}
    {active && <p className="price">{price}</p>}
  </div>

export default SelectWheel