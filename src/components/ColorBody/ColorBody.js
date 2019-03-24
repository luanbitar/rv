import React from 'react'

import body from 'styles/body-select.scss'
import local from './ColorBody.scss'
import redCar from 'images/color-red.png'
import ColorSelect from './ColorSelect/ColorSelect'
import dotImage from 'images/dot-red.png'

const ColorBody = () => (
  <div className={`${body.container} ${local.container} parent__limit-container`}>
    <div className="limit-container">
      <div className="section car-section">
        <img src={redCar} alt="Car without engine" className="car-image" />
        <h3 className="color">Metalic Vermilion</h3>
        <p className="value">Included</p>
      </div>
      <div className="section radio-section">
        <div className="text">
          <h1 className="title">Color</h1>
          <p className="description">The 2019 Model R have 3 unique metalic color options. Each color was meticulously developed to look like something completely new to your eyes.</p>
        </div>
        <div className="color-select">
          <div className="limit-width">
            <ColorSelect src={dotImage} />
            <ColorSelect src={dotImage} active />
            <ColorSelect src={dotImage} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ColorBody