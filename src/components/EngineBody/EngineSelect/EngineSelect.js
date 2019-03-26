import React from 'react'

import s from "./EngineSelect.scss"

const EngineSelect = ({ kwh, type, range, price, active }) => 
  <div className={`${s.container} ${active ? 'active': ''}`}>
    <p className="content type">{kwh} <span className="type-symbol">{type}</span></p>
    <p className="content">{kwh} <span className="unit">kWh</span></p>
    <p className="content">{range} <span className="unit">miles range</span></p>
    <div className="color" />
    <div className={`price ${price !== 0 && active ? 'price-active' : ''}`}>+$ {price}</div>
  </div>

export default EngineSelect