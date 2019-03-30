import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import withProps from 'recompose/withProps'
import * as R from 'ramda'

export default compose(
  setDisplayName('/src/enhancers/Result/propsMapper.js'),
  withProps((props) => {
    const { carData, steps } = props,
      engines = R.path(['engine', 'items'], carData),
      colors = R.path(['color', 'items'], carData),
      wheelsItems = R.path(['wheels', 'items'], carData),
      results = R.path(['results', 'items'], carData),
      price = R.prop('price', carData),
      selectedColor = R.prop('selectedColor', steps),
      selectedEngine = R.prop('selectedEngine', steps),
      selectedWheels = R.prop('selectedWheels', steps),
      engine = engines[selectedEngine-1],
      color = colors[selectedColor-1],
      wheels = wheelsItems[selectedWheels-1],
      carSrc = R.prop('image', results[selectedColor-1]),
      kwh = R.prop('kwh', engine),
      type = R.prop('type', engine),
      range = R.prop('range', engine),
      enginePrice = R.prop('price', engine),
      colorPrice = R.prop('price', color),
      colorLabel = R.prop('label', color),
      wheelsPrice = R.prop('price', wheels),
      wheelsLabel = R.prop('label', wheels),
      engineSelectedInfo = `${kwh} ${type} - ${kwh} kWh - ${range} miles range`,
      total = price + enginePrice + colorPrice + wheelsPrice

    return {
      ...props,
      total,
      carSrc,
      enginePrice,
      colorPrice,
      colorLabel,
      wheelsPrice,
      wheelsLabel,
      price,
      engineSelectedInfo
    }
  })
)