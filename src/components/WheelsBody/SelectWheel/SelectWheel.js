import React from 'react'

import s from './SelectWheel.scss'
import wheelImg from 'images/wheel-metalic.png'

const SelectWheel = ({ active }) => (
  <div className={`${s.container} ${active ? 'active' : ''}`}>
    <img className="wheel" src={wheelImg} alt="Wheel" />
    <h1 className="title">Wheels</h1>
  </div>
)

export default SelectWheel