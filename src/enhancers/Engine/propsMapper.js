import { compose, setDisplayName, withProps } from 'recompose'
import * as R from 'ramda'

import { enginesImages } from 'utils/images'

export default compose(
  setDisplayName('/src/enhancers/Engine/propsMapper.js'),
  withProps((props) => {
    const { carData } = props,
          engines = R.path(['engine', 'items'], carData),
          selectedEngine = R.prop('selectedEngine', carData),
          engineSrc = enginesImages[selectedEngine-1]

    return {
      ...props,
      engines,
      selectedEngine,
      engineSrc
    }
  })
)