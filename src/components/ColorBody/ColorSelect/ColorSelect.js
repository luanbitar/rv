import React from 'react'

import s from './ColorSelect.scss'

const ColorSelect = ({ active, src }) => 
  <div className={`${s.container} ${active ? 'active': ''}`}>
    <img className="color-option" src={src} alt="Color option" />
  </div>

export default ColorSelect