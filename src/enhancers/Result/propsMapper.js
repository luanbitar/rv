import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import withProps from 'recompose/withProps'
import * as R from 'ramda'

import { finalImages } from 'utils/images'

export default compose(
  setDisplayName('/src/enhancers/Result/propsMapper.js'),
  withProps((props) => {
    const { carData, steps } = props,
      engines = R.path(['engine', 'items'], carData),
      colors = R.path(['color', 'items'], carData),
      wheelsItems = R.path(['wheels', 'items'], carData),
      price = R.prop('price', carData),
      selectedColor = R.prop('selectedColor', steps),
      selectedEngine = R.prop('selectedEngine', steps),
      selectedWheels = R.prop('selectedWheels', steps),
      engine = engines[selectedEngine-1],
      color = colors[selectedColor-1],
      wheels = wheelsItems[selectedWheels-1],
      carSrc = finalImages[selectedColor-1],
      total = price + engine.price + color.price + wheels.price

    return {
      ...props,
      total,
      engine,
      carSrc,
      color,
      wheels,
      price
    }
  })
)