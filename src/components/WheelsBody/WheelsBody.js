import React from 'react'

import s from './WheelsBody.scss'
import SelectWheel from 'components/WheelsBody/SelectWheel/SelectWheel'
import { wheelsImages } from 'utils/images'

const WheelsBody = ({ onSelectWheels, wheels, selectedWheels }) => 
  <div className={`${s.container} parent__limit-container`}>
    <div className="limit-container">
      <h1 className="title">Wheels</h1>
      <div className={`wheels selected${selectedWheels-1}`}>
      {wheels.map(wheel => 
        <div onClick={() => onSelectWheels(wheel.id)} key={wheel.id}>
          <SelectWheel
            src={wheelsImages[wheel.id-1]}
            label={wheel.label}
            price={wheel.price}
            active={wheel.id === selectedWheels} />
        </div>
      )}
      </div>
      <div className="wheels-holder-space" />
    </div>
  </div>

export default WheelsBody