import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import withProps from 'recompose/withProps'
import * as R from 'ramda'

export default compose(
  setDisplayName('/src/enhancers/Engine/propsMapper.js'),
  withProps((props) => {
    const { carData, steps } = props,
      engines = R.path(['engine', 'items'], carData),
      selectedEngine = R.prop('selectedEngine', steps),
      engineSrc = engines[selectedEngine-1].image

    return {
      ...props,
      engines,
      selectedEngine,
      engineSrc
    }
  })
)