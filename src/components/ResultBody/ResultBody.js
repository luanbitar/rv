import React from 'react'

import body from 'styles/body-select.scss'
import local from './ResultBody.scss'

import ResultEnhancer from 'enhancers/Result'
import ButtonRedo from 'components/ButtonRedo/ButtonRedo'
import { isIncluded } from 'utils/numeral'

const ResultBody = ({ price, engine, color, wheels, total, carSrc, resetSteps }) => 
  <div className={`${body.container} ${local.container} parent__limit-container`}>
    <div className="limit-container">
      <div className="section car-section">
        <img src={carSrc} alt="Chosed car" className="car-image" />
      </div>
      <div className="section detail-section">
        <div className="text">
          <h1 className="title"><span className="pre">Your</span> Model <span className="unit">R</span></h1>
        </div>
        <div className="row">
          <p className="label">Starting price</p>
          <span className="value">{isIncluded(price, false)}</span>
        </div>
        <hr className="spacer" />
        <div className="row">
          <p className="label">{engine.kwh}</p>
          <span className="value">{isIncluded(engine.price)}</span>
        </div>
        <div className="row">
          <p className="label">{color.label}</p>
          <span className="value">{isIncluded(color.price)}</span>
        </div>
        <div className="row">
          <p className="label">{wheels.label}</p>
          <span className="value">{isIncluded(wheels.price)}</span>
        </div>
        <hr className="spacer" />
        <div className="row total">
          <p className="label">Final Price</p>
          <span className="value">{isIncluded(total, false)}</span>
        </div>
        <div className="redo" onClick={() => resetSteps()}>
          <ButtonRedo to="/engine">Rebuild</ButtonRedo>
        </div>
      </div>
    </div>
  </div>

export default ResultEnhancer(ResultBody)
