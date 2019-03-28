import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import withProps from 'recompose/withProps'
import * as R from 'ramda'

import { enginesImages } from 'utils/images'

export default compose(
  setDisplayName('/src/enhancers/Engine/propsMapper.js'),
  withProps((props) => {
    const { carData, steps } = props,
      engines = R.path(['engine', 'items'], carData),
      selectedEngine = R.prop('selectedEngine', steps),
      engineSrc = enginesImages[selectedEngine-1]

    return {
      ...props,
      engines,
      selectedEngine,
      engineSrc
    }
  })
)