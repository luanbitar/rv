import React from 'react'

import body from 'styles/body-select.scss'
import local from './EngineBody.scss'
import withoutEngine from 'images/engine-1.png'
import EngineSelect from './EngineSelect/EngineSelect'

const EngineBody = ({ onSelectEngine, engines, engineSelected }) => 
  <div className={`${body.container} ${local.container} parent__limit-container`}>
    <div className="limit-container">
      <div className="section car-section">
        <img src={withoutEngine} alt="Car without engine" className="car-image" />
      </div>
      <div className="section radio-section">
        <div className="text">
          <h1 className="title">Engine</h1>
        </div>
        {engines.map(engine => 
          <div className="engine-select" onClick={() => onSelectEngine(engine.id)} key={engine.id}>
            <EngineSelect kwh={engine.kwh} type={engine.type} range={engine.range} price={engine.price} active={engine.id === engineSelected} />
          </div>
        )}
      </div>
    </div>
  </div>

export default EngineBody