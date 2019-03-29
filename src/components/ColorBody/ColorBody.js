import React from 'react'

import body from 'styles/body-select.scss'
import local from './ColorBody.scss'
import ColorSelect from './ColorSelect/ColorSelect'
import ColorEnhancer from 'enhancers/Color'
import { dots } from 'utils/images'
import { isIncluded } from 'utils/numeral'
import Loader from 'components/Loader/Loader'

const ColorBody = ({ description, colors, carSrc, label, price, selected, selectedColor, isLoadingImage }) => 
  <div className={`${body.container} ${local.container} parent__limit-container`}>
    <div className="limit-container">
      <div className="section car-section">
        {isLoadingImage ? <Loader /> : <img src={carSrc} alt="Car without engine" className="car-image" />}
        <h3 className="color">{label}</h3>
        <p className="value">{isIncluded(price)}</p>
      </div>
      <div className="section radio-section">
        <div className="text">
          <h1 className="title">Color</h1>
          <p className="description">{description}</p>
        </div>
        <div className="color-select">
          <div className="limit-width">
          {colors.map(({ id }) => 
            <div onClick={() => selected('selectedColor', id)} key={id}>
              <ColorSelect src={dots[id-1]} active={id === selectedColor} />
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  </div>

export default ColorEnhancer(ColorBody)