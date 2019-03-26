import React from 'react'

import body from 'styles/body-select.scss'
import local from './ColorBody.scss'
import ColorSelect from './ColorSelect/ColorSelect'
import { dots, cars } from 'utils/colors'

const ColorBody = ({ colors, onSelectColor, selectedColor }) => 
  <div className={`${body.container} ${local.container} parent__limit-container`}>
    <div className="limit-container">
      <div className="section car-section">
        <img src={cars[selectedColor-1]} alt="Car without engine" className="car-image" />
        <h3 className="color">{colors.items[selectedColor-1].label}</h3>
        <p className="value">{colors.items[selectedColor-1].price}</p>
      </div>
      <div className="section radio-section">
        <div className="text">
          <h1 className="title">Color</h1>
          <p className="description">{colors.description}</p>
        </div>
        <div className="color-select">
          <div className="limit-width">
          {colors.items.map(color => 
            <div onClick={() => onSelectColor(color.id)} key={color.id}>
              <ColorSelect src={dots[color.id-1]} active={color.id === selectedColor} />
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  </div>

export default ColorBody