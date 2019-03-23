import React from 'react'

import s from './EngineBody.scss'
import withoutEngine from 'images/with-engine.png'
import withEngine from 'images/without-engine.png'

const EngineBody = () => (
  <div className={s.container}>
    <div className="section">
      <img src={withoutEngine} alt="Car without engine" />
    </div>
    <div className="section radioSection">
      <img src={withEngine} alt="Car with engine" />
    </div>
  </div>
)

export default EngineBody