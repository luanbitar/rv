import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import withProps from 'recompose/withProps'
import * as R from 'ramda'

import { dots, wheelsImages } from 'utils/images'

export default compose(
  setDisplayName('/src/enhancers/Footer/propsMapper.js'),
  withProps((props) => {
    const { carData, steps } = props,
      engines = R.path(['engine', 'items'], carData),
      colors = R.path(['color', 'items'], carData),
      wheels = R.path(['wheels', 'items'], carData),
      price = R.prop('price', carData),
      selectedColor = R.prop('selectedColor', steps),
      selectedEngine = R.prop('selectedEngine', steps),
      selectedWheels = R.prop('selectedWheels', steps),
      engine = engines[selectedEngine-1],
      colorSrc = dots[selectedColor-1],
      wheelsSrc = wheelsImages[selectedWheels-1],
      total = engines[selectedEngine-1].price
        + colors[selectedColor-1].price
        + wheels[selectedWheels-1].price
        + price

    return {
      ...props,
      engine,
      colorSrc,
      wheelsSrc,
      total
    }
  })
)