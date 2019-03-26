import React from 'react'

import body from 'styles/body-select.scss'
import local from './EngineBody.scss'
import EngineSelect from './EngineSelect/EngineSelect'
import { enginesImages } from 'utils/images'

const EngineBody = ({ onSelectEngine, engines, selectedEngine }) => 
  <div className={`${body.container} ${local.container} parent__limit-container`}>
    <div className="limit-container">
      <div className="section car-section">
        <img src={enginesImages[selectedEngine-1]} alt="Car without engine" className="car-image" />
      </div>
      <div className="section radio-section">
        <div className="text">
          <h1 className="title">Engine</h1>
        </div>
        {engines.map(engine => 
          <div className="engine-select" onClick={() => onSelectEngine(engine.id)} key={engine.id}>
            <EngineSelect kwh={engine.kwh} type={engine.type} range={engine.range} price={engine.price} active={engine.id === selectedEngine} />
          </div>
        )}
      </div>
    </div>
  </div>

export default EngineBody