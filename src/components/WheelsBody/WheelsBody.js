import React from 'react'

import s from './WheelsBody.scss'
import SelectWheel from 'components/WheelsBody/SelectWheel/SelectWheel'

const WheelsBody = () => (
  <div className={`${s.container} parent__limit-container`}>
    <div className="limit-container">
      <h1 className="title">Wheels</h1>
      <div className="wheels">
        <SelectWheel />
        <SelectWheel active />
        <SelectWheel />
      </div>
    </div>
  </div>
)

export default WheelsBody