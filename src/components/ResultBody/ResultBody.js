import React from 'react'

import body from 'styles/body-select.scss'
import local from './ResultBody.scss'
import redCar from 'images/final-red.png'
import ButtonRedo from 'components/ButtonRedo/ButtonRedo'

const ResultBody = () => 
  <div className={`${body.container} ${local.container} parent__limit-container`}>
    <div className="limit-container">
      <div className="section car-section">
        <img src={redCar} alt="Chosed car" className="car-image" />
      </div>
      <div className="section detail-section">
        <div className="text">
          <h1 className="title"><span className="pre">Your</span> Model <span className="unit">R</span></h1>
        </div>
        <div className="row">
          <p className="label">Starting price</p>
          <span className="value">$63.000</span>
        </div>
        <hr className="spacer" />
        <div className="row">
          <p className="label">75 P - 75 KWh - 275 miles range</p>
          <span className="value">+ $5.500</span>
        </div>
        <div className="row">
          <p className="label">Metallic Vermilion Paint</p>
          <span className="value">Included</span>
        </div>
        <div className="row">
          <p className="label">22” Performance Carbon</p>
          <span className="value">+ $2.000</span>
        </div>
        <hr className="spacer" />
        <div className="row total">
          <p className="label">Final Price</p>
          <span className="value">$71.000</span>
        </div>
        <div className="redo">
          <ButtonRedo to="/engine">Rebuild</ButtonRedo>
        </div>
      </div>
    </div>
  </div>

export default ResultBody