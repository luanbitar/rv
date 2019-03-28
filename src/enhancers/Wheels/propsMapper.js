import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import withProps from 'recompose/withProps'
import * as R from 'ramda'

export default compose(
  setDisplayName('/src/enhancers/Color/propsMapper.js'),
  withProps((props) => {
    const { carData, steps } = props,
      wheels = R.path(['wheels', 'items'], carData),
      selectedWheels = R.prop('selectedWheels', steps)

    return {
      ...props,
      wheels,
      selectedWheels
    }
  })
)