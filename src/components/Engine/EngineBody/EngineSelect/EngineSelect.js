import React from 'react'

import s from "./EngineSelect.scss"

const EngineSelect = ({ kwh, type, range, price, color }) => (
  <div className={s.container}>
    <p className="content type">{kwh} <span className="type-symbol">{type}</span></p>
    <p className="content">{kwh} <span className="unit">kWh</span></p>
    <p className="content">{range} <span className="unit">miles range</span></p>
    <div className="color" style={{background: color}} />
  </div>
)

export default EngineSelect