import React from 'react'

import body from 'styles/body-select.scss'
import local from './ResultBody.scss'
import { finalImages } from 'utils/images'
import ButtonRedo from 'components/ButtonRedo/ButtonRedo'

const ResultBody = ({ price, engine, color, wheels, total, onRebuild }) => 
  <div className={`${body.container} ${local.container} parent__limit-container`}>
    <div className="limit-container">
      <div className="section car-section">
        <img src={finalImages[color.id-1]} alt="Chosed car" className="car-image" />
      </div>
      <div className="section detail-section">
        <div className="text">
          <h1 className="title"><span className="pre">Your</span> Model <span className="unit">R</span></h1>
        </div>
        <div className="row">
          <p className="label">Starting price</p>
          <span className="value">{price}</span>
        </div>
        <hr className="spacer" />
        <div className="row">
          <p className="label">{engine.kwh}</p>
          <span className="value">{engine.price}</span>
        </div>
        <div className="row">
          <p className="label">{color.label}</p>
          <span className="value">{color.price}</span>
        </div>
        <div className="row">
          <p className="label">{wheels.label}</p>
          <span className="value">{wheels.price}</span>
        </div>
        <hr className="spacer" />
        <div className="row total">
          <p className="label">Final Price</p>
          <span className="value">{total}</span>
        </div>
        <div className="redo" onClick={onRebuild}>
          <ButtonRedo to="/engine">Rebuild</ButtonRedo>
        </div>
      </div>
    </div>
  </div>

export default ResultBody