import React from 'react'

import s from './SelectWheel.scss'
import Loader from 'components/Loader/Loader'
import { currency } from 'utils/numeral'

const SelectWheel = ({ active, src, label, price, isLoadingImage }) => 
  <div className={`${s.container} ${active ? 'active' : ''}`}>
    {isLoadingImage ? <Loader /> : <img className="wheel" src={src} alt="Wheel" />}
    {active && <h3 className="name">{label}</h3>}
    {active && <p className="price">{currency(price)}</p>}
  </div>

export default SelectWheel