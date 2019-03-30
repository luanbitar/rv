import React from 'react'

import body from 'styles/body-select.scss'
import local from './ResultBody.scss'

import ResultEnhancer from 'enhancers/Result'
import ButtonRedo from 'components/ButtonRedo/ButtonRedo'
import Loader from 'components/Loader/Loader'
import { currency } from 'utils/numeral'

const ResultBody = ({ price, enginePrice, colorPrice, colorLabel, wheelsPrice, wheelsLabel, total, carSrc, resetSteps, engineSelectedInfo, isLoadingImage }) => 
  <div className={`${body.container} ${local.container} parent__limit-container`}>
    <div className="limit-container">
      <div className="section car-section">
        {isLoadingImage ? <Loader /> : <img src={carSrc} alt="Chosed car" className="car-image" />}
      </div>
      <div className="section detail-section">
        <div className="text">
          <h1 className="title"><span className="pre">Your</span> Model <span className="unit">R</span></h1>
        </div>
        <div className="row">
          <p className="label">Starting price</p>
          <span className="value">{currency(price, false)}</span>
        </div>
        <hr className="spacer" />
        <div className="row">
          <p className="label">{engineSelectedInfo}</p>
          <span className="value">{currency(enginePrice)}</span>
        </div>
        <div className="row">
          <p className="label">{colorLabel}</p>
          <span className="value">{currency(colorPrice)}</span>
        </div>
        <div className="row">
          <p className="label">{wheelsLabel}</p>
          <span className="value">{currency(wheelsPrice)}</span>
        </div>
        <hr className="spacer" />
        <div className="row total">
          <p className="label">Final Price</p>
          <span className="value">{currency(total, false)}</span>
        </div>
        <div className="redo" onClick={() => resetSteps()}>
          <ButtonRedo to="/engine">Rebuild</ButtonRedo>
        </div>
      </div>
    </div>
  </div>

export default ResultEnhancer(ResultBody)
