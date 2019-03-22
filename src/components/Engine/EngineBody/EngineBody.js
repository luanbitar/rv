import React from 'react'

import s from './EngineBody.css'
import withoutEngine from 'images/with-engine.png'
import withEngine from 'images/without-engine.png'

const EngineBody = () => (
  <div className={s.container}>
    <div className={s.section}>
      <img src={withoutEngine} alt="Car without engine" />
    </div>
    <div className={[s.section, s.radioSection].join(' ')}>
      <img src={withEngine} alt="Car with engine" />
    </div>
  </div>
)

export default EngineBody