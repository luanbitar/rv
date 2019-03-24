import React from 'react'

import s from './EngineBody.scss'
import withoutEngine from 'images/engine-1.png'
import withEngine from 'images/engine-2.png'
import EngineSelect from './EngineSelect/EngineSelect'

const EngineBody = () => (
  <div className={`${s.container} parent__limit-container`}>
    <div className="limit-container">
      <div className="section car-section">
        <img src={withoutEngine} alt="Car without engine" className="car-image" />
      </div>
      <div className="section radio-section">
        <h1 className="title">Engine</h1>
        <EngineSelect kwh="75" type="P" range="275" price="0" color="#AB1725" />
        <EngineSelect kwh="100" type="S" range="355" price="5500" color="#0F1C2D" />
        <EngineSelect kwh="125" type="B" range="10000" price="10000" color="#A8A8A8" />
      </div>
    </div>
  </div>
)

export default EngineBody