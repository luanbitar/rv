import React from 'react'

import s from './WheelsBody.scss'
import SelectWheel from 'components/WheelsBody/SelectWheel/SelectWheel'
import WheelsEnhancer from 'enhancers/Wheels'

const WheelsBody = ({ selected, wheels, selectedWheels }) => 
  <div className={`${s.container} parent__limit-container`}>
    <div className="limit-container">
      <h1 className="title">Wheels</h1>
      <div className={`wheels selected${selectedWheels-1}`}>
      {wheels.map(({ id, label, price, image }) => 
        <div onClick={() => selected('selectedWheels', id)} key={id}>
          <SelectWheel
            src={image}
            label={label}
            price={price}
            active={id === selectedWheels} />
        </div>
      )}
      </div>
      <div className="wheels-holder-space" />
    </div>
  </div>

export default WheelsEnhancer(WheelsBody)