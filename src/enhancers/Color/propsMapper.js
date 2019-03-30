import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import withProps from 'recompose/withProps'
import * as R from 'ramda'

export default compose(
  setDisplayName('/src/enhancers/Color/propsMapper.js'),
  withProps((props) => {
    const { carData, steps, isLoadingImage } = props,
      description = R.path(['color', 'description'], carData),
      colors = R.path(['color', 'items'], carData),
      selectedColor = R.prop('selectedColor', steps),
      currentColor = colors[selectedColor-1],
      carSrc = R.prop('image', colors[selectedColor-1]),
      label = R.prop('label', currentColor)
    let price = R.prop('price', currentColor)

    return {
      ...props,
      description,
      colors,
      carSrc,
      label,
      price,
      selectedColor,
      isLoadingImage: isLoadingImage || !carSrc
    }
  })
)