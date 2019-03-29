import React from 'react'

import EngineEnhancer from 'enhancers/Engine'
import body from 'styles/body-select.scss'
import local from './EngineBody.scss'
import EngineSelect from './EngineSelect/EngineSelect'
import Loader from 'components/Loader/Loader'

const EngineBody = ({ selected, engines, selectedEngine, engineSrc, isLoadingImage }) => 
  <div className={`${body.container} ${local.container} parent__limit-container`}>
    <div className="limit-container">
      <div className="section car-section">
        {isLoadingImage ? <Loader /> : <img src={engineSrc} alt="Car without engine" className="car-image" />}
      </div>
      <div className="section radio-section">
        <div className="text">
          <h1 className="title">Engine</h1>
        </div>
        {engines.map(({ id, kwh, type, range, price }) => 
          <div className="engine-select" onClick={() => selected('selectedEngine', id)} key={id}>
            <EngineSelect kwh={kwh} type={type} range={range} price={price} active={id === selectedEngine} />
          </div>
        )}
      </div>
    </div>
  </div>

export default EngineEnhancer(EngineBody)